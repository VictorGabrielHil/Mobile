import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"
import ResultMedia from "../Result";

export default function Form(){

    const [nota1, setNota1] = useState(null)
    const [nota2, setNota2] = useState(null)
    const [messageMedia, setMessageMedia] = useState("Preencha os valores corretamente!")
    const [media, setMedia] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    return(
        <View>
        <Text>Nota 1</Text>
        <TextInput onChangeText={setNota1} value= {nota1}
        keyboardType="numeric"/>
        <Text>Nota 2</Text>
        <TextInput onChangeText={setNota2} value= {nota2} 
        keyboardType="numeric"/>
        <Button onPress={()=> validacaoMedia()} title= "Calcular Média"/>
        <ResultMedia messageResultMedia={messageMedia}
        resultMedia={media}></ResultMedia>
        </View>
        );

        function CalculadoraMedia(){
            setMedia(((parseFloat(nota1)+parseFloat(nota2))/2).toFixed(2))
            }
            function validacaoMedia(){
            if(nota2 != null && nota1 != null){
            setMessageMedia("Sua Média é igual: ")
            CalculadoraMedia()
            setTextButton("Calcular Novamente")
            return
            }
            setMedia(null)
            setTextButton("Calcular")
            setMessageMedia("preencha os dados")
            }
}