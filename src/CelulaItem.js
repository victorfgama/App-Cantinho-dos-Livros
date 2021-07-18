import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';


export default function CelulaItem(props) {
    console.log(props.item)
    return (

        // <View style={styles.container} >
        <View style={styles.item}>
            <Text style={styles.texto}>{props.item.nome}</Text>
            <View style={styles.checkBox}>
                <CheckBox tintColor={'white'} onCheckColor={'violet'} onTintColor={'violet'} value={props.item.possui} />
                <CheckBox tintColor={'white'} onCheckColor={'violet'} onTintColor={'violet'} value={props.item.lido} />
            </View>
        </View>

        // </View>

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
        alignItems: 'center',
        height: 60,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
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
        flexWrap:'wrap'
    },
    checkBox: {
        width: '30%',
        padding: '2%',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})