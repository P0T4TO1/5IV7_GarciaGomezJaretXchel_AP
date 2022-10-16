import {Button, ScrollView, View} from 'react-native';
import {useNavigate, useParams} from "react-router-native";
import {useEffect, useState} from "react";
import {NativeBaseProvider, Text} from "native-base";

const Recipe = () => {
    const navigate = useNavigate();
    const route = useParams();
    const idRecipe = route.id;
    const [ingredients, setIngredients] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        getSelectedRecipe();
    },[]);

    const getSelectedRecipe = () => {
        fetch(`https://api.spoonacular.com/recipes/${idRecipe}/information?includeNutrition=false&apiKey=7f50653a46e94ea98b0925019a8427e5`)
            .then((response)=> response.json())
            .then((json) => {
                setIngredients(json.extendedIngredients);
                setData(json);
            })
            .catch((error) => console.error(error))
    }
    console.log(idRecipe)

    return(
        <View style={{flex: 1}}>
            <NativeBaseProvider>
                <ScrollView>
                    <View style={{marginTop: 50, marginBottom: 20}}>
                        <Text style={{textAlign: "center"}}>
                            Receta:
                        </Text>
                        <Text style={{textAlign: "center"}}>
                            {data.title}
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