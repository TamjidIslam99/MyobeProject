from rest_framework import serializers
from .models import Mission ,PEO ,PLO ,CLO ,Book_reference,Mapping,Attitude,Skill,CO,Vision,Knowledge,PloMapPeo,CloMapPlo

class MissionSerial(serializers.ModelSerializer):
    class Meta:
        model=Mission
        fields='__all__'

class PEOSerial(serializers.ModelSerializer):
    class Meta:
        model=PEO
        fields='__all__'      

class PLOSerial(serializers.ModelSerializer):
    class Meta:
        model=PLO
        fields='__all__'       


class CLOSerial(serializers.ModelSerializer):
    class Meta:
        model=CLO
        fields='__all__' 

class BookSerial(serializers.ModelSerializer):
    class Meta:
        model=Book_reference
        fields='__all__'   

class MappingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mapping
        fields = ['peo', 'mission', 'correlation_level']        
        
class AttitudeSerial(serializers.ModelSerializer):
    class Meta:
        model=Attitude
        fields='__all__'   


class SkillSerial(serializers.ModelSerializer):
    class Meta:
        model=Skill
        fields='__all__'  


class COSerial(serializers.ModelSerializer):
    class Meta:
        model=CO
        fields='__all__'  

class VisionSerial(serializers.ModelSerializer):
    class Meta:
        model=Vision
        fields='__all__'          
                                       

class KnowledgeSerial(serializers.ModelSerializer):
    class Meta:
        model=Knowledge
        fields='__all__'    

class PloMapPeoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PloMapPeo
        fields = '__all__'  

class CloMapPloSerializer(serializers.ModelSerializer):
    class Meta:
        model = CloMapPlo
        fields = '__all__'          
