import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Image from '../assets/bg_header.jpeg'

export default function Header() {
    return (

        <ImageBackground source={Image} style={styles.container} >
            <Text style={styles.texto}>{'Cantinho \ndos Livros'}</Text>
        </ImageBackground>

    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 150,
        padding: 15

    },
    texto: {
        fontSize: 30,
        fontWeight: '200',
        color: 'white',

    }
})