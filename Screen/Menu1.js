import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../utils'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native';

export default function ({ navigation, route }) {
    const item = route.params;
    return (
        <SafeAreaView style={{
            flex: 1,
            color: colors.white
        }}>

            <View style={{
                padding: 10,
                backgroundColor: colors.primary,
                height: 80,
                marginBottom: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon type='ionicon' size={30} name='arrow-back-outline' color={colors.secondary} />
                </TouchableOpacity>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: fonts.secondary[600],
                    fontSize: 30,
                    flex: 1,
                    color: colors.secondary,
                }}>MATERI {item.judul}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../k1a.png')} style={{
                    width: windowWidth,
                    height: windowHeight / 1.4,
                    resizeMode: 'center'
                }} />

                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    backgroundColor: colors.primary,
                    margin: 10,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.secondary,
                        fontSize: 12
                    }}>Pemeriksaan Denyut Jantung Janin (DJJ) dengan Doppler</Text>
                </TouchableOpacity>


                <Image source={require('../k1b.png')} style={{
                    width: windowWidth - 40,
                    alignSelf: 'center',
                    height: windowHeight - 100,
                    resizeMode: 'contain'
                }} />

                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    backgroundColor: colors.primary,
                    margin: 10,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.secondary,
                        fontSize: 12
                    }}>Perawatan Intranatal Kala I</Text>
                </TouchableOpacity>

                <Image source={require('../k1c.png')} style={{
                    width: windowWidth,
                    height: windowHeight * 1.1,
                    resizeMode: 'contain'
                }} />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    myp: {
        fontFamily: fonts.secondary[400],
        fontSize: 12,
        color: colors.secondary,
        textAlign: 'justify'
    }
})