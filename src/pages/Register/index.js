import React, { useState } from 'react'
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome5'


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [displayName, setDisplayName] = useState('')

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
        } else if (!displayName) {
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
            displayName: displayName
        }

        console.log(bodyPayload);

    }

    return (
        <>
            <View style={{ padding: normalize(30) }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='chevron-left' color={"black"} size={20} />
                </TouchableOpacity>
                <View style={{ marginTop: normalize(30) }}>
                    <Text style={{ color: "#808080", fontSize: normalize(12) }}>Email</Text>
                    <TextInput value={email} onChangeText={(e) => setEmail(e)} underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(35), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "#808080", fontSize: normalize(12) }}>Nama User (username)</Text>
                    <TextInput value={username} onChangeText={(e) => setUsername(e)} underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(35), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "#808080", fontSize: normalize(12) }}>Password</Text>
                    <TextInput value={password} onChangeText={(e) => setPassword(e)} secureTextEntry underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(35), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "#808080", fontSize: normalize(12) }}>Password Ketik Ulang</Text>
                    <TextInput value={cPassword} onChangeText={(e) => setCPassword(e)} secureTextEntry underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(35), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "#808080", fontSize: normalize(12) }}>No. Hp</Text>
                    <TextInput value={phone} onChangeText={(e) => setPhone(e)} keyboardType='phone-pad' underlineColorAndroid={"#dfdfdf"} placeholder="Contoh: 08123456789" style={{ width: normalize(300), height: normalize(35), fontSize: normalize(14) }} />
                </View>
                <View style={{ marginTop: normalize(10) }}>
                    <Text style={{ color: "#808080", fontSize: normalize(12) }}>Nama Ditampilkan</Text>
                    <TextInput value={displayName} onChangeText={(e) => setDisplayName(e)} underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300), height: normalize(35), fontSize: normalize(14) }} />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: normalize(200), borderRadius: 10, height: normalize(40), backgroundColor: "#51B8DC", marginTop: normalize(20), justifyContent: "center" }}>
                        <TouchableOpacity onPress={registerPress} style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "white", fontSize: normalize(15) }}>Daftar Errys Jaya Koi</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: normalize(100), borderRadius: 10, height: normalize(40), backgroundColor: "#fff", marginTop: normalize(20), justifyContent: "center", marginLeft: normalize(10) }}>
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
            </View>
        </>
    )
}

export default Register