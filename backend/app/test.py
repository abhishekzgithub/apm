import os
from main import config_ops
from utils import ControllerYaml,ControllerCloud,ControllerProject

FILEPATH = (os.path.join(os.path.dirname(__file__),"test.yaml"))
config = config_ops.read_config(FILEPATH)
#print(config)
# c_yaml=ControllerYaml(config)
# print(c_yaml.get_global_key())
# print(c_yaml.get_heartbeat_interval())
# print(c_yaml.get_project_awsdetails_accesskey())
# print(c_yaml.get_project_awsdetails_secretkey())

#control_cloud=ControllerCloud(config)
#print(control_cloud.get_cloud_details())

obj=ControllerProject(config)
#print(obj.get_project())
prj=obj.get_project_name()
print(prj)
print(obj.get_application_details())