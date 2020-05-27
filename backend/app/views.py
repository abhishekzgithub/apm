from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .main import config_ops, controller_service
import json
# Create your views here.
from pdb import set_trace

FILEPATH="/opt/sfagent/config.yaml"
FILEPATH = r"D:\snappyflow\backend\app\test.yaml"

class AgentMonitor(APIView):
    def get(self,request,format=None):
        config_yaml=config_ops.read_config(FILEPATH)
        return Response(config_yaml,status="200")

    def put(self,request):
        json_dict=request.data
        config_yaml=config_ops.update_config(json_dict,FILEPATH)
        return Response(config_yaml,status="200")
    
    def delete(self,request):
        return Response("Delete")
    
class ControllerMonitor(APIView):
    def post(self,request):
        output=str(controller_service.run_locally())
        print(output)
        return Response(output,status="200")
    
    