import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import { Url } from '../../config/url'

const Create = ({ navigation }) => {
    const [cPhoto, setCPhoto] = useState('');
    const [photo, setPhoto] = useState('');
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [increase, setIncrease] = useState()
    const [category, setCategory] = useState()
    const [date, setDate] = useState()
    const [province, setProvince] = useState()
    const [city, setCity] = useState()
    const [userid, setUserid] = useState()
    const selectImage = () => {
        ImageCropPicker.openPicker({
            width: normalize(150),
            height: normalize(150),
            cropping: true,
            cropperCircleOverlay: false,
        }).then(image => {
            if (!image) {
                console.log("Cancel Image Picker")
            } else {
                console.log(image);
                setCPhoto(image);
            }
        })
    }

    const uploadImage = async (url) => {
        const newName = cPhoto.path

        let photoss = {
            name: newName,
            type: cPhoto.mime,
            uri: cPhoto.path
        }


        let formData = new FormData();
        formData.append("files", photoss)

        let result = { info: "" }
        result = await fetch(`https://koibackend.herokuapp.com/upload/products`, {
            method: "POST",
            body: formData
        }).then(
            res => res.json().then(
                response => { console.log(response); return response; }
            )
        )
        console.log(result.info)
        url = result.info
        // const dataUpdate = {
        //     foto: result.info,
        // }
        // axios.put(`https://koibackend.herokuapp.com/products/${idUser}`, dataUpdate).then(
        //     res => {
        //         console.log("Sukses Update")
        //     }
        // )

    }

    const getId = async () => {
        const email = await AsyncStorage.getItem("loginSession")
        const result = await axios.get(`${Url.publish}/users/mail/${email}`)
        console.log(result.data);
        setUserid(result.data._id)
    }

    const onSubmit = () => {

        if (title == '' || description == '' || price == '' || increase == '' || category == '' ||
            date == '' || province == '' || city == '') {
            return ToastAndroid.show("Lengkapi semua form!", ToastAndroid.SHORT)
        }
        const payload = {
            title: title,
            userid:userid,
            description: description,
            price: price,
            increase: increase,
            category: category,
            date: date,
            province: province,
            city: city,
            image: `files_${cPhoto.path.substr(71,50)}`
        }

        console.log(payload);

        axios.post(`${Url.publish}/products/create`, payload).then(
            res => {
                console.log("Success Add Data ", res.data);
                Alert.alert("Selamat iklan anda berhasil diupload")
                uploadImage()
                navigation.push('Home')
            }
        ).catch(err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        getId()
    },[])
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity style={{ marginRight: "auto" }} onPress={()=>navigation.goBack()}>
                    <Icon name='chevron-left' size={normalize(20)} color={"red"}  />
                </TouchableOpacity>
                <Text style={{ color: "red" }}>Tambah Item Lelang</Text>
                <View style={{ marginLeft: "auto" }} />
            </View>
            <ScrollView>
                <View style={{ padding: normalize(10), backgroundColor: "white" }}>
                    <View style={{ alignItems: "center" }}>
                        <TextInput underlineColorAndroid={"#dfdfdf"} value={title} onChangeText={(e) => setTitle(e)} style={{ width: normalize(300) }} placeholder="Judul Iklan" />
                        <TextInput underlineColorAndroid={"#dfdfdf"} value={description} onChangeText={(e) => setDescription(e)} style={{ width: normalize(300) }} placeholder="Deskripsi Iklan" multiline numberOfLines={6} />
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: normalize(30) }}>
                        <TextInput underlineColorAndroid={"#dfdfdf"} value={price} onChangeText={(e) => setPrice(e)} keyboardType="number-pad" placeholder="Harga Pembuka (Rp)" style={{ marginRight: "auto", width: normalize(150) }} />
                        <TextInput underlineColorAndroid={"#dfdfdf"} value={increase} onChangeText={(e) => setIncrease(e)} keyboardType="number-pad" placeholder="Kelipatan Bid (Rp)" style={{ marginLeft: "auto", width: normalize(150) }} />
                    </View>
                    <View style={{ flexDirection: "row", paddingHorizontal: normalize(30) }}>
                        <TextInput underlineColorAndroid={"#dfdfdf"} value={category} onChangeText={(e) => setCategory(e)} placeholder="Kategori" style={{ marginRight: "auto", width: normalize(150) }} />
                        <TextInput underlineColorAndroid={"#dfdfdf"} value={date} onChangeText={(e) => setDate(e)} placeholder="Tanggal Penutupan" style={{ marginLeft: "auto", width: normalize(150) }} />
                    </View>
                    <View style={{ flexDirection: "row", paddingHorizontal: normalize(30) }}>
                        <TextInput underlineColorAndroid={"#dfdfdf"} value={province} onChangeText={(e) => setProvince(e)} placeholder="Provinsi" style={{ marginRight: "auto", width: normalize(150) }} />
                        <TextInput underlineColorAndroid={"#dfdfdf"} value={city} onChangeText={(e) => setCity(e)} placeholder="Kota/Kab" style={{ marginLeft: "auto", width: normalize(150) }} />
                    </View>
                    <View style={{ paddingHorizontal: normalize(30) }}>
                        <TouchableOpacity onPress={selectImage}>
                            <View style={styles.btnUpload}>
                                <Text style={{ color: "white" }}>Upload Gambar</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.imgContainer}>
                            {
                                photo ? (
                                    <Image source={{ uri: `https://ikhlasbantu.herokuapp.com/resources/uploads/${photo}` }} style={{ width: normalize(300), marginVertical: normalize(20), height: normalize(300) }} />
                                ) :
                                    cPhoto.path ? cPhoto.path && (
                                        <Image source={{ uri: cPhoto.path }} style={{ width: normalize(300), height: normalize(300), marginVertical: normalize(20) }} />
                                    ) : (
                                        <Text style={{ marginTop: normalize(50) }}>Belum ada gambar</Text>
                                    )
                            }
                            <TouchableOpacity onPress={onSubmit}>
                                <View style={styles.btnSimpan}>
                                    <Text style={{ color: "white" }}>Simpan</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
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
    },
    btnUpload: {
        width: "100%",
        height: normalize(40),
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: normalize(20),
        marginTop: normalize(10)
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: normalize(70)
    },
    btnSimpan: {
        width: normalize(300),
        height: normalize(40),
        backgroundColor: "#51B8DC",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: normalize(20),
        marginTop: normalize(10)
    },
})

export default Create