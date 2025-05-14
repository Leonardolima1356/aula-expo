import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, View, TouchableOpacity } from "react-native";

export default function Register(){

const [nome, setNome] = useState("")
const [email, setEmail] = useState("")
const [pass, setPass] = useState("")

const onPress = () => {
    router.push("/(tabs)")
}

    return(
        <SafeAreaView>
            <Text>Nome</Text>
            <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholder="Digite seu nome" keyboardType="default"/>
            <Text></Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Digite seu Email" keyboardType="email-address"/>
            <Text>Senha</Text>
            <TextInput style={styles.input} onChangeText={setPass} value={pass} placeholder="Digite sua senha" keyboardType="default"/>
            <Text>Confirmar Senha</Text>
            <TextInput style={styles.input} onChangeText={setPass} value={pass} placeholder="Digite novamente sua senha" keyboardType="default"/>
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.btn}></Text>
                </TouchableOpacity>
                <View>
                    <Link href={"/#"}>CONFIRMAR</Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        gap: 20
    },
    button: {
        backgroundColor: "#090909"
    },
    btn: {
        color: "white"
    }
})