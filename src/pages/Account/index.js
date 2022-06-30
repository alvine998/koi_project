import React, { useEffect, useState } from 'react'
import { Alert, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Account = ({ navigation }) => {
    const [user, setUser] = useState(false)

    const getSession = () => {
        AsyncStorage.getItem("loginSession").then(
            result => {
                if (result == null) {
                    setUser(false)
                } else {
                    setUser(true)
                }
            }
        )
    }

    useEffect(() => {
        getSession()
    }, [])

    const [modalVisible, setModalVisible] = useState(false)

    const logoutSession = () => {
        AsyncStorage.removeItem("loginSession")
        navigation.push('Login')
        setUser(false)
        Alert.alert("Anda telah logout")
    }
    return (
        <>
            {
                user ? (
                    <>
                        <View style={styles.header}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.imgRound}>

                                </View>
                                <View style={{ marginLeft: normalize(10) }}>
                                    <Text style={{ color: "white" }}>Jaya</Text>
                                    <Text style={{ color: "white" }}>n/a</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ marginLeft: "auto" }}>
                                <Icon name='bell' color={"white"} size={normalize(25)} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", paddingBottom: normalize(20) }}>
                                <View style={{ paddingVertical: normalize(20) }}>
                                    <Text style={{ color: "orange" }}>Status keanggotaan</Text>
                                    <View style={{ width: "100%", backgroundColor: "#dfdfdf", height: normalize(4), marginTop: normalize(10) }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text style={{ color: "black" }}>Membership</Text>
                                        <Text style={{ color: "green", marginLeft: "auto" }}>Active</Text>
                                    </View>
                                    <TouchableOpacity style={{ marginTop: normalize(10) }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ color: "#51B8DC" }}>Bidder membership</Text>
                                            <View style={{ flexDirection: "row", marginLeft: "auto", alignItems: "center" }}>
                                                <Text style={{ color: "red", marginRight: normalize(10) }}>Non Bidder</Text>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginTop: normalize(10) }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ color: "#51B8DC" }}>Saldo Deposit Lelang</Text>
                                            <View style={{ flexDirection: "row", marginLeft: "auto", alignItems: "center" }}>
                                                <Text style={{ color: "black", marginRight: normalize(10) }}>Rp. 0</Text>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", paddingBottom: normalize(20), marginTop: normalize(10) }}>
                                <TouchableOpacity style={{ marginTop: normalize(20) }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text style={{ color: "grey" }}>Saldo Transaksi</Text>
                                        <View style={{ flexDirection: "row", marginLeft: "auto", alignItems: "center" }}>
                                            <Text style={{ color: "black", marginRight: normalize(10) }}>Rp. 0</Text>
                                            <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", marginTop: normalize(10) }}>
                                <View style={{ paddingVertical: normalize(20) }}>
                                    <TouchableOpacity style={{ justifyContent: "center" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon5 name='user-circle' color={"#51B8DC"} size={normalize(20)} />
                                                <Text style={{ color: "black", marginLeft: normalize(10) }}>Edit Profil</Text>
                                            </View>
                                            <View style={{ marginLeft: "auto" }}>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", marginTop: normalize(5) }}>
                                <View style={{ paddingVertical: normalize(20) }}>
                                    <TouchableOpacity style={{ justifyContent: "center" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon5 name='address-card' color={"#51B8DC"} size={normalize(20)} />
                                                <Text style={{ color: "black", marginLeft: normalize(10) }}>Alamat & Kota</Text>
                                            </View>
                                            <View style={{ marginLeft: "auto" }}>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", marginTop: normalize(5) }}>
                                <View style={{ paddingVertical: normalize(20) }}>
                                    <TouchableOpacity style={{ justifyContent: "center" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon5 name='key' color={"#51B8DC"} size={normalize(20)} />
                                                <Text style={{ color: "black", marginLeft: normalize(10) }}>Ganti Password</Text>
                                            </View>
                                            <View style={{ marginLeft: "auto" }}>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", marginTop: normalize(5) }}>
                                <View style={{ paddingVertical: normalize(20) }}>
                                    <TouchableOpacity style={{ justifyContent: "center" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon5 name='th-large' color={"#51B8DC"} size={normalize(20)} />
                                                <Text style={{ color: "black", marginLeft: normalize(10) }}>Template Deskripsi</Text>
                                            </View>
                                            <View style={{ marginLeft: "auto" }}>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", marginTop: normalize(5) }}>
                                <View style={{ paddingVertical: normalize(20) }}>
                                    <TouchableOpacity style={{ justifyContent: "center" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon5 name='question-circle' color={"#51B8DC"} size={normalize(20)} />
                                                <Text style={{ color: "black", marginLeft: normalize(10) }}>Aturan Lelang</Text>
                                            </View>
                                            <View style={{ marginLeft: "auto" }}>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", marginTop: normalize(5) }}>
                                <View style={{ paddingVertical: normalize(20) }}>
                                    <TouchableOpacity style={{ justifyContent: "center" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon5 name='globe-europe' color={"#51B8DC"} size={normalize(20)} />
                                                <Text style={{ color: "black", marginLeft: normalize(10) }}>Tentang</Text>
                                            </View>
                                            <View style={{ marginLeft: "auto" }}>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: normalize(20), backgroundColor: "white", marginTop: normalize(5) }}>
                                <View style={{ paddingVertical: normalize(20) }}>
                                    <TouchableOpacity onPress={()=>setModalVisible(true)} style={{ justifyContent: "center" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon name='sign-out' color={"red"} size={normalize(20)} />
                                                <Text style={{ color: "black", marginLeft: normalize(10) }}>Sign Out</Text>
                                            </View>
                                            <View style={{ marginLeft: "auto" }}>
                                                <Icon name='chevron-right' color={"grey"} size={normalize(15)} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        Alert.alert("Modal has been closed.");
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>Apakah Anda Mau Logout?</Text>
                                            <TouchableOpacity
                                                style={[styles.button, styles.buttonYes]}
                                                onPress={logoutSession}
                                            >
                                                <Text style={styles.textStyle}>Ya, Logout</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => setModalVisible(!modalVisible)}
                                            >
                                                <Text style={styles.textStyleCancel}>Kembali</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        </ScrollView>
                    </>
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
    },
    header: {
        width: "100%",
        height: normalize(70),
        backgroundColor: "black",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#808080",
        paddingHorizontal: normalize(20)
    },
    imgRound: {
        width: normalize(50),
        height: normalize(50),
        borderRadius: normalize(50),
        borderWidth: 1,
        borderColor: "#dfdfdf"
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#fff",
        borderWidth:1,
        borderColor:"#dfdfdf",
        marginTop:normalize(10)
    },
    buttonYes: {
        backgroundColor: "red",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    textStyleCancel: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default Account