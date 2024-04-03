from django.contrib import admin
from .models import *

# Register your models here.
class MissionAdmin(admin.ModelAdmin):
    list_display = ["description"]


admin.site.register(Mission,MissionAdmin)

class PEOAdmin(admin.ModelAdmin):
    list_display = ["upSyllabus","descriptionPEO"]

admin.site.register(PEO,PEOAdmin)    

class PLOAdmin(admin.ModelAdmin):
    list_display = ["descriptionPLO"]

admin.site.register(PLO,PLOAdmin)   

class CLOAdmin(admin.ModelAdmin):
    list_display = ["descriptionCLO","knowledge_level"]

admin.site.register(CLO,CLOAdmin)   


class BookAdmin(admin.ModelAdmin):
    list_display = ["name","author","publisher","year","edition"]

admin.site.register(Book_reference,BookAdmin)   
@admin.register(Mapping)
class MappingAdmin(admin.ModelAdmin):
    list_display = ["peo", "mission", "correlation_level"]

class AttitudeAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(Attitude,AttitudeAdmin ) 


class SkillAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(Skill,SkillAdmin )  


class COAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(CO,COAdmin )  
class VisionAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(Vision,VisionAdmin ) 


class KnowledgeAdmin(admin.ModelAdmin):
    list_display = ["description"]

admin.site.register(Knowledge,KnowledgeAdmin ) 


@admin.register(PloMapPeo)
class PloMapPeoAdmin(admin.ModelAdmin):
    list_display = ["plo_id", "peo_id", "correlation_level"]

@admin.register(CloMapPlo)
class CloMapPloAdmin(admin.ModelAdmin):
    list_display = ["clo_id", "plo_id", "correlation_level"]

@admin.register(Curriculum)
class CurriculumAdmin(admin.ModelAdmin):
    list_display = ["starting", "ending"]

@admin.register(Syllabus)
class SyllabusAdmin(admin.ModelAdmin):
    list_display = ["upCurriculum", "program", "selectedOption", "yearValue", "semesterValue", "session"]



@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ["course_code","credit","title","prerequisites","type","contact_hours","total_lectures","class_tests","final_exam","faculty","rationale"] 

@admin.register(Assessment)  
class AssessmentAdmin(admin.ModelAdmin):
    list_display=["rem_fest","rem_assign","rem_exper","rem_final","un_fest","un_assign","un_exper","un_final","apply_fest","apply_assign","apply_exper","apply_final","analyze_fest","analyze_assign","apply_exper","apply_final","eva_fest","eva_assign","eva_exper","eva_final","c_fest","c_assign","c_exper","c_final","final"]     


@admin.register(Outline)
class OutlineAdmin(admin.ModelAdmin):
    list_display=['heading','description','nonfaceToface','lecture','exercise','practical','others','ilearn','totalSlt']
