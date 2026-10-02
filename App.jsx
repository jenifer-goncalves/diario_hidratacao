import { useState } from 'react';
import { StatusBar, StyleSheet, View, Text} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress, GOAL } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';

export default function App(){
   

    const GOAL = 2000;
    const [consumed, setConsumed] = useState(0)

    const handleAddWater = (valor) => {
        setConsumed((consumed) => consumed + valor)
    };

    const handleReset = () =>{
        setConsumed(0)
    };

    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="auto"/>

                        <View style={styles.content}>
                            <Header GOAL={GOAL} />
                            <WaterProgress consumed={consumed} goal={GOAL}/>
                            <ActionButtons onAdd={handleAddWater} onReset={handleReset}/>
                        </View>
                   
            </SafeAreaView>
        </SafeAreaProvider>
     
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});




