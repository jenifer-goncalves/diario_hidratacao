import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export function DailyGoal( {used = 2000, onAddc, onRemove} ){

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ajustar meta diária</Text>

            <View style={styles.buttonRow}>
                <Pressable style={styles.button} onPress={() => onRemove(250)}>
                    <Text  style={styles.buttonText}>-250ml</Text>
                </Pressable>

               <Text style={styles.text}>{used} ml</Text>

                <Pressable style={styles.button} onPress={() => onAddc(250)}>
                    <Text  style={styles.buttonText}>+250ml</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: '100%',
  },
  title:{
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7C93',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 340,
  },
  button: {
    borderWidth: 1.5,
    borderColor: '#4FC3F7', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#154360', 
    marginHorizontal: 12,
  },
  buttonText: {
    color: '#0091EA', 
    fontSize: 14,
    fontWeight: '600',
  },



})