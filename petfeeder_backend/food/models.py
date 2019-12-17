from django.db import models


class Food(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    change = models.IntegerField()

    def __str__(self):
        return self.time+" "+self.change
