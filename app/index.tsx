import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen(){
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")

const onPress = () => {
    router.push("/(tabs)")
}

    return(
        <SafeAreaView>
            <Text>Login</Text>
            <Text>E-Mail</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Digite seu Email" keyboardType="email-address"/>
            <Text>Senha</Text>
            <TextInput style={styles.input} onChangeText={setPass} value={pass} placeholder="Digite sua senha" keyboardType="default"/>
            <View>
                 <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.btn}>ENTRAR</Text>
                 </TouchableOpacity>
                 <View>
                    <Link href={"/register"}>Cadastrar Novo Usuário</Link>
                 </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "#090909",
        color: "#ffffff"
    },
    button: {
        backgroundColor: "#090909",
    },
    btn: {
        color: "red",
    }
})