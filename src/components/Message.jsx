import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export function Message(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Dica de Saúde</Text>
            <Text style={styles.text}>Beber água regularmente melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: '20',
    },
    title:{
        fontWeight: 'bold',
        color: COLORS.textMain,
    },
    text:{
        color: COLORS.textMain,
    },
})