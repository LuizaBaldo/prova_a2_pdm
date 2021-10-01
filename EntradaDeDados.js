import React, { useState } from "react";
import {
    Button, 
    FlatList, 
    Keyboard, 
    StyleSheet, 
    Text, 
    TextInput, 
    View 
  } from 'react-native';

function EntradaDeDados(props){
    const [lote, setLote] = useState('')
    const [descricao, setDescricao] = useState('')
    const [fabricante, setFabricante] = useState('')
    const capturarLote = (lote) => {
        setLote(lote)
      }
      const capturarDescricao = (descricao) => {
        setDescricao(descricao)
      }
      const capturarFabricante = (fabricante) => {
        setFabricante(fabricante)
      }
    return(
       <View>
           <Text
           style={styles.text}>Lote da Vacina</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite o lote da vacina"
            onChangeText={capturarLote}
            value={lote}
            />
            <Text
            style={styles.text}>Descrição da Vacina</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite a descrição da vacina"
            onChangeText={capturarDescricao}
            value={descricao}
            />
            <Text
            style={styles.text}>Fabricante da Vacina</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite o fabricante da vacina"
            onChangeText={capturarFabricante}
            value={fabricante}
            />
            <Button
            title="OK"
            onPress={() => props.onCriaLista(lote, descricao, fabricante)}
            />
       </View>
    );
}

const styles = StyleSheet.create({
    input: {
      padding: 12,
      borderBottomColor: '#BB96F3',
      borderBottomWidth: 2,
      marginBottom: 20,
      width: 500, 
    },
  });

export default EntradaDeDados;