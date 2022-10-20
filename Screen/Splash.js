import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'
import { ActivityIndicator } from 'react-native'

export default function Splash({ navigation }) {

    setTimeout(() => {
        navigation.replace('Home');
    }, 2000)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Image source={require('../logo.png')} style={{
                width: 300,
                height: 300
            }} />

            <ActivityIndicator size="large" color={colors.secondary} />



        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 15,
        marginVertical: 2,
        color: colors.primary,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 18,
        marginBottom: 10,
        color: colors.primary,
    },
    txtLogo: {
        fontFamily: fonts.secondary[600],
        fontSize: 40,
        marginBottom: 5,
        color: colors.primary,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 18,
        color: colors.primary,
    },
    txtBrand: {
        fontFamily: fonts.secondary[600],
        fontSize: 17,
        marginTop: 10,
        color: colors.primary,
    }

})