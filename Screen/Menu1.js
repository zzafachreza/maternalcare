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
            left: 10,
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
                <Image source={require('../k1a.png')} style={{
                    width: windowWidth - 30,
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
                        fontSize: 12,
                        textAlign: 'center'
                    }}>Standar Prosedur Operasional (SPO) Kala I (Pemeriksaan Denyut Jantung Janin)</Text>
                </TouchableOpacity>

                <View style={{
                    padding: 10,
                }}>
                    <MyList no='1. ' label="Identifikasi pasien menggunakan minimal dua identitas (nama lengkap, tanggal lahir, dan/atau nomor rekam medis)" />
                    <MyList no='2. ' label="Jelaskan tujuan dan langkah-langkah prosedur" />
                    <MyList no='3. ' label="Siapkan alat dan bahan yang diperlukan:" />
                    <MyListSub no='a. ' label="Doppler BJF" />
                    <MyListSub no='b. ' label="Jam atau pengukur waktu" />
                    <MyListSub no='c. ' label="Jeli" />
                    <MyListSub no='d. ' label="Tisu" />
                    <MyList no='4. ' label="Lakukan kebersihan tangan 6 langkah" />

                    <MyImg img={require('../imgk11.png')} label="Gambar: 6 Langkah mencuci tangan" />

                    <MyList no='5.	' label="Identifikasi status obstetric ibu" />
                    <MyList no='6.	' label="Identifikasi adanya penggunaan obat, diet dan merokok" />
                    <MyList no='7.	' label="Identifikasi pemeriksaan kehamilan sebelumnya " />
                    <MyList no='8.	' label="Anjurkan Ibu berbaring dengan posisi terlentang" />
                    <MyList no='9.	' label="Buka pakaian pada bagian perut Ibu" />
                    <MyList no='10. ' label="Lakukan manuver leopold untuk menentukan posisi janin" />


                    <MyList judul label="Cara melakukan Leopold I" />
                    <MyList no='a.	' label="Pemeriksa menghadap ke kepala klien, gunakan ujung jari ke dua tangan untuk mempalpasi fundus uteri" />
                    <MyList no='b.	' label="Apabila kepala janin teraba di bagian fundus, yang akan teraba adalah keras, rata, bulat, mudah digerakkan dan “ballotable”" />
                    <MyList no='c.	' label="Apabila bokong janin teraba di bagian fundus yang akan teraba adalah lembut, tidak rata, melingkar dan sulit digerakkan" />

                    <MyImg img={require('../imgk12.png')} label="Gambar Pemerikaan Leopold I" />

                    <MyList judul label="Cara melakukan Leopold II" />
                    <MyList no="a.	" label="Pemeriksa menghadap ke kepala klien." />
                    <MyList no="b.	" label="Letakan kedua tangan pada kedua sisi abdomen. Pertahankan uterus dengan tangan yang satu dan palpasi sisi lain untuk menentukan lokasi punggung janin" />
                    <MyList no="c.	" label="Bagian punggung akan teraba, jelas, rata, cembung, kaku/tidak dapat digerakan" />
                    <MyList no="d.	" label="Bagian-bagian kecil (tangan dan kaki) akan teraba kecil, bentuk tidak jelas, menonjol dan mungkin dapat bergerak aktif atau pasif" />
                    <MyImg img={require('../imgk13.png')} label="Gambar Pemerikaan Leopold II" />

                    <MyList judul label="Cara melakukan Leopold III" />
                    <MyList no='a.	' label='Pemeriksa menghadap ke kepala klien. Letakan tiga ujung jari kedua tangan pada kedua sisi abdomen pasien tepat diatas simpisis pubis dan minta klien untuk menarik nafas dalam dan menghembuskannya. Pada saat klien menghembuskan nafas, tekan jari tangan ke bawah secara perlahan dan dalam ke sekitar bagian presentasi. Catat kontur, ukuran dan konsistensinya' />
                    <MyList no='b.	' label='Bagian kepala akan teraba keras, rata dan mudah digerakkan jika tidak tertahan PAP, dan sulit digerakan jika tertahan PAP' />
                    <MyList no='c.	' label='Bagian bokong akan teraba lembut dan tidak rata' />
                    <MyImg img={require('../imgk14.png')} label="Gambar Pemerikaan Leopold III" />

                    <MyList judul label="Cara melakukan Leopold IV" />

                    <MyList no='a.' label='Pemeriksa menghadap ke arah kaki ibu, dengan posisi kaki ibu lurus' />
                    <MyList no='b.' label='Meletakkan ujung telapak tangan kiri dan kanan pada lateral kiri dan kanan uterus bawah, ujung-ujung jari tangan kiri dan kanan berada pada tepi atas simfisis' />
                    <MyList no='c.' label='Menemukan kedua ibu jari kiri dan kanan kemudian rapatkan semua jari-jari tangan yang meraba dinding bawah uterus.' />
                    <MyList no='d.' label='Perhatikan sudut yang terbentuk oleh jari-jari: bertemu (konvergen) atau tidak bertemu (divergen)' />
                    <MyList no='e.' label='Setelah itu memindahkan ibu jari dan telunjuk tangan kiri pada bagian terbawah bayi (bila presentasi kepala upayakan memegang bagian kepala di dekat leher dan bila presentasi bokong upayakan untuk memegang pinggang bayi)' />
                    <MyList no='f.' label='Memfiksasi bagian tersebut ke arah pintu atas panggul kemudian meletakkan jari-jari tangan kanan diantara tangan kiri dan simfisis untuk menilai seberapa jauh bagian terbawah telah memasuki pintu atas panggul.' />


                    <MyImg img={require('../imgk15.png')} label="Gambar Pemerikaan Leopold IV" />

                    <MyList no='11' label='Tentukan punctum maksimum' />
                    <MyList no='12' label='Berikan jeli pada perut ibu' />
                    <MyList no='13' label='Tempelkan doppler pada perut ibu pada punctum maksimum' />
                    <MyList no='14' label='Hitung denyut jantung janin selama 1 menit' />
                    <MyList no='15' label='Informasikan hasil pemantauan DJJ' />
                    <MyList no='16' label='Bersihkan perut ibu dengan menggunakan tisu' />
                    <MyList no='17' label='Rapihkan pasien dan alat-alat yang digunakan' />
                    <MyList no='18' label='Lakukan kebersihan tangan 6 langkah' />
                    <MyList no='19' label='Dokumentasikan hasil pemeriksaan DJJ' />




                </View>

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