import React, { useState } from 'react'
import { Alert, Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { logo_koi } from '../../assets'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {
    const [emailOrUsername, setEmailOrUsername] = useState()
    const [password, setPassword] = useState()

    const loginPress = () => {
        if(!emailOrUsername){
            ToastAndroid.show("Silahkan Isi Email", ToastAndroid.SHORT)
        } else if(!password) {
            ToastAndroid.show("Silahkan Isi Password", ToastAndroid.SHORT)
        }

        const payload = {
            email: emailOrUsername,
            password: password
        }

        axios.post(`http://192.168.43.100:3000/user/auth`, payload).then(
            res => {
                console.log(res.data);
                setSession(emailOrUsername);
                Alert.alert("Selamat datang di ErryisJayaKoi")
                navigation.push('Home')
            }
        )
        console.log(payload);
    }

    const setSession = async (email) => {
        await AsyncStorage.setItem("loginSession", email)
    }

    const handleEmail = (e) => {
        setEmailOrUsername(e)
    }
    const handlePass = (e) => {
        setPassword(e)
    }

    return (
        <>
            <View style={{ padding: normalize(30) }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='chevron-left' color={"black"} size={20} />
                </TouchableOpacity>
                <View style={{ alignItems: "center", justifyContent: "center", marginTop: normalize(50) }}>
                    <Image source={logo_koi} style={{ width: normalize(130), height: normalize(130) }} />
                    <View style={{ marginTop: normalize(30), borderBottomWidth: 1, borderBottomColor: "#dfdfdf", flexDirection: "row", alignItems: "center" }}>
                        <Icon name='user-circle' color={"#808080"} size={20} />
                        <TextInput placeholder="Email" value={emailOrUsername} onChangeText={handleEmail} style={{ width: normalize(270), marginLeft: normalize(10) }} />
                    </View>
                    <View style={{ marginTop: normalize(20), borderBottomWidth: 1, borderBottomColor: "#dfdfdf", flexDirection: "row", alignItems: "center" }}>
                        <Icon name='key' color={"#808080"} size={15} />
                        <TextInput placeholder="Password"  value={password} onChangeText={handlePass}  secureTextEntry style={{ width: normalize(270), marginLeft: normalize(10) }} />
                    </View>
                    <View style={{ width: normalize(260), borderRadius: 10, height: normalize(40), backgroundColor: "#51B8DC", marginTop: normalize(20), justifyContent: "center" }}>
                        <TouchableOpacity onPress={loginPress} style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "white", fontSize: normalize(18) }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: normalize(30), flexDirection: "row" }}>
                        <Text>Belum memiliki akun? </Text>
                        <TouchableOpacity onPress={() => navigation.push('Register')}>
                            <Text style={{ color: "#51B8DC" }}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: normalize(10), flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Text style={{ color: "#51B8DC" }}>Lupa Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Login