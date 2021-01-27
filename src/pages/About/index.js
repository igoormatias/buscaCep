import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';

// import { Container } from './styles';

const About = ({navigation}) => {
  return (
      <>
      <View style={styles.container}>
          <Text style={styles.author}>Desenvolvido por Igor Matias</Text>
          <Text style={styles.description}>Curso sujeito programador</Text>
          
      </View>
      <Button
      onPress={()=> navigation.goBack()} 
      title="Voltar">
         
      </Button>
      </>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
      flex: 1,
    },
    author: {
        fontSize: 24,
        fontWeight:'bold',
        color: '#111',
    },
    description: {
        fontSize: 18,
    }
})
export default About;