import { View, Text, Pressable, StyleSheet } from "react-native";

export function ActionButtons(){
    return(
        <View>
            <Text>Adicionar consumo:</Text>

            <View style={styles.container}>
                <Pressable style={styles.botao}
                    // onPress={onPressLearnMore}
                    title="+200ml"
                />
                <Pressable style={styles.botao}
                    // onPress={onPressLearnMore}
                    title="+350ml"
                />
                <Pressable style={styles.botao}
                    // onPress={onPressLearnMore}
                    title="+500ml"
                />
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    container:{

    },
    botao:{
        backgroundColor: '#1fb8e7', 
        borderRadius: '10%',
    }, 
})