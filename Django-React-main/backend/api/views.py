from django.shortcuts import render
from rest_framework import viewsets ,generics
from .models import *
from .serializers import *
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
class MissionViewSet(viewsets.ModelViewSet):
    serializer_class = MissionSerial
    queryset = Mission.objects.all()

class PeoViewSet(viewsets.ModelViewSet):
    serializer_class= PEOSerial

    def get_queryset(self):
        up_syllabus_id = self.request.query_params.get('upSyllabus')

        if up_syllabus_id:
            return PEO.objects.filter(upSyllabus=up_syllabus_id)

        return PEO.objects.all()

    
   

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

class PloMapPeoViewSet(viewsets.ModelViewSet):
    queryset = PloMapPeo.objects.all()
    serializer_class = PloMapPeoSerializer

class CloMapPloViewSet(viewsets.ModelViewSet):
    queryset = CloMapPlo.objects.all()
    serializer_class = CloMapPloSerializer    

class CurriculumViewSet(viewsets.ModelViewSet):
    queryset = Curriculum.objects.all()
    serializer_class = CurriculumSerializer   

class SyllabusViewSet(viewsets.ModelViewSet):
    serializer_class = SyllabusSerializer

    def get_queryset(self):
        up_curriculum_id = self.request.query_params.get('upCurriculum')
        if up_curriculum_id:
            return Syllabus.objects.filter(upCurriculum=up_curriculum_id)
        return Syllabus.objects.all()

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class AssessViewSet(viewsets.ModelViewSet):
    queryset = Assessment.objects.all()
    serializer_class = AssessmentSerializer    

class OutlineViewSet(viewsets.ModelViewSet):
    queryset = Outline.objects.all()
    serializer_class = OutlineSerializer        


@api_view(['POST'])
def add_clos_to_outline(request, outline_id):
    outline = get_object_or_404(Outline, pk=outline_id)
    # Assuming the CLO ids are sent in the request body as a list
    selected_clos = request.data.get('clos', [])
    outline.clos.add(*selected_clos)
    outline.save()
    serializer = OutlineSerializer(outline)
    return Response(serializer.data)    

@api_view(['POST'])
def add_skill_to_outline(request, outline_id):
    outline = get_object_or_404(Outline, pk=outline_id)
    # Assuming the CLO ids are sent in the request body as a list
    selected_skill = request.data.get('skills', [])
    outline.skills.add(*selected_skill)
    outline.save()
    serializer = OutlineSerializer(outline)
    return Response(serializer.data)    

@api_view(['POST'])
def add_know_to_outline(request, outline_id):
    outline = get_object_or_404(Outline, pk=outline_id)
    # Assuming the knowledge ids are sent in the request body as a list
    selected_know = request.data.get('knows', [])
    outline.knows.add(*selected_know)
    outline.save()
    serializer = OutlineSerializer(outline)
    return Response(serializer.data)


@api_view(['POST'])
def add_att_to_outline(request, outline_id):
    outline = get_object_or_404(Outline, pk=outline_id)
    # Assuming the CLO ids are sent in the request body as a list
    selected_att = request.data.get('atts', [])
    outline.atts.add(*selected_att)
    outline.save()
    serializer = OutlineSerializer(outline)
    return Response(serializer.data)    