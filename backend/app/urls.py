from .views import AgentMonitor, ControllerMonitor

from django.urls import path,include
from rest_framework import routers
router = routers.DefaultRouter()
router.register('apm', AgentMonitor,basename='apm')
router.register('controller', ControllerMonitor,basename='controller')
urlpatterns = [ 
    path('api/apm/', AgentMonitor.as_view(), name="api_apm"),
    path('api/controller/', ControllerMonitor.as_view(), name="controller"),
]