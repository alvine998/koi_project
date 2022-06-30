import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IconFA from 'react-native-vector-icons/FontAwesome'

const Bidder = ({navigation}) => {
    const [bidder, setBidder] = useState(false)
    const [login, setLogin] = useState(false)
    const getUser = () => {
        AsyncStorage.getItem("loginSession").then(
            res => {
                if (res == null) {
                    setLogin(false)
                } else {
                    setLogin(true)
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
                login ? (
                    <>
                        {
                            bidder ? (
                                <View>

                                </View>
                            ) : (
                                <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                                    <Icon name='gavel' color={"#dfdfdf"} size={normalize(100)} />
                                    <Text style={{ marginTop: normalize(20) }}>Anda masih belum menjadi bidder</Text>
                                    <TouchableOpacity style={{ marginTop: normalize(50) }}>
                                        <View style={{ width: normalize(200), height: normalize(40), backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                                            <Text style={{ color: "white" }}>Daftar Menjadi Bidder</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </>
                ) : (
                    <View style={styles.container}>
                        <Icon name='gavel' color={"#dfdfdf"} size={100} />
                        <View style={{ marginTop: normalize(20) }}>
                            <Text>Bid anda, status bid, tracking</Text>
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

export default Bidder