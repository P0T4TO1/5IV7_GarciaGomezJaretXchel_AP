import {Button, Image, ScrollView, View} from 'react-native';
import {useNavigate, useParams} from "react-router-native";
import React, {useEffect, useState} from "react";
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import {AspectRatio, Box, Center, Heading, HStack, NativeBaseProvider, Stack, Text} from "native-base";

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
    const { width } = useWindowDimensions();

    const getSelectedRecipe = () => {
        fetch(`${recipeURL}/${idRecipe}.json`)
            .then((response)=> response.json())
            .then((json) => {
                setIngredients(json.extendedIngredients);
                setData(json);
            })
            .catch((error) => console.error(error))
    }
    const summaryData = {
        html: `${data.summary}`
    }

    const intrcutionsData = {
        html: `${data.instructions}`
    }

    return(
        <View style={{flex: 1}}>
            <NativeBaseProvider>
                <ScrollView>
                    <Box alignItems="center" mt="20">
                        <Box maxW="350" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                            <Box>
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{
                                        uri: `${data.image}`
                                    }} alt="image" />
                                </AspectRatio>
                                {data.veryPopular === true ?
                                    <Center bg="violet.500" _dark={{
                                        bg: "violet.400"
                                    }} _text={{
                                        color: "warmGray.50",
                                        fontWeight: "700",
                                        fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        Receta popular
                                    </Center>
                                    : <Center bg="violet.500" _dark={{
                                        bg: "violet.400"
                                    }} _text={{
                                        color: "warmGray.50",
                                        fontWeight: "700",
                                        fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        Receta
                                    </Center>
                                }
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        {data.title}
                                    </Heading>
                                    <Text fontSize="md" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Summary:
                                    </Text>
                                    <RenderHtml
                                        contentWidth={width}
                                        source={ summaryData }
                                    />
                                </Stack>
                                <Stack space={2}>
                                    <Text fontSize="md" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Ingredients:
                                    </Text>
                                    {ingredients.map(({original}) => {
                                        return(
                                            <View>
                                                <Text >{`\u2022 ${original}`}</Text>
                                            </View>
                                        )
                                    })}
                                </Stack>
                                <Stack space={2}>
                                    {data.instructions &&
                                        <View>
                                            <Text fontSize="md" _light={{
                                                color: "violet.500"
                                            }} _dark={{
                                                color: "violet.400"
                                            }} fontWeight="500" ml="-0.5" mt="-1">
                                                Instructions:
                                            </Text>
                                            <RenderHtml
                                                contentWidth={width}
                                                source={ intrcutionsData }
                                            />
                                        </View>
                                    }
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    <View style={{marginTop: 60, marginBottom: 50}}>
                        <Button
                            title='Ir a la pantalla Inicial'
                            onPress={
                                () => navigate('/')
                            }>
                        </Button>
                    </View>
                </ScrollView>
            </NativeBaseProvider>
        </View>
    )
}

export default Recipe;