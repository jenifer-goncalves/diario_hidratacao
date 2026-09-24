import { useState } from 'react';
import { StatusBar, StyleSheet, View, Text} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';

export default function App(){
    // const GOAL = 2000;
    // const [consumed, setConsumed] = useState(0);

    // const handleAddWater = (amount) =>{

    // };

    // const handleReset = () => {

    // };

    const GOAL = 2000;
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                    <View>
                        <Text>
                            <Header GOAL={GOAL} />
                            <WaterProgress />
                        </Text>
                    </View>
            </SafeAreaView>
        </SafeAreaProvider>
     
    )
};






