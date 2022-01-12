
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import foto from './assets/kaue.jpg';
import Icon from 'react-native-vector-icons/Feather';

import Card from './components/card/index';

const App = () => {

  function handleRedeSocial(redeSocial) {
    switch(redeSocial) {
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/kauekaj')
      break
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/kauekaj')
      break
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://www.linkedin.com/in/kauekaj/')
      break

    }
  }

  return (
    <>
    <View style={styles.page}>
      <View style={styles.containerCabecalho}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.nome}>KAUÊ JACYNTHO</Text>
        <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
        <View style={styles.redeSocial}>
          <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
            <Icon name='github' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('facebook')}>
            <Icon name='facebook' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
            <Icon name='linkedin' size={20} />
          </TouchableOpacity>
        </View>
      </View>

      
      <Card titulo='Formação Academica'>
        <Text style={styles.cardContentText}>ADS - Unicesumar</Text>
        <Text style={styles.cardContentText}>Eng. Produção - UNA</Text>
        <Text style={styles.cardContentText}>Eng. Ind. - CSUN</Text>
      </Card>
      <Card titulo='Experiência Profissional'>
        <Text style={styles.cardContentText}>Front End Engineer</Text>
        <Text style={styles.cardContentText}>Desenvolvedor Front End</Text>
        <Text style={styles.cardContentText}>Desenvolvedor Web</Text>
      </Card>

      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 110
  },

  containerCabecalho: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },

  funcao: {
    color: '#939393'
  },

  redeSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 15
  },

  cardContentText: {
    color: '#939393',
    marginBottom: 10
  }
 

});


export default App;