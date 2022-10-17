import {
    AspectRatio,
    Box,
    Center,
    HamburgerIcon,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    NativeBaseProvider,
    Pressable,
    ScrollView,
    Stack,
    StatusBar,
    Text,
    View
} from 'native-base';
import React, {useState} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


function Home() {
    const [dogsData, setDogsData] = useState([]);



    return (
        <NativeBaseProvider>
            <View style={{flex: 1}}>
                <Center>
                    <StatusBar bg="#3700B3" barStyle="light-content"/>
                    <Box safeAreaTop bg="violet.600"/>
                    <HStack bg="violet.500" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
                        <HStack alignItems="center">
                            <Text color="white" fontSize="20" fontWeight="bold" ml="5">
                                Adopt a Friend
                            </Text>
                        </HStack>
                        <HStack>
                            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white"/>}/>
                        </HStack>
                    </HStack>
                </Center>
            </View>
        </NativeBaseProvider>
    )
}


export default Home;