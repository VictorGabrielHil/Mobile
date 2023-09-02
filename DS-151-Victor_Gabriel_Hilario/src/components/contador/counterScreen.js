import React from "react";
import { View, Text} from 'react-native';
import { Button } from 'react-native-web';
import { useState } from "react";

function CounterScreen() {
  const[counter,setCounter] = useState(0);
  return( 
    <View>
      <Button 
        title="Incrementa"
          onPress={() => setCounter(counter+1)}
        />
        <Text>{counter}</Text>
    </View>
  )
}
export default CounterScreen;