import yaml
import pandas as pd
from pandas.io.json import json_normalize

def get_nested_dataframes(dataframe_json):
    return pd.DataFrame(dataframe_json.values[0])

def normalize_flatten_nested_df(var_list):
    return json_normalize(var_list.values[0])

class ControllerYaml(object):
    def __init__(self,controller_json):
        if isinstance(controller_json,dict):
            self.data = self._convert_dataframe(controller_json)
        else:
            raise ValueError("Provided file is not in valid controller format")
    def _convert_dataframe(self,data):
        return json_normalize(data)
    
    def get_global_key(self):
        return list(self.data["key"]) or []
    def get_heartbeat_interval(self):
        return list(self.data["heartbeat_interval"]) or []
    def get_project_awsdetails_accesskey(self):
        return list(self.data["projects.awsDetails.accessKey"]) or []
    def get_project_awsdetails_secretkey(self):
        return list(self.data["projects.awsDetails.secretKey"]) or []


class ControllerCloud(ControllerYaml):
    def __init__(self,controller_json):
        ControllerYaml.__init__(self,controller_json)
        #print(self.data)
    def get_cloud_details(self):
        df={}
        if self.data["clouds"].shape[0]==1:
            df=get_nested_dataframes(self.data["clouds"])
        else:
            for item in range(self.data["clouds"].shape[0]):
                df[item] = json_normalize(self.data["clouds"][item])
        return df
        
class ControllerProject(ControllerYaml):
    def __init__(self,controller_json):
        if isinstance(controller_json,dict):
            ControllerYaml.__init__(self,controller_json)
        else:
            self.data = controller_json
        #print(self.data)
        
    def get_project(self):
        df={}
        col_name="projects.projectList"
        if self.data[col_name].shape[0] <= 1:
            df=get_nested_dataframes(self.data[col_name])
        else:
            for item in range(self.data[col_name].shape[0]):
                df[item] = json_normalize(self.data[col_name][item])
        return df
    def get_project_name(self):
        df=self.get_project()
        return list(df.name)
    
    def get_application_details(self,project):
        df=self.get_project()
        df_app = get_nested_dataframes(df[df.name==str(project)]["applications"])
        return df_app
    def add_application(self,project,request_kwargs):
        df_app=self.get_application_details(project)
        return df_app.append(pd.DataFrame(request_kwargs))
        
    def get_application_names(self,project):
        df_app=self.get_application_details(project)
        return list(df_app.name)
    
    def get_app_endpoints(self,project,application):
        """
        'name', 'endpoint_type', 'config', 'tags', 'metric'
        """
        df_app=self.get_application_details(project)
        df_app_end=df_app[df_app['name']==application]["endpoints"]
        return get_nested_dataframes(df_app_end)
    
    def add_app_endpoints(self,project,application,request_kwargs):
        df_app_endpoint=self.get_app_endpoints(project,application)
        return df_app_endpoint.append(pd.DataFrame(request_kwargs))
        
    def get_endpoint_name(self,project,application):
        df=self.get_app_endpoints(project,application)
        return list(df.name)

    def get_endpoint_tag(self,project,application,endpoint):
        df_endpoint=self.get_app_endpoints(project,application)
        df= normalize_flatten_nested_df(df_endpoint[df_endpoint.name==endpoint]["tags"])
        return df
    
    def get_endpoint_config(self,project,application,endpoint):
        df_endpoint=self.get_app_endpoints(project,application)
        df= normalize_flatten_nested_df(df_endpoint[df_endpoint.name==endpoint]["config"])
        return df
    
    def get_endpoint_metric(self,project,application,endpoint):
        df_endpoint=self.get_app_endpoints(project,application)
        df= normalize_flatten_nested_df(df_endpoint[df_endpoint.name==endpoint]["metric"])
        return df
    
    def add_metric(self,project,application,endpoint,plugin,request_kwargs):
        df_metric_plugin=self.get_endpoint_metric(project,application,endpoint)
        plugin_kwargs=request_kwargs
        df= df_metric_plugin.append(pd.DataFrame(plugin_kwargs))
        return df,self.data
    
    def get_metric_plugin_name(self,project,application,endpoint):
        df_metric=self.get_endpoint_metric(project,application,endpoint)
        return list(df_metric.plugin)
    
    def get_metric_plugin_details(self,project,application,endpoint,plugin):
        """
        'plugin', 'enabled', 'interval', 'config.ip', 'config.username',
       'config.password', 'config.documentsTypes', 'config.port'
        """
        df_metric=self.get_endpoint_metric(project,application,endpoint)
        df= df_metric[df_metric.plugin==plugin]
        return df


    
# if __name__=="__main__":
#     import os
#     from main import config_ops
#     FILEPATH = (os.path.join(os.path.dirname(__file__),"test.yaml"))
#     config = config_ops.read_config(FILEPATH)
#     print(config)
    
    
    