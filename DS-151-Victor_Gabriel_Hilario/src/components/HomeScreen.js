import React from "react";
import { View, Text, StyleSheet,} from 'react-native';
import { Button } from 'react-native-web';
import Home2 from "./flatlist";
import Main from "./main";
function HomeScreen({navigation}){
  return (
    <View style={style.mainView }>
    <Text>Home Screen</Text>
      <Button title="Ir para galeria"
           onPress={ () => navigation.navigate('Home2')} />
      <Button title="Ir para formulário"
           onPress={ () => navigation.navigate('Form')} />
      <Button title="Ir para contador"
           onPress={ () => navigation.navigate('CounterScreen')} />     
      <Button title="ColorList"
            onPress={ () => navigation.navigate('ColorList')} />      
      <Button title="Layout"
            onPress={ () => navigation.navigate('Layout')} />      
    </View>
  );

}

const style = StyleSheet.create({
  mainView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { HomeScreen };