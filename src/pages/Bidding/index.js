import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import { Url } from '../../config/url'


const Bidding = ({ navigation }) => {
    const [session, setSession] = useState(false)
    const [data, setData] = useState()
    const [userid, setUserid] = useState()
    const [products, setProducts] = useState()
    const getUser = async () => {
        const email = await AsyncStorage.getItem("loginSession")
        if (email == null) {
            setSession(false)
        } else {
            setSession(true)
        }
        console.log(email);
        const result = await axios.get(`${Url.publish}/users/mail/${email}`)
        console.log(result.data);
        setUserid(result.data._id)
    }

    const getProducts = async () => {
        const result = await axios.get(`${Url.publish}/products/byid/${userid}`)
        console.log(result.data);
        setProducts(result.data)
    }

    useEffect(() => {
        getUser()
        console.log(userid);
        getProducts()
    }, [userid])
    return (
        <>
            {
                session ? (
                    <View>
                        {
                            products !== [] ? (
                                <View>
                                    <TouchableOpacity onPress={() => navigation.push('Create')} style={{marginTop: normalize(20), paddingRight: normalize(20), alignItems:"center", justifyContent:"center" }}>
                                        <View style={{ width: normalize(150), height: normalize(40), backgroundColor: "red",alignItems: "center", justifyContent: "center", borderRadius:20, flexDirection:"row" }}>
                                            <Icon name='plus' color={"white"} size={normalize(15)} />
                                            <Text style={{color:"white", marginLeft:normalize(20)}}>Tambah Lelang</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <ScrollView style={{ padding: normalize(20) }}>
                                        {
                                            products.map((value, i) => (
                                                <View key={i} style={value == value[0] ? {} : { marginTop: normalize(10) }}>
                                                    <TouchableOpacity>
                                                        <View style={{ backgroundColor: "white", width: normalize(330), flexDirection: "row", borderRadius:20 }}>
                                                            <Image source={{ uri: `${Url.publish}/resources/uploads/${value.image}` }} style={{ width: normalize(150), height: normalize(150) }} />
                                                            <View style={{ padding: normalize(10) }}>
                                                                <Text>{value.title}</Text>
                                                                <Text>{value.category}</Text>
                                                                <Text>{value.province}, {value.city}</Text>
                                                                <Text>Harga : {value.price}</Text>
                                                                <Text>Bid : ++{value.increase}</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                            ) : (
                                <View style={{ justifyContent: "center", alignItems: "center", marginTop: normalize(100) }}>
                                    <Text>Data tidak tersedia</Text>
                                    <TouchableOpacity onPress={() => navigation.push('Create')} style={{ marginLeft: "auto", marginTop: normalize(400), paddingRight: normalize(20) }}>
                                        <View style={{ width: normalize(50), height: normalize(50), backgroundColor: "red", borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                                            <Icon name='plus' color={"white"} size={normalize(20)} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                ) : (
                    <View style={styles.container}>
                        <IconFA5 name='store' color={"#dfdfdf"} size={100} />
                        <View style={{ marginTop: normalize(20) }}>
                            <Text>Daftar lelangan anda, status, tracking</Text>
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

export default Bidding