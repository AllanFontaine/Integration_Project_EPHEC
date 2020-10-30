from django.db import models
from django.db.models.deletion import CASCADE, PROTECT
from django.contrib.auth.models import User
from rest_framework.reverse import reverse as api_reverse


class Plantes(models.Model):
    nom = models.CharField(max_length=100)
    taux_ideal_eau = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)
    image = models.ImageField('plantes', upload_to='./Img', blank=True)

    def __str__(self):
        return self.nom

    def get_api_url(self, request=None):
        return api_reverse("api-appli:post-rud-plant", kwargs={'pk': self.pk}, request=request)


class Parcelle(models.Model):
    numero_parcelle = models.IntegerField()
    user = models.ForeignKey(User, on_delete=CASCADE)
    plante = models.ForeignKey(Plantes, on_delete=CASCADE)
    taille = models.FloatField()

    def __str__(self):
        return "Parcelle numéro " + self.numero + "appartenant à " + self.user + " contenant " + self.plante

    def get_api_url(self, request=None):
        return api_reverse("api-appli:post-rud-parce", kwargs={'pk': self.pk}, request=request)
