import {Button, Image, ScrollView, View} from 'react-native';
import {useNavigate, useParams} from "react-router-native";
import React, {useEffect, useState} from "react";
import {AspectRatio, Box, NativeBaseProvider, Text} from "native-base";

const Recipe = () => {
    const navigate = useNavigate();
    const route = useParams();
    const idRecipe = route.id;
    const recipeURL = "https://p0t4to1.github.io/5IV7_GarciaGomezJaretXchel_AP/recipe-json"
    const [ingredients, setIngredients] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        getSelectedRecipe();
    },[]);

    const getSelectedRecipe = () => {
        fetch(`${recipeURL}/${idRecipe}.json`)
            .then((response)=> response.json())
            .then((json) => {
                setIngredients(json.extendedIngredients);
                setData(json);
            })
            .catch((error) => console.error(error))
    }

    return(
        <View style={{flex: 1}}>
            <NativeBaseProvider>
                <ScrollView>
                    <View style={{marginTop: 50, marginBottom: 20}}>
                        <Text style={{textAlign: "center"}}>
                            Todo está en Inglés porque la api que me robe estaba en Inglés
                        </Text>
                        <Text style={{marginTop: 50, textAlign: "center"}}>
                            Receta:
                        </Text>
                        <Text style={{textAlign: "center"}}>
                            {data.title}
                        </Text>
                    </View>
                    <View style={{marginTop: 10, marginBottom: 20}}>
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                <Image source={{
                                    uri: `${data.image}`
                                }} alt="image"/>
                            </AspectRatio>
                        </Box>
                    </View>
                    <View style={{marginTop: 50, marginBottom: 20}}>
                        <Text style={{textAlign: "center"}}>
                            Ingredientes:
                        </Text>
                        {ingredients.map(({original})=> {
                            return(
                                <Text>
                                    {original}
                                </Text>
                            )

                        })}
                    </View>
                    <View style={{marginTop: 50, marginBottom: 20}}>
                        <Text style={{textAlign: "center"}}>
                            Procediemiento:
                        </Text>
                        <Text style={{textAlign: "center"}}>
                            {data.instructions}
                        </Text>
                    </View>
                    <Button
                        title='Ir a la pantalla Inicial'
                        onPress={
                            () => navigate('/')
                        }>
                    </Button>
                </ScrollView>
            </NativeBaseProvider>
        </View>
    )
}

export default Recipe;