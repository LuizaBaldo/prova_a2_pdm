import React from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'

import Cartao from './Cartao'
import App from './App'

class ExibeVacinas extends React.Component {
    render() {
        return(
        <Cartao style={styles.cartao}>
            <View>
                <FlatList 
                    data={this.props.vacina}
                    renderItem={(vacina) => (
                        <View style={styles.vacina}>
                            <Text style={styles.listaTexto}>Lote: {vacina.item.lote}</Text>
                            <Text style={styles.listaTexto}>Descrição: {vacina.item.descricao}</Text>
                            <Text style={styles.listaTexto}>Fabricante: {vacina.item.fabricante}</Text>
                        </View>
                    )}
                />
            </View>
        </Cartao>
        )
    }
}

const styles = StyleSheet.create({
    vacina: {
        padding: 5,
        justifyContent: 'space-between',
        borderWidth: 1,
        marginTop: 25,
        backgroundColor: '#BB96F3',
        borderColor: '#BB96F3'
    },
    listaTexto:{
        color: '#FFFFFF'
    }
})

export default ExibeVacinas;