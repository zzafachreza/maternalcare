import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../utils'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native';


const MyList = ({ no, label, judul = false }) => {
    return (
        <View style={{
            marginVertical: judul ? 10 : 1,
            flexDirection: 'row'
        }}>
            <Text style={{
                width: judul ? 0 : 20,
                fontFamily: fonts.primary.normal,
                fontSize: 16,
                color: colors.secondary
            }}>
                {no}
            </Text>
            <Text style={{
                flex: 1,
                fontFamily: fonts.primary.normal,
                fontSize: 16,
                maxWidth: '95%',
                color: colors.secondary
            }}>
                {label}
            </Text>
        </View>
    )
}

const MyListSub = ({ no, label }) => {
    return (
        <View style={{
            left: 20,
            marginVertical: 2,
            flexDirection: 'row'
        }}>
            <Text style={{
                width: 15,
                fontFamily: fonts.primary.normal,
                fontSize: 16,
                color: colors.secondary
            }}>
                {no}
            </Text>
            <Text style={{
                flex: 1,
                fontFamily: fonts.primary.normal,
                fontSize: 16,
                maxWidth: '95%',
                color: colors.secondary
            }}>
                {label}
            </Text>
        </View>
    )
}

const MyImg = ({ img, label }) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
        }}>
            <Image source={img} style={{
                width: windowWidth,
                height: windowWidth / 2,
                resizeMode: 'contain'
            }} />
            <Text style={{
                marginTop: 10,
                fontFamily: fonts.primary.normal,
                color: colors.secondary,
                fontSize: 16,
            }}>
                {label}
            </Text>
        </View>
    )
}


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
                <Image source={require('../k3a.png')} style={{
                    width: windowWidth - 30,
                    height: windowHeight,
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
                    }}>Intranatal Kala III</Text>
                </TouchableOpacity>


                <Image source={require('../k3b.png')} style={{
                    width: windowWidth - 50,
                    alignSelf: 'center',
                    height: windowHeight - 200,
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
                        fontSize: 12,
                        textAlign: 'center'
                    }}>Standar Prosedur Operasional (SPO) Kala III</Text>
                </TouchableOpacity>
                <View style={{
                    padding: 10,
                    marginBottom: 10
                }}>

                    <MyList no='1' label='Memberi tahu ibu akan disuntik' />
                    <MyList no='2' label='Menyutikan Oksitosin 10 unit secara intra muskuler pada bagian luar paha kanan 1/3 atas setelah melakukan aspirasi terlebih dahulu untuk memastikan bahwa ujung jarum tidak mengenai pembuluh darah' />
                    <MyList no='3' label='Memindahkan klem pada tali pusat hingga berjarak 5-10 cm dari vulva' />
                    <MyList no='4' label='Meletakkan tangan kiri di atas simpisis menahan bagian bawah uterus, sementara tangan kanan memegang tali pusat menggunakan klem atau kain kasa dengan jarak antara 5-10 cm dari vulva' />
                    <MyList no='5' label='Saat kontraksi, memegang tali pusat dengan tangan kanan sementara tangan kiri menekan uterus dengan hati-hati ke arah dorso kranial.Bila uterus tidak segera berkontraksi, minta ibu atau keluarga untuk melakukan stimulasi putting susu' />
                    <MyList no='6' label='Jika dengan peregangan tali pusat terkendali tali pusat terlihat bertambah panjang dan terasa adanya pelepasan plasenta , minta ibu untuk meneran sedikit sementara tangan kanan menarik tali pusat ke arah bawah kemudian ke atas sesuai dengan kurva jalan lahir hingga plasenta tampak pada vulva.' />
                    <MyList no='7' label='Setelah plasenta tampak di vulva, teruskan melahirkan plasenta dengan hati-hati.Bila perlu (terasa ada tahanan), pegang plasenta dengan kedua tangan dan lakukan putaran searah untuk membantu pengeluaran plasenta dan mencegah robeknya selaput ketuban.' />


                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})