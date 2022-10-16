import React, {useEffect, useState} from "react";
import {AspectRatio, Box, Heading, NativeBaseProvider, Stack, Text} from "native-base";
import {Image, ScrollView, View} from "react-native";
import {Link} from "react-router-native";

function Home () {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllRecipesData()
    },[]);

    const getAllRecipesData = () => {
        fetch("recipe-json/complexSearch.json",
            {
                headers:
                    {'Content-Type': 'application/json','Accept': 'application/json'}
            })
            .then((response)=> response.json())
            .then((json) => setData(json.results))
            .catch((error) => console.error(error))
    }

    return (
        <View style={{flex: 1}}>
            <NativeBaseProvider>
                <ScrollView>
                <Text mt="20" style={{textAlign: "center"}}
                fontSize="xl">Todas las recetas</Text>
                <Text style={{textAlign: "center"}}
                      fontSize="xs">Presiona cualquier receta para una vista detallada</Text>
                {data.map(({image, title, id})=>{
                    return(
                        <Link to={`/receta/${id}`} key={id + 2}>
                            <Box alignItems="center" mt="8" mb="5" key={id}>
                                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                                                uri: `${image}`
                                            }} alt="image" />
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <Stack space={2}>
                                            <Heading size="md" ml="-1" style={{textAlign: "center"}}>
                                                {title}
                                            </Heading>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Box>
                        </Link>
                    )
                    })
                }</ScrollView>
            </NativeBaseProvider>

        </View>
    )
}

export default Home;