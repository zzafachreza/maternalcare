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

            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 10,
            }}>
                <Image source={require('../k2a.png')} style={{
                    width: windowWidth - 30,
                    height: windowHeight / 1.5,
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
                    }}>Intranatal Kala II</Text>
                </TouchableOpacity>


                <Image source={require('../k2b.png')} style={{
                    width: windowWidth - 40,
                    alignSelf: 'center',
                    height: windowHeight * 3.2,
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
                    }}>Perawatan Intranatal Kala II</Text>
                </TouchableOpacity>

                <Image source={require('../k2c.png')} style={{
                    width: windowWidth - 30,
                    height: windowHeight - 30,
                    alignSelf: 'center',
                    resizeMode: 'contain'
                }} />


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})