import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome'


const NotSold = ({ navigation }) => {
    const [session, setSession] = useState(false)
    const [data, setData] = useState()
    const getUser = () => {
        AsyncStorage.getItem("loginSession").then(
            res => {
                if (res == null) {
                    setSession(false)
                    navigation.push("Login")
                } else {
                    setSession(true)
                }
            }
        )
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
            {
                session ? (
                    <View>
                        {
                            data ? (
                                <View></View>
                            ) : (
                                <View style={{justifyContent:"center", alignItems:"center", marginTop:normalize(100)}}>
                                    <Text>Data tidak tersedia</Text>
                                   
                                </View>
                            )
                        }
                    </View>
                ) : (
                    <View style={styles.container}>
                        <Icon name='user-circle' color={"#dfdfdf"} size={100} />
                        <View style={{ marginTop: normalize(20) }}>
                            <Text>Pengaturan akun, deposit, dan lainnya</Text>
                        </View>
                        <View style={styles.btnLogin}>
                            <TouchableOpacity onPress={() => navigation.push('Login')}>
                                <Text style={styles.textLogin}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: normalize(50), flexDirection: "row" }}>
                            <Text>Belum terdaftar? </Text>
                            <TouchableOpacity onPress={() => navigation.push('Register')}>
                                <Text style={{ color: "#51B8DC" }}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    btnLogin: {
        height: normalize(50),
        width: normalize(70),
        backgroundColor: "#51B8DC",
        marginTop: normalize(50),
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textLogin: {
        color: "white",
        fontSize: normalize(18)
    },
    btnLogout: {
        height: normalize(50),
        width: normalize(70),
        backgroundColor: "red",
        marginTop: normalize(20),
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textLogout: {
        color: "white",
        fontSize: normalize(18)
    }
})

export default NotSold