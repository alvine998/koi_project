import axios from 'axios'
import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome5'


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    const registerPress = () => {
        if (!email) {
            ToastAndroid.show("Silahkan Isi Email", ToastAndroid.SHORT)
        } else if (!password) {
            ToastAndroid.show("Silahkan Isi Password", ToastAndroid.SHORT)
        } else if (!cPassword) {
            ToastAndroid.show("Silahkan Isi Password Ulang", ToastAndroid.SHORT)
        } else if (!username) {
            ToastAndroid.show("Silahkan Isi Username", ToastAndroid.SHORT)
        } else if (!phone) {
            ToastAndroid.show("Silahkan Isi No Hp", ToastAndroid.SHORT)
        } else if (!name) {
            ToastAndroid.show("Silahkan Isi Nama", ToastAndroid.SHORT)
        } else {
            if (password !== cPassword) {
                ToastAndroid.show("Password tidak sama dengan password ulang", ToastAndroid.SHORT)
            }
        }

        const bodyPayload = {
            email: email,
            username: username,
            password: password,
            phone: phone,
            name: name
        }

        axios.post('http://192.168.43.100:3000/user/create', bodyPayload).then(
            res => {
                console.log(res.data);
                setName("") 
                setCPassword("") 
                setEmail("")
                setPassword("") 
                setPhone("") 
                setUsername("")
                Alert.alert("Selamat registrasi anda berhasil silahkan login")
                navigation.push("Login")
            }
        ).catch(err => {
            console.log(err);
        })

        console.log(bodyPayload);

    }

    return (
        <>
            <ScrollView style={{ padding: normalize(30) }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='chevron-left' color={"black"} size={20} />
                </TouchableOpacity>
                <View style={{ marginTop: normalize(30) }}>
                    <Text style={{ color: "black", fontSize: normalize(15) }}>Nama Lengkap</Text>
                    <TextInput value={name} placeholder="Contoh: Ono Suryono" onChangeText={(e) => setName(e)} underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(50), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "black", fontSize: normalize(15) }}>Email</Text>
                    <TextInput value={email} placeholder="Contoh: ono@gmail.com" onChangeText={(e) => setEmail(e)} underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(50), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "black", fontSize: normalize(15) }}>Username</Text>
                    <TextInput value={username} placeholder="Contoh: onokoi2022" onChangeText={(e) => setUsername(e)} underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(50), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "black", fontSize: normalize(15) }}>Password</Text>
                    <TextInput value={password} placeholder="********" onChangeText={(e) => setPassword(e)} secureTextEntry underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(50), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "black", fontSize: normalize(15) }}>Password Ketik Ulang</Text>
                    <TextInput value={cPassword} placeholder="********" onChangeText={(e) => setCPassword(e)} secureTextEntry underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(50), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "black", fontSize: normalize(15) }}>No. Hp</Text>
                    <TextInput value={phone} maxLength={12} onChangeText={(e) => setPhone(e)} keyboardType='phone-pad' underlineColorAndroid={"#dfdfdf"} placeholder="Contoh: 08123456789" style={{ width: normalize(300), height: normalize(50), fontSize: normalize(14) }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: normalize(200), borderRadius: 10, height: normalize(50), backgroundColor: "#51B8DC", marginTop: normalize(20), justifyContent: "center" }}>
                        <TouchableOpacity onPress={registerPress} style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "white", fontSize: normalize(15) }}>Daftar Errys Jaya Koi</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: normalize(100), borderRadius: 10, height: normalize(50), backgroundColor: "#fff", marginTop: normalize(20), justifyContent: "center", marginLeft: normalize(10) }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "black", fontSize: normalize(15) }}>Kembali</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: normalize(20) }}>
                    <Text style={{ textAlign: "left", fontSize: normalize(14) }}>
                        Dengan klik Daftar, anda setuju dan menerima Syarat dan Ketentuan yang ditentukan oleh Errys
                        Jaya Koi
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Register