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

            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 10,
            }}>
                <Image source={require('../k4a.png')} style={{
                    width: windowWidth - 30,
                    height: windowHeight - 150,
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
                    }}>Intranatal Kala IV</Text>
                </TouchableOpacity>


                <Image source={require('../k4b.png')} style={{
                    width: windowWidth - 50,
                    alignSelf: 'center',
                    height: windowHeight * 1.2,
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
                    }}>Perawatan Intranatal Kala IV</Text>
                </TouchableOpacity>

                <Image source={require('../k4c.png')} style={{
                    width: windowWidth - 50,
                    height: windowHeight - 300,
                    alignSelf: 'center',
                    resizeMode: 'contain'
                }} />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})