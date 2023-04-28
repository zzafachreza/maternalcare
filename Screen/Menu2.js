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
                        fontSize: 12,
                        textAlign: 'center'
                    }}>Standar Prosedur Operasional (SPO) Kala I/II</Text>
                </TouchableOpacity>
                <View style={{
                    padding: 10,
                    marginBottom: 10
                }}>
                    <MyList no='1' label='Memastikan ibu sudah masuk kala II' />
                    <MyList no='2' label='Ajak ibu untuk kooperatif karena sangat diperlukan kerjasama yang baik antara ibu dengan penolong persalinan' />
                    <MyList no='3' label='Persiapan set pertolongan persalinan lengkap.' />

                    <MyList no='' label='Partus set terdiri atas alat – alat berikut :' />
                    <MyListSub no='-' label='Duk 2 buah' />
                    <MyListSub no='-' label='Sarung tangan 2 pasang' />
                    <MyListSub no='-' label='Benang tali pusat/ klip' />
                    <MyListSub no='-' label='½ kocher 1 buah' />
                    <MyListSub no='-' label='Klem tali pusat 2 buah' />
                    <MyListSub no='-' label='Gunting tali pusat 1 buah' />
                    <MyListSub no='-' label='Gunting episiotomi 1 buah (jika diperlukan )' />
                    <MyListSub no='-' label='Kateter (bila diperlukan pada kala III)' />
                    <MyListSub no='-' label='Kasa dan tampon 5 -6 buah' />
                    <MyListSub no='-' label='Kapas kering' />
                    <MyListSub no='-' label='Duk penahan perineum 1 buah' />
                    <MyListSub no='-' label='Obat emergensi berupa oksitosin dan spuid 2,5 cc' />

                    <MyList no='' label='Hectting set merupakan satu set alat steril yang terisir dari :' />
                    <MyListSub no='-' label='Nail holder 1 buah' />
                    <MyListSub no='-' label='Pinset anatomis 1 buah' />
                    <MyListSub no='-' label='Pinset cirurgis' />
                    <MyListSub no='-' label='Gunting benang 1 buah' />
                    <MyListSub no='-' label='Jarum, catgut, cromix, side' />
                    <MyListSub no='-' label='Tampon vagina 1 buah' />
                    <MyListSub no='-' label='Mangkuk kecil 1 buah' />
                    <MyListSub no='-' label='Sarung tangan 1 pasang' />
                    <MyListSub no='-' label='Obat emergensi seperti oksitosin, methergin dan spuid' />
                    <MyListSub no='-' label='Kapas kering steril' />
                    <MyListSub no='-' label='Cairan DTT' />
                    <MyListSub no='-' label='Betadin 10 %, 2 buah baskom kecil berisi cairan klorin' />
                    <MyListSub no='-' label='Ember untuk alat tenun kotor' />
                    <MyListSub no='-' label='Bengkok 2 buah' />

                    <MyList no='' label='Alat -alat untuk bayi meliputi :' />
                    <MyListSub no='-' label='Pengisap lender' />
                    <MyListSub no='-' label='Peralatan mandi Pembungkus bayi Obat mata' />
                    <MyListSub no='-' label='Peneng/penanda identifikasi' />
                    <MyListSub no='-' label='Pakaian ibu, pembalut dan pakaian dalam' />
                    <MyListSub no='-' label='Alat pelindung diri (APD) meliputi : tutup kepala, kacamata, masker, celemek, sepatu bot' />
                    <MyList no='4' label='Meminta ibu untuk mengosongkan kandung kemih ke kamar mandi bila tidak ada kontraindikasi dan bila teraba kandung kemih di atas simfisis pubis' />
                    <MyList no='5' label='Penolong persalinan mengenakan peralatan untuk pelindung diri/pengaman diri' />
                    <MyList no='6' label='Meminta keluarga membantu dan menyiapkan posisi meneran yang nyaman bagi ibu' />
                    <MyList no='7' label='Mengajarkan kembali cara meneran, bimbing ibu agar dapat meneran dengan benar dan efektif, perbaiki cara meneran bila salah, anjurkan ibu untuk istirahat di antara waktu his' />
                    <MyList no='8' label='Memasang duk steril di bawah bokong ibu' />
                    <MyList no='9' label='Lakukan vulva higiene sebelum periksa dalam dan periksa pembukaan serta kondisi serviks. Bila ketuban belum pecah lakukan pemecahan selaput ketuban pada saat ada his, dengan tangan tetap di dalam lakukan pemeriksaan secara teliti (presentasi, prolaps tali pusat) sambil dijelaskan ke ibu hasil pemeriksaan' />
                    <MyList no='10' label='Keluarkan tangan secara perlahan sambil memeriksa kondisi cairan ketuban yang keluar' />
                    <MyList no='11' label='Cuci tangan dengan larutan klorin 0,5% lepaskan sarung tangan dan rendam dalam keadaan terbalik, kemudian cuci tangan dengan benar' />
                    <MyList no='12' label='Periksa denyut jantung janin saat uterus relaksasi' />
                    <MyList no='13' label='Menyiapkan alat pertolongan persalinan termasuk mematahkan ampul oksitosin dan memasukkan alat suntik sekali pakai 2,5 cc ke dalam wadah partus set.' />
                    <MyList no='14' label='Pimpin ibu untuk meneran secara benar' />
                    <MyList no='15' label='Memasang handuk diatas perut ibu dengan lipatan yang tepat' />
                    <MyList no='16' label='Letakkan kain steril dengan bentuk segitiga dibawah bokong ibu' />
                    <MyList no='17' label='Pasang sarung tangan steril dan set pertolongan persalinan sesuai dengan urutan penggunaannya' />
                    <MyList no='18' label='Ambil duk untuk melapisi tangan kanan meregangkan perineum untuk mencegah ruptur perineum' />
                    <MyList no='19' label='Saat vulva dan perineum meregang dan saat kepala janin dengan diameter 5-6 cm, dengan dialasi oleh kain basah tangan kanan penolong melakukan dorongan pada perineum dekat dengan dagu janin ke arah depan atas.tangan kiri melakukan tekanan ringan pada daerah oksiput. Manuver ini dilakukan untuk mengatur defleksi kepala agar tidak terjadi cedera berlebihan pada perineum' />
                    <MyList no='20' label='Menganjurkan ibu untuk meneran perlahan atau bernafas cepat dan dangkal' />
                    <MyList no='21' label='Periksa kemungkinan adanya lilitan tali pusat dan ambil tindakan sesuai kondisi.' />
                    <MyList no='22' label='Jika tali pusat melilit secara longgar lepaskan melalui kepal bayi dan jika tali pusat melilit leher secara kuat, klem tali pusat di dua tempat dan potong di antara 2 klem tersebut.' />
                    <MyList no='23' label='Melonggarkan lilitan tali pusat' />
                    <MyList no='24' label='Tunggu kepala bayi melakukan putaran paksi luar secara spontan dan bersihkan mata, hidung dan mulut dengan kasa steril' />
                    <MyList no='' judul label='Membantu melahirkan bahu' />
                    <MyList no='25' label='Memegang kepala bayi dengan jari tangan saling merapat secara biparietal. Anjurkan ibu untuk meneran saat kontraksi. Dengan perlahan gerakan kepala kearah bawah hingga bahu depan muncul di bawah arkus pubis dan kemudian gerakan ke arah atas untuk melahirkan bahu belakang.' />
                    <MyList no='' judul label='Membantu melahirkan badan' />
                    <MyList no='26' label='Geser tangan bawah ke arah perineum ibu untuk menyangga kepala, lengan dan siku sebelah bawah. Gunakan tangan atas untuk menelusuri dan memegang lengan dan siku atas. Setelah tubuh bayi lahir penelusuran tangan atas berlanjut ke punggung, bokong, tungkai, dan kaki. Pegang mata kaki (masukan telunjuk diantara kaki dan pegang masing -masing mata kaki)' />
                    <MyList no='27' label='Lakukan pemasangan klem pertama di tali pusat dengan jarak 5 - 10 cm dari pangkal umbilikal bayi' />
                    <MyList no='28' label='Beritahu ibu kondisi bayinya : jenis kelamin, kelengkapan, dan jam berapa lahir' />
                    <MyList no='29' label='Melakukan penilaian APGAR menit pertama' />
                    <MyList no='30' label='Meletakkan bayi diatas handuk yang berada di perut ibu, kemudian bayi dikeringkan mulai dari kepala, dada dengan sedikit tekanan, punggung dan kaki (rangsang taktil), normalnya bayi akan segera menangis dalam waktu 30 detik pertama setelah lahir' />
                    <MyList no='31' label='Lakukan penilaian APGAR menit ke 5' />
                    <MyList no='32' label='Jika bayi tidak dapat menangis spontan, maka lakukan langkah - langkah berikut: Letakkan bayi pada posisi telentang di tempat yang keras dan hangat, Gulung sepotong kain dan letakkan dibawah bahu, sehingga leher bayi ekstensi, Bersihkan hidung, rongga mulut dan tenggorokan bayi dengan jari tangan yang dibungkus dengan kasa steril. Tepuk telapak kaki bayi sebanyak 2-3 kali atau gosok kulit bayi dengan kain kering dan kasar' />
                    <MyList no='33' label='Bila ada indikasi uterus tidak berkontraksi secara baik, maka berikan oksitosin (IM) dengan memberitahu ibu bahwa ia akan disuntik. Dalam waktu 1 menit setelah bayi lahir, suntikkan oksitosin 10 unit IM di 1/3 paha atas bagian distal lateral (lakukan aspirasi sebelum menyuntikkan oksitosin).setelah 2 menit pasca persalinan, jepit tali pusat dengan klem kira - kira 3 cm dari pusat bayi, mendorong isi talipusat ke arah distal (ibu) dan jepit kembali tali pusat pada 2 cm distal dari klem pertama' />
                    <MyList no='' judul label='Memotong tali pusat' />
                    <MyList no='34' label='Potong tali pusat dengan memperhatikan keamanan bagi bayi, potong tali pusat diantara 2 klem. Pasang klem penjepit tali pusat 2-3 cm didepan abdomen bayi dan jepit tali pusat dengan penjepit plastic' />
                    <MyList no='35' label='Melakukan bonding dan attachment, fasilitasi ibu untuk inisiasi menyusui dini.' />
                    <MyList no='36' label='Bonding dan attachment dapat dilakukan dengan cara sebagai berikut' />
                    <MyList no='37' label='Meletakkan bayi di dada ibu diantara kedua payudara' />
                    <MyList no='38' label='Lindungi bayi agar tidak jatuh dan pertahankan suhu tubuh' />
                    <MyList no='39' label='Beri kesempatan pada bayi untuk mencari puting susu sendiri' />



                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})