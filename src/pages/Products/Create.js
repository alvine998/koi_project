import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'

const Create = () => {
    return (
        <View>
            <View style={styles.header}>
                <Icon name='chevron-left' size={normalize(20)} color={"red"} style={{ marginRight: "auto" }} />
                <Text style={{ color: "red" }}>Tambah Item Lelang</Text>
                <View style={{ marginLeft: "auto" }} />
            </View>
            <ScrollView>
                <View style={{ padding: normalize(10), backgroundColor: "white" }}>
                    <View style={{alignItems:"center"}}>
                        <TextInput underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300) }} placeholder="Judul Iklan" />
                        <TextInput underlineColorAndroid={"#dfdfdf"} style={{ width: normalize(300) }} placeholder="Deskripsi Iklan" multiline numberOfLines={6} />
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal:normalize(30) }}>
                        <TextInput underlineColorAndroid={"#dfdfdf"} placeholder="Harga Pembuka (Rp)" style={{ marginRight: "auto", width:normalize(150) }} />
                        <TextInput underlineColorAndroid={"#dfdfdf"} placeholder="Kelipatan Bid (Rp)" style={{ marginLeft: "auto", width:normalize(150) }} />
                    </View>
                    <View style={{ flexDirection: "row", paddingHorizontal:normalize(30) }}>
                        <TextInput underlineColorAndroid={"#dfdfdf"} placeholder="Kategori" style={{ marginRight: "auto", width:normalize(150) }} />
                        <TextInput underlineColorAndroid={"#dfdfdf"} placeholder="Tanggal Penutupan" style={{ marginLeft: "auto", width:normalize(150) }} />
                    </View>
                    <View style={{ flexDirection: "row", paddingHorizontal:normalize(30) }}>
                        <TextInput underlineColorAndroid={"#dfdfdf"} placeholder="Provinsi" style={{ marginRight: "auto", width:normalize(150) }} />
                        <TextInput underlineColorAndroid={"#dfdfdf"} placeholder="Kota/Kab" style={{ marginLeft: "auto", width:normalize(150) }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: normalize(50),
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: normalize(20)
    }
})

export default Create