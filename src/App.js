
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import foto from './assets/kaue.jpg';

const App = () => {
  return (
    <>
    <View style={styles.page}>
      <View style={styles.container_cabecalho}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.nome}>KAUÊ JACYNTHO</Text>
        <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
        <View>
          <Text>Github</Text>
          <Text>Facebook</Text>
          <Text>LinkedIn</Text>
        </View>
      </View>
    
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fefefe',
    flex: 1,
  },

  foto: {
    width: 225,
    height: 225,
    borderRadius: 110
  },

  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },

  funcao: {
    color: '#939393',
    marginBottom: 10
  }

});


export default App;