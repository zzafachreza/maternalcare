import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native'

export default function Tentang({ navigation, route }) {

    return (
        <SafeAreaView style={{
            flex: 1,
            color: colors.white
        }}>


            <ScrollView showsVerticalScrollIndicator={false}>
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
                    }}>Tentang Aplikasi</Text>
                </View>
                <Text style={{
                    textAlign: 'center',
                    marginHorizontal: 20,
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    color: colors.secondary,
                    marginVertical: 10,
                }}>
                    Aplikasi ini berisi tentang materi Keperawatan Maternitas yang terdiri dari Standar Prosedur Operasional (SPO) pada Kala I, Kala II, Kala III dan Kala IV dan berisi tentang video pembelajaran pada setiap Kala.
                </Text>
                <View style={{
                    margin: 10,
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: colors.border
                }}>

                    <Text style={{
                        textAlign: 'center',

                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.secondary,
                        backgroundColor: colors.primary,
                        padding: 10,
                        borderRadius: 20,
                        marginBottom: 10,
                    }}>
                        Peneliti
                    </Text>

                    <View style={{
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../wieda.png')} style={{
                            width: 120,
                            borderRadius: 10,
                            height: 150,
                            resizeMode: 'contain'
                        }} />
                    </View>

                    <Text style={{
                        textAlign: 'center',
                        marginHorizontal: 20,
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.secondary,
                        marginVertical: 10,
                    }}>
                        Wieda Widyatry Qarragita, S.Kep.,Ners
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        marginHorizontal: 20,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        color: colors.secondary,
                        marginVertical: 5,
                    }}>
                        (Dosen Program Studi Magister Keperawatan (S2) Fakultasi Ilmu Dan Teknologi Kesehatan Universitas Jenderal Achmad Yani Cimahi)
                    </Text>
                </View>

                <View style={{
                    margin: 10,
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: colors.border
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.secondary,
                        backgroundColor: colors.primary,
                        padding: 10,
                        borderRadius: 20,
                        marginBottom: 10,
                    }}>
                        Pembimbing
                    </Text>
                    <View style={{
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../yayat.png')} style={{
                            width: 120,
                            borderRadius: 10,
                            height: 150,
                            resizeMode: 'contain'
                        }} />
                    </View>

                    <Text style={{
                        textAlign: 'center',
                        marginHorizontal: 20,
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.secondary,
                        marginVertical: 10,
                    }}>
                        Dr. Yayat Suryati, S.Pd., S.Kp., M.Kep.
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        marginHorizontal: 20,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        color: colors.secondary,
                        marginVertical: 5,
                    }}>
                        (Dosen Program Studi Magister Keperawatan (S2) Fakultasi Ilmu Dan Teknologi Kesehatan Universitas Jenderal Achmad Yani Cimahi)
                    </Text>

                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                        marginVertical: 10,
                    }} />

                    <View style={{
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../juju.png')} style={{
                            width: 120,
                            borderRadius: 10,
                            height: 150,
                            resizeMode: 'contain'
                        }} />
                    </View>


                    <Text style={{
                        textAlign: 'center',
                        marginHorizontal: 20,
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.secondary,
                        marginVertical: 10,
                    }}>
                        Juju Juhaeriah, S.Kp, M.Kes.
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        marginHorizontal: 20,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        color: colors.secondary,
                        marginVertical: 5,
                    }}>
                        (Dosen Program Studi Magister Keperawatan (S2) Fakultasi Ilmu Dan Teknologi Kesehatan Universitas Jenderal Achmad Yani Cimahi)
                    </Text>
                </View>


            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})