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
                        fontSize: 12,
                        textAlign: 'center'
                    }}>Standar Prosedur Operasional (SPO) Kala IV</Text>
                </TouchableOpacity>
                <View style={{
                    padding: 10,
                    marginBottom: 10
                }}>

                    <MyList no='1' label='Segera setelah plasenta lahir, melakukan masase pada fundus uteri dengan menggosok fundus secara sirkuler menggunakan bagian palmar 4 jari tangan kiri hingga kontraksi uterus baik (fundus teraba keras)' />
                    <MyList no='2' label='Sambil tangan kiri melakukan masase pada fundus uteri, periksa bagian maternal dan bagian fetal plasenta dengan tangan kanan untuk memastikan bahwa seluruh kotelidon dan selaput ketuban sudah lahir lengkap, dan memasukkan ke dalam kantong plastik yang tersedia' />
                    <MyList no='3' label='Memeriksa apakah ada robekan pada introitus vagina dan perenium yang menimbulkan perdarahan aktif. Bila ada robekan yang menimbulkan perdarahan aktif, segera lakukan penjahitan' />
                    <MyList no='4' label='Periksa kembali kontraksi uterus dan tanda adanya perdarahan pervaginam, pastikan kontraksi uterus baik' />
                    <MyList no='5' label='Membersihkan sarung tangan dari lendir dan darah di dalam larutan klorin 0,5 %, kemudian bilas tangan yang masih mengenakan sarung tangan dengan air yang sudah di desinfeksi tingkat tinggi dan mengeringkannya' />
                    <MyList no='6' label='Mengikat tali pusat kurang lebih 1 cm dari umbilicus dengan sampul mati' />
                    <MyList no='7' label='Mengikat balik tali pusat dengan simpul mati untuk kedua kalinya' />
                    <MyList no='8' label='Melepaskan klem pada tali pusat dan memasukkannya dalam wadah berisi larutan klorin 0, 5%' />
                    <MyList no='9' label='Membungkus kembali bayi' />
                    <MyList no='10' label='Berikan bayi pada ibu untuk disusui' />
                    <MyList no='11' label='Lanjutkan pemantauan terhadap kontraksi uterus, tanda perdarahan pervaginam dan tanda vital ibu.' />
                    <MyList no='12' label='Mengajarkan ibu/keluarga untuk memeriksa uterus yang memiliki kontraksi baik dan mengajarkan masase uterus apabila kontraksi uterus tidak baik.' />
                    <MyList no='13' label='Mengevaluasi jumlah perdarahan yang terjadi' />
                    <MyList no='14' label='Memeriksa nadi ibu' />
                    <MyList no='15' label='Merendam semua peralatan bekas pakai dalam larutan klorin 0,5 %' />
                    <MyList no='16' label='Membuang barang-barang yang terkontaminasi ke tempat sampah yang di sediakan' />
                    <MyList no='17' label='Membersihkan ibu dari sisa air ketuban, lendir dan darah dan menggantikan pakaiannya dengan pakaian bersih/kering' />
                    <MyList no='18' label='Memastikan ibu merasa nyaman dan memberitahu keluarga untuk membantu apabila ibu ingin minum' />
                    <MyList no='19' label='Dekontaminasi tempat persalinan dengan larutan klorin 0,5%' />
                    <MyList no='20' label='Membersihkan sarung tangan di dalam larutan klorin 0,5% melepaskan sarung tangan dalam keadaan terbalik dan merendamnya dalam larutan klorin 0,5%' />
                    <MyList no='21' label='Mencuci tangan dengan sabun dan air mengalir' />


                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})