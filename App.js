import {
  Button, 
  FlatList, 
  Keyboard, 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';
import React, { useState } from 'react';
import EntradaDeDados from './EntradaDeDados';
import ExibeVacinas from './ExibeVacinas';

export default function App() {
  
  const [vacinas, setVacinas] = useState([])
  
  function criaLista(lote, descricao, fabricante) {
    const vacina  = {
      lote,
      descricao,
      fabricante
    }
    setVacinas([...vacinas, vacina])
  }


  return (
    <View style={styles.container}>
       <View style={styles.entrada}>
        <EntradaDeDados onCriaLista={criaLista}></EntradaDeDados>
        <ExibeVacinas vacina={vacinas}></ExibeVacinas>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  entrada: {
    marginBottom: 12
  },
});
