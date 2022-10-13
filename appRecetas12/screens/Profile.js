import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigate, useParams} from "react-router-native";

const Profile = ({navigate = useNavigate()}) =>{
    const route = useParams()
    /**Aqui recuperamo el valor del parametro que enviamos desde el boton que esta en Home.js */
    return(
            <View>
                <View style={{marginTop: 50, marginBottom: 20}}>
                    <Text style={{textAlign: "center"}}>
                        Bienvenido a tu perfil: {route.name}
                    </Text>
                </View>

            <Button
                title='Ir a la pantalla Inicial'
                onPress={
                    () => navigate('/')
                }
            >

            </Button>
        </View>
        )
}

export default Profile;

const styles = StyleSheet.create({
    container : {
        marginTop: 60,
        display: "flex",
        justifyContent: "center",
        marginBottom: 60,
    },
});