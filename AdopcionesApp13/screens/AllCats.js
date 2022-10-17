import {
    Actionsheet,
    AspectRatio,
    Box, Button,
    Center,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    NativeBaseProvider,
    ScrollView,
    Stack,
    StatusBar,
    Text, useDisclose,
    View
} from 'native-base';
import React, {useEffect, useState} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Link, useNavigate} from "react-router-native";

function AllCatsScreen (){
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const navigate = useNavigate();
    const [catsData, setCatsData] = useState([]);
    const [cats2Data, setCats2Data] = useState([]);
    const urlData = "https://p0t4to1.github.io/5IV7_GarciaGomezJaretXchel_AP/adoption-jsons";
    useEffect(() => {
        getCatsData();
        getCatsPage2Data();
    }, [])

    const getCatsData = async () => {
        await fetch(`${urlData}/cats.json`)
            .then((response) => response.json())
            .then((json) => setCatsData(json.animals))
            .catch((error) => console.log(error))
    }

    const getCatsPage2Data = async () => {
        await fetch(`${urlData}/catpage2.json`)
            .then((response) => response.json())
            .then((json) => setCats2Data(json.animals))
            .catch((error) => console.log(error))
    }

    return(
        <NativeBaseProvider>
            <View style={{flex: 1}}>
                <Center>
                    <StatusBar bg="#3700B3" barStyle="light-content"/>
                    <Box safeAreaTop bg="violet.600"/>
                    <HStack bg="violet.500" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
                        <HStack alignItems="center">
                            <IconButton onPress={()=>{navigate("/")}}
                                        icon={<Icon as={MaterialIcons} name="keyboard-backspace" size="sm" color="white"/>}/>
                            <Text color="white" fontSize="20" fontWeight="bold" ml="5">
                                Adopt a Friend
                            </Text>
                        </HStack>
                        <HStack>
                            <Center>
                                <IconButton onPress={onOpen} icon={<Icon as={MaterialIcons} name="menu" size="sm" color="white"/>}/>
                                <Actionsheet isOpen={isOpen} onClose={onClose}>
                                    <Actionsheet.Content>
                                        <Actionsheet.Item onPress={()=>{
                                            navigate("/all-dogs")
                                        }}>See all Dogs</Actionsheet.Item>
                                        <Actionsheet.Item onPress={()=>{
                                            navigate("/all-cats")
                                        }}>See all Cats</Actionsheet.Item>
                                    </Actionsheet.Content>
                                </Actionsheet>
                            </Center>
                        </HStack>
                    </HStack>
                </Center>
            <ScrollView>
            {catsData.map(({type, age, gender, name, photos, contact}) => {
                return (
                    <Box alignItems="center" mt="20">
                        <Link>
                            <Box maxW="350" minW="300" rounded="lg" overflow="hidden" borderColor="coolGray.200"
                                 borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                                <Box>
                                    {photos.slice(0, 1).map(({full}) => {
                                        return (
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: `${full}`
                                                }} alt="image"/>
                                            </AspectRatio>
                                        )
                                    })
                                    }
                                    <Center bg="violet.500" _dark={{
                                        bg: "violet.400"
                                    }} _text={{
                                        color: "warmGray.50",
                                        fontWeight: "700",
                                        fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        {type}
                                    </Center>
                                </Box>
                                <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            {name}
                                        </Heading>
                                        <Text fontSize="md" _light={{
                                            color: "violet.500"
                                        }} _dark={{
                                            color: "violet.400"
                                        }} fontWeight="500" ml="-0.5" mt="1">
                                            Gender: {gender}
                                        </Text>
                                    </Stack>
                                    <Stack space={2} mt="1">
                                        <Text fontSize="md" _light={{
                                            color: "violet.500"
                                        }} _dark={{
                                            color: "violet.400"
                                        }} fontWeight="500" ml="-0.5" mt="-1">
                                            Age: {age}
                                        </Text>
                                    </Stack>
                                    <Stack space={2} mt="1">
                                        <View>
                                            <Text fontSize="md" _light={{
                                                color: "violet.500"
                                            }} _dark={{
                                                color: "violet.400"
                                            }} fontWeight="500" ml="-0.5" mt="-1">
                                                Contact:
                                            </Text>
                                            <Text mt="2">
                                                {contact.email}
                                            </Text>
                                        </View>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Link>
                    </Box>
                )
            })}
                {cats2Data.map(({type, age, gender, name, photos, contact}) => {
                    return (
                        <Box alignItems="center" mt="20">
                            <Link>
                                <Box maxW="350" minW="300" rounded="lg" overflow="hidden" borderColor="coolGray.200"
                                     borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}>
                                    <Box>
                                        {photos.slice(0, 1).map(({full}) => {
                                            return (
                                                <AspectRatio w="100%" ratio={16 / 9}>
                                                    <Image source={{
                                                        uri: `${full}`
                                                    }} alt="image"/>
                                                </AspectRatio>
                                            )
                                        })
                                        }
                                        <Center bg="violet.500" _dark={{
                                            bg: "violet.400"
                                        }} _text={{
                                            color: "warmGray.50",
                                            fontWeight: "700",
                                            fontSize: "xs"
                                        }} position="absolute" bottom="0" px="3" py="1.5">
                                            {type}
                                        </Center>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <Stack space={2}>
                                            <Heading size="md" ml="-1">
                                                {name}
                                            </Heading>
                                            <Text fontSize="md" _light={{
                                                color: "violet.500"
                                            }} _dark={{
                                                color: "violet.400"
                                            }} fontWeight="500" ml="-0.5" mt="1">
                                                Gender: {gender}
                                            </Text>
                                        </Stack>
                                        <Stack space={2} mt="1">
                                            <Text fontSize="md" _light={{
                                                color: "violet.500"
                                            }} _dark={{
                                                color: "violet.400"
                                            }} fontWeight="500" ml="-0.5" mt="-1">
                                                Age: {age}
                                            </Text>
                                        </Stack>
                                        <Stack space={2} mt="1">
                                            <View>
                                                <Text fontSize="md" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} fontWeight="500" ml="-0.5" mt="-1">
                                                    Contact:
                                                </Text>
                                                <Text mt="2">
                                                    {contact.email}
                                                </Text>
                                            </View>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Link>
                        </Box>
                    )
                })}
            </ScrollView>
            </View>
        </NativeBaseProvider>
    )
}

export default AllCatsScreen;