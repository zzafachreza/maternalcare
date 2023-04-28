import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'
import { Icon } from 'react-native-elements'

export default function Cek({ navigation, route }) {
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
                }}>{item.judul}</Text>
            </View>

            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={item.img} style={{
                    width: '100%',
                    height: 300,
                    resizeMode: 'contain'
                }} />
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate(item.menu, {
                    judul: item.judul
                })} style={{
                    margin: 20,
                    borderRadius: 20,
                    backgroundColor: colors.primary,
                    padding: 10,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon type='ionicon' size={70} name='file-tray-full' color={colors.secondary} />
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: fonts.secondary[600],
                        fontSize: 20,
                        color: colors.secondary,
                    }}>Materi {item.judul}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Youtube', {
                    link: item.link
                })} style={{
                    margin: 20,
                    borderRadius: 20,
                    backgroundColor: colors.primary,
                    padding: 10,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon type='ionicon' size={70} name='logo-youtube' color={colors.secondary} />
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: fonts.secondary[600],
                        fontSize: 20,
                        color: colors.secondary,
                    }}>Video {item.judul}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})