from rest_framework import serializers
from .models import Mission ,PEO ,PLO ,CLO ,Book_reference,Mapping,Attitude,Skill

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
        
                                       