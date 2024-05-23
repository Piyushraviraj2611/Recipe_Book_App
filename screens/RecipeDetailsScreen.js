import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import HTML from 'react-native-render-html';

const RecipeDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
          params: {
            apiKey: 'da0c65884bfd4106ace2b53631b61b1f',
          },
        });
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
   <View  style={styles.container2}>
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      <View style={styles.ingredientsContainer}>
        {recipe.extendedIngredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            {ingredient.original}
          </Text>
   
        ))}
      </View>
      </View>
      <View  style={styles.containerInstruction}>
      <Text style={styles.sectionTitle}>Instructions:</Text>
        <HTML source={{ html: recipe.instructions }} contentWidth={300} />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  ingredientsContainer: {
    marginBottom: 16,
  },
  ingredient: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 5,
    padding: 3,
    color: 'black',
  },
  container2: {
    flex: 1,
    padding: 16,
    margin:10,
    backgroundColor: '#D3D3D3',
    borderRadius: 40,
  },
  containerInstruction: {
    flex: 1,
    padding: 5,
    margin:10,
  marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 40,
  },
});

export default RecipeDetailsScreen;