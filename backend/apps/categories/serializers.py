from rest_framework import serializers
from .models import Category, MenuType, SortOption

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class MenuTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuType
        fields = "__all__"
        
class SortOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SortOption
        fields = "__all__"
