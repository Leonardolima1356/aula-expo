import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { data } from "@/constants/data"
import { Item } from "@/components/item"

export default function List(){
    return(
        <>
        <View style={styles.center}>
            <Text>List</Text>
        </View>
        <SafeAreaView style={styles.container}>
            <FlatList style={styles.back} data={data} renderItem={({item}) => (
                <Item name={item.nome} age={item.idade} date={item.data} image={item.imagem}/>
            )}
            keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOpacity: 0.16,
        textShadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        paddingVertical: 20
    },
    container: {
        flex: 1
    },
    back: {
        paddingHorizontal: 20
    }
})