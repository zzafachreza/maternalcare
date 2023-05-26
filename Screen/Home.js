import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'
import { Icon } from 'react-native-elements'

export default function Home({ navigation }) {

    const DataMenu = ({ img, judul, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                backgroundColor: colors.primary,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flex: 1,
                marginHorizontal: 20,
                marginVertical: 5,
                flexDirection: 'row'
            }}>

                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.secondary,
                    left: 25,
                    fontSize: 25,
                    flex: 1,
                }}>{judul}</Text>
                <Image source={img} style={{
                    width: 60,
                    height: 60,
                    marginHorizontal: 10,
                    resizeMode: "contain"
                }} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                flex: 1,
                backgroundColor: colors.primary,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 5,
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                    height: 50,
                }}>
                    <Text style={styles.txt}>Selamat datang</Text>
                    <Text style={styles.txtLogo}>Maternal Care</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 80,
                }}>
                    <Image source={require('../logo.png')} style={{
                        width: 100,
                        height: 100,
                    }} />
                </View>


            </View>
            <View style={{
                flex: 3,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -100,
                }}>
                    <Image source={require('../slider.png')} style={{
                        width: '90%',
                        height: 180,
                        borderRadius: 20,
                    }} />
                </View>

                <DataMenu onPress={() => navigation.navigate('Cek', {
                    link: 'f0AILH0wUtU',
                    judul: 'KALA I',
                    menu: 'Menu1',
                    img: require('../A1.png')
                })} judul="KALA I" img={require('../A1.png')} />
                <DataMenu onPress={() => navigation.navigate('Cek', {
                    judul: 'KALA II',
                    link: 'SDFqHTUMYi4',
                    menu: 'Menu2',
                    img: require('../A2.png')
                })} judul="KALA II" img={require('../A2.png')} />
                <DataMenu onPress={() => navigation.navigate('Cek', {
                    link: 'ebNbndgwd4c',
                    judul: 'KALA III',
                    menu: 'Menu3',
                    img: require('../A3.png')
                })} judul="KALA III" img={require('../A3.png')} />
                <DataMenu onPress={() => navigation.navigate('Cek', {
                    link: 'H1BIar3px28',
                    judul: 'KALA IV',
                    menu: 'Menu4',
                    img: require('../A4.png')
                })} judul="KALA IV" img={require('../A4.png')} />


            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Tentang')} style={{
                padding: 20,
                backgroundColor: colors.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
            }}>
                <Text style={{
                    color: colors.white,
                    fontFamily: fonts.secondary[600],
                    fontSize: 14
                }}>Tentang Aplikasi</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 13,
        color: colors.secondary,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 14,
        marginBottom: 20,
        color: colors.primary,
    },
    txtLogo: {
        fontFamily: fonts.secondary[600],
        fontSize: 30,
        marginBottom: 5,
        color: colors.secondary,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 18,
        color: colors.primary,
    }

})