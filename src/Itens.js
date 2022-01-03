import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import CelulaItem from './CelulaItem'
import FAB from 'react-native-fab'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Modalize } from 'react-native-modalize';



export default function Itens() {

    const [listaLivros, setListaLivros] = useState(
        [
            // { key: 1, nome: '7 Vidas de um cachorro', possui: true, lido: false, tema: 'terror' },
            // { key: 2, nome: 'Harry Potter', possui: true, lido: true, tema: 'terror' },
            // { key: 3, nome: 'Senhor dos Aneis', possui: false, lido: false, tema: 'terror' },
            // { key: 4, nome: 'Biblia', possui: false, lido: true, tema: 'ficção' },
            // { key: 5, nome: 'Romeu e Julieta', possui: true, lido: true, tema: 'romance' }
        ]
    )

    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current.open();
    };

    const getListaStorage = async () => {

        try {
            const value = await AsyncStorage.getItem('@lista')
            if (value !== null) {
                setListaLivros(JSON.parse(value))
            }
        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getListaStorage()
    }, [])

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
                renderItem={(item) => <CelulaItem livro={item} listaLivros={listaLivros} setListaLivros={setListaLivros} key={item.index} />}
                listKey={'listaLivros'}
            />
            <FAB buttonColor="darkviolet" iconTextColor="#FFFFFF" onClickAction={() => { onOpen() }} visible={true} iconTextComponent={<Icon name="plus" />} />

            <Modalize
                ref={modalizeRef}
                modalStyle={{ backgroundColor: '#222', paddingVertical: 30, paddingHorizontal: 20 }}
                handleStyle={{ backgroundColor: '#aaa', paddingTop: 10 }}
                handlePosition={'inside'}
                adjustToContentHeight={true}
                FooterComponent={<View style={{ height: 20 }} />}>

                <View style={{ height: 500, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>INSIRA AQUI SEU NOVO LIVRO</Text>
                </View>
            </Modalize>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingTop: '1%',
        flexWrap: 'wrap'
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: '1%'
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