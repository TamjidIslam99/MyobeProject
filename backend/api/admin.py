from django.contrib import admin
from .models import Mission,PEO,PLO,CLO,Book_reference,Mapping,Attitude,Skill

# Register your models here.
class MissionAdmin(admin.ModelAdmin):
    list_display = ["description"]


admin.site.register(Mission,MissionAdmin)

class PEOAdmin(admin.ModelAdmin):
    list_display = ["descriptionPEO"]

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
