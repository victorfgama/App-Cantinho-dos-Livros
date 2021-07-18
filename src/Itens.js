import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import CelulaItem from './CelulaItem'

let listaLivros = [
    { nome: '7 Vidas de um cachorro', possui: true, lido: false, tema: 'terror' },
    { nome: 'Harry Potter', possui: true, lido: true, tema: 'terror' },
    { nome: 'Senhor dos Aneis', possui: false, lido: false, tema: 'terror' },
    { nome: 'Biblia', possui: false, lido: true, tema: 'ficção' },
    { nome: 'Romeu e Julieta', possui: true, lido: true, tema: 'romance' }
]

export default function Itens() {
    return (

        <View style={styles.container} >
            <View style={styles.header}>
                <View style={{ width: '66%' }}>
                    <Text style={styles.texto}>Nome</Text>
                </View>
                <View style={{ width: '22%' }}>
                    <Text style={styles.texto}>Possuo</Text>
                </View>
                <View style={{ width: '12%' }}>
                    <Text style={styles.texto}>Lido</Text>
                </View>
            </View>
            <FlatList
                data={listaLivros}
                renderItem={(item) => <CelulaItem {...item} key={item.index} />}
                listKey={'listaLivros'}
            />

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',

        paddingTop: '5%',

        flexWrap: 'wrap'

    },
    header:{
        flexDirection:'row',
        marginHorizontal:'3%',
        marginVertical:'1%'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: '48%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        borderColor: 'violet',
        borderRadius: 20,
        marginVertical: '2%',
    },
    texto: {
        fontSize: 16,
        fontWeight: '300',
        color: 'violet'
    }
})