from django.db import models


class Weight(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    weight = models.IntegerField()

    def __str__(self):
        return self.time+" "+self.weight


class Schedule(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    amount = models.IntegerField()
    hasFeeded = models.BooleanField(default=False)

    def __str__(self):
        return self.time+" "+self.amount
