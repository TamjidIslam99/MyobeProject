from django.shortcuts import render
from rest_framework import viewsets ,generics
from .models import Mission,PEO,PLO ,CLO,Mapping,Book_reference,Attitude,Skill,CO,Vision,Knowledge
from .serializers import MissionSerial,PEOSerial,PLOSerial ,CLOSerial,BookSerial,MappingSerializer,AttitudeSerial,SkillSerial,COSerial,VisionSerial,KnowledgeSerial
# Create your views here.
class MissionViewSet(viewsets.ModelViewSet):
    serializer_class = MissionSerial
    queryset = Mission.objects.all()

class PeoViewSet(viewsets.ModelViewSet):
    serializer_class= PEOSerial
    queryset=PEO.objects.all()    

class PloViewSet(viewsets.ModelViewSet):
    serializer_class= PLOSerial
    queryset=PLO.objects.all()        

class CloViewSet(viewsets.ModelViewSet):
    serializer_class= CLOSerial
    queryset=CLO.objects.all()   

class BookViewSet(viewsets.ModelViewSet):
    serializer_class= BookSerial
    queryset=Book_reference.objects.all()     
   
class MappingViewSet(viewsets.ModelViewSet):
    queryset = Mapping.objects.all()
    serializer_class = MappingSerializer

class AttitudeViewSet(viewsets.ModelViewSet):
    queryset = Attitude.objects.all()
    serializer_class = AttitudeSerial


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerial    

class COViewSet(viewsets.ModelViewSet):
    queryset = CO.objects.all()
    serializer_class = COSerial   


class VisionViewSet(viewsets.ModelViewSet):
    queryset = Vision.objects.all()
    serializer_class = VisionSerial      

class KnowledgeViewSet(viewsets.ModelViewSet):
    queryset = Knowledge.objects.all()
    serializer_class = KnowledgeSerial           
