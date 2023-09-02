import React from "react";
import { View, Text, StyleSheet, Image} from "react-native-web"

const LayoutScreen = () => {
  return(
    <View style={styles.root}>                            
      <Image style={styles.img1} source={require("./assets/imagens/FB_IMG_1608586956176.jpg")}/>
      <Image style={styles.img2} source={require("./assets/imagens/FB_IMG_1614260130279.jpg")}/>
      <Image style={styles.img3} source={require("./assets/imagens/FB_IMG_1615245299631.jpg")}/>
    </View> 
  )
}

const styles= StyleSheet.create({
 
  root:{   
     flex:  1,
     flexDirection: 'row',
     justifyContent: 'center',
     borderWidth: 1,
  },
  img1:{    width: 90, height: 90 },
  img2:{    width: 130, height: 80},
  img3:{    width: 95, height: 60}
});
export default LayoutScreen;