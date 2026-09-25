import { useState } from 'react';
import { StatusBar, StyleSheet, View, Text} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress, GOAL } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';

export default function App(){
   

    const GOAL = 2000;
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                    <StatusBar barStyle="auto"/>

                        <View>
                            <Header GOAL={GOAL} />
                            <WaterProgress consumed={1000} goal={GOAL}/>
                            <ActionButtons/>
                        </View>
                   
            </SafeAreaView>
        </SafeAreaProvider>
     
    )
};






