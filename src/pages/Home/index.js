import React, {useState, useRef} from 'react';
import api from '../../services/api'

import { StyleSheet, Text, View,TextInput,TouchableOpacity,SafeAreaView, Keyboard,Button } from 'react-native';
import {FontAwesome } from '@expo/vector-icons'


export default function Home({navigation}) {
  const [cep, setCep ] = useState('');
  const [cepUser, setCepUser]= useState(null)
  const inputRef = useRef(null);
  
  

  function limpar() {
    setCep('');
    inputRef.current.focus();
  }

  async function buscar(){
   if (cep == '') {
     alert('Digite um cep valido')
     setCep('');
     setCepUser(null);
     return;
   }
   try {
    const response = await api.get(`${cep}/json`)
    setCepUser(response.data);
    Keyboard.dismiss();
     
   } catch (error) {
     console.log('error: '+ error);
     
   }

   
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput 
        style={styles.input}
        placeholder='Ex: 25850000'
        value={cep}
        onChangeText={(cep)=> setCep(cep)}
        keyboardType='numeric'
        ref={inputRef}/>
        </View>
        <View style={styles.BtnContainer}>
          <TouchableOpacity
           style={[styles.button, {backgroundColor:'#1d7ca1'}]}
           onPress={buscar}>
             <FontAwesome name="search"
             size={18}
             color="#FFF"/>
            <Text style={styles.buttonText}>
              Buscar
            </Text>

          </TouchableOpacity>
          <TouchableOpacity 
          style={[styles.button, {backgroundColor: 'red'}]}
          onPress={limpar}>
             <FontAwesome name="trash"
             size={18}
             color="#FFF"/>
            <Text style={styles.buttonText}>
              Limpar
            </Text>

          </TouchableOpacity>
         

        
      </View>
     { cepUser && 
      <View style={styles.resultContainer}>
      <Text style={styles.resultText}> Cep: {cepUser.cep}</Text>
      <Text style={styles.resultText}> Logradouro: {cepUser.logradouro}</Text>
      <Text style={styles.resultText}> Bairro: {cepUser.bairro}</Text>
      <Text style={styles.resultText}> Cidade: {cepUser.localidade}</Text>
      <Text style={styles.resultText}> Estado: {cepUser.uf}</Text>

    </View>}
    <View style={styles.buttonContainer}>
    <Button style={styles.about}
    title="Sobre"
    onPress={() => navigation.navigate('About')}>
     </Button>

    </View>
    
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text: {
    marginTop:25,
    marginBottom:15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#eeee',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18

  },
  BtnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 15,
  borderRadius: 5,
  height: 50,
  
 },
 buttonText: {
   fontSize: 15,
   color: '#fff'

 },
 resultContainer: {
   flex:1,
   justifyContent:'center',
   alignItems: 'center',
   borderWidth: 1,
   borderColor: '#eeee',
   margin: 20,
 },
 resultText:{
 fontSize: 18,
 },
 buttonContainer:{
   display:'flex',
   flex:1,
  width: '100%',
  marginTop: '20%',
  alignContent: 'flex-end',
 

 }
})

