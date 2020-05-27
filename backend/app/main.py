import yaml
import subprocess
import json
import paramiko

class Application(object):
    pass

class ConfigOperation(Application):
    def read_config(self,absolute_filename):
        with open(absolute_filename,mode="r") as fr:
            yaml_dict = yaml.load(fr)
        return yaml_dict

    def update_config(self,json_dict,absolute_filename):
        yaml_dict = json.loads(json.dumps((json_dict)))
        with open(absolute_filename,mode = "w") as fw:
            yaml.dump(yaml_dict,fw,Dumper=yaml.Dumper,default_flow_style=False)


class ControllerService(Application):
    connection=""
    def connect(self,ip,username,pwd):
        cli=paramiko.client.SSHClient()
        cli.set_missing_host_key_policy(paramiko.client.AutoAddPolicy())
        cli.connect(hostname=ip,username=username,password=pwd)
        self.connection=cli
        return True
    def run(self):
        cmd="service controller restart"
        stdin_, stdout_, stderr_ = self.connection.exec_command(cmd)
        print(stdin_, stdout_, stderr_)
        lines = stdout_.readlines()
        return lines
    def run_locally(self):
        cmd=["service", "controller", "restart"]
        cmd = ["dir"]
        return subprocess.run(cmd,shell=False,check=True)#,capture_output=True)
    
config_ops=ConfigOperation()
controller_service=ControllerService()