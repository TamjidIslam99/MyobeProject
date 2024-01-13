from django.db import models

# Create your models here.
class Mission(models.Model):
    description=models.CharField(max_length=50)

    def __str__(self):
        return self.description

class PEO(models.Model):
    descriptionPEO=models.CharField(max_length=50)

    def __str__(self):
        return self.descriptionPEO

class PLO(models.Model):
    descriptionPLO=models.CharField(max_length=50)

    def __str__(self):
        return self.descriptionPLO    
    

class CLO(models.Model):
   descriptionCLO = models.CharField(max_length=50)
   knowledge_level = models.CharField(max_length=50)

def __str__(self):
        return f"{self.descriptionCLO} - {self.knowledge_level}"

class Book_reference(models.Model):
   name = models.CharField(max_length=50)
   author = models.CharField(max_length=50)
   publisher =models.CharField(max_length=50)
   year =models.CharField(max_length=50)
   edition =models.CharField(max_length=50)


def __str__(self):
        return self.name ,self.author ,self.punlisher ,self.year ,self.edition
    
class Mapping(models.Model):
    peo = models.ForeignKey(PEO, on_delete=models.CASCADE)
    mission = models.ForeignKey(Mission, on_delete=models.CASCADE)
    correlation_level = models.IntegerField()

    def __str__(self):
        return f"{self.peo} - {self.mission} - {self.correlation_level}"
    
class Attitude(models.Model):
     description=models.CharField(max_length=50)   

class Skill(models.Model):
     description=models.CharField(max_length=50)   
class CO(models.Model):
     description=models.CharField(max_length=50)  


class Vision(models.Model):
     description=models.CharField(max_length=50)


class Knowledge(models.Model):
     description=models.CharField(max_length=50)  