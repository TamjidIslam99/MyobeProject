from rest_framework import routers
from .views import MissionViewSet,PeoViewSet,PloViewSet,CloViewSet ,BookViewSet,MappingViewSet,AttitudeViewSet,SkillViewSet,COViewSet

router = routers.DefaultRouter()
router.register(r'api/mission', MissionViewSet, 'mission')
router.register(r'api/peo', PeoViewSet, 'peo')
router.register(r'api/plo', PloViewSet, 'plo')
router.register(r'api/clo', CloViewSet, 'clo')
router.register(r'api/book', BookViewSet, 'book')
router.register(r'api/mappings', MappingViewSet, basename='mapping')
router.register(r'api/attitude',AttitudeViewSet , basename='attitude')
router.register(r'api/skill',SkillViewSet , basename='skill')
router.register(r'api/CO',COViewSet , basename='skill')
urlpatterns = router.urls