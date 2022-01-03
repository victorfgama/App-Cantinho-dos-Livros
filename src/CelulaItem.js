import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';


export default function CelulaItem({ livro, listaLivros, setListaLivros }) {
    console.log(livro.item)
    console.log(listaLivros)
    console.log(' - - - - - ');


    const updateStatus = async (type) => {
        type === 'possui' ?
            setListaLivros(listaLivros.map(i => i.nome == livro.item.nome ? (i.possui = !i.possui, i) : i))
            :
            setListaLivros(listaLivros.map(i => i.nome == livro.item.nome ? (i.lido = !i.lido, i) : i))

        try {
            await AsyncStorage.setItem('@lista', JSON.stringify(listaLivros))
        } catch (error) {

        }
    }

    return (

        <View style={styles.item}>
            <Text style={styles.texto}>{livro.item.nome}</Text>
            <View style={styles.checkBox}>
                <CheckBox tintColors={{ true: 'darkviolet' }} tintColor={'white'} onCheckColor={'violet'} onTintColor={'violet'} value={livro.item.possui} onValueChange={() => updateStatus('possui')} />
                <CheckBox tintColors={{ true: 'darkviolet' }} tintColor={'white'} onCheckColor={'violet'} onTintColor={'violet'} value={livro.item.lido} onValueChange={() => updateStatus('lido')} />
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',

        paddingTop: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    item: {
        alignSelf: 'center',
        alignItems: 'center',
        height: 60,
        width: '95%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderWidth: 0,
        borderColor: 'violet',
        borderRadius: 20,
        marginVertical: '1%',
        padding: '2%',
        flexDirection: 'row'
    },
    texto: {
        fontSize: 16,
        fontWeight: '300',
        color: 'white',
        justifyContent: 'flex-start',
        width: '64%',
        margin: '2%',
        flexWrap: 'wrap'
    },
    checkBox: {
        width: '30%',
        padding: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})