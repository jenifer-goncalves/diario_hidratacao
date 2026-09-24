import { View, Text, StyleSheet } from "react-native";


export function WaterProgress( {consumido = 2500, GOAL = 2000}){

const porcentagem = Math.min(Math.round((consumido / GOAL) * 100),100)


    return(
        <View>
            <Text> Total consumido: {consumido}ml </Text>
            <Text> Você atingiu {porcentagem}% da meta diária.</Text>
        </View>
    )
}

