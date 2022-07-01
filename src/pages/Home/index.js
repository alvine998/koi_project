import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react'
import normalize from "react-native-normalize";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconFA from "react-native-vector-icons/FontAwesome";

import { event1, event2, koi1, koi2, koi5 } from "../../assets";
// import Carousel from "react-native-snap-carousel";

const Home = ({navigation}) => {
    const [search, setSearch] = useState('')
    const onChange = (e) => {
        setSearch(e)
    }

    const koiProducts = [
        {
            name: "hiutsuri",
            owner: "kimochi koi",
            time: "06:13:44",
            price: "Rp.50.000",
            image: koi1,
            video: true
        },
        {
            name: "showa 35cm",
            owner: "andre koi blitar",
            time: "02:13:44",
            price: "Rp.300.000",
            image: koi2,
            video: false
        },
        {
            name: "Shiro Beko",
            owner: "Cito koi",
            time: "00:33:44",
            price: "Rp.250.000",
            image: koi5,
            video: false
        },
    ]
    return (
        <>
            <View style={styles.header}>
                <View style={styles.searchbar}>
                    <TextInput style={styles.textinput} keyboardType={"default"} placeholder="Cari & Kategori" defaultValue={search} onChange={onChange} />
                </View>
                <View style={styles.notification}>
                    <Icon name="bell" size={normalize(25)} color="white" />
                </View>
            </View>
            <ScrollView>
                <ScrollView horizontal >
                    <Image style={styles.banner} source={event1} />
                    <Image style={styles.banner} source={event2} />
                </ScrollView>
                <View style={{ padding: normalize(15) }}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="shield-alt" size={normalize(25)} color="blue" />
                        <Text style={styles.text1}>Rekening Penjamin Koisenta</Text>
                        <Icon name="chevron-right" style={{ marginLeft: "auto" }} size={normalize(15)} color="grey" />
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <View style={{ backgroundColor: "#ECB7B7" }}>
                    <View style={{ padding: normalize(15) }}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name="stopwatch" size={normalize(25)} color="red" />
                            <Text style={styles.text2}>Akan Berakhir Segera</Text>
                            <Icon name="chevron-right" style={{ marginLeft: 'auto' }} size={normalize(15)} color="grey" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pagination}>
                        {
                            koiProducts.map((data, i) => (
                                <TouchableOpacity onPress={()=>navigation.push('Products')} style={data[0] ? {} : { marginLeft: normalize(10) }} key={i}>
                                    {
                                        data?.video == true ? (
                                            <ImageBackground source={data.image} style={{ width: normalize(110), height: normalize(110) }}>
                                                <Icon name="video" size={15} color="white" style={{ padding: normalize(10), marginLeft: 'auto' }} />
                                            </ImageBackground>
                                        ) : (
                                            <Image source={data.image} style={{ width: normalize(110), height: normalize(110) }} />
                                        )
                                    }
                                    <Text style={{ color: "blue" }}>{data.name}</Text>
                                    <Text>{data.owner}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 'auto' }}>
                                        <Icon name="stopwatch" size={normalize(10)} color="grey" />
                                        <Text style={{ fontSize: normalize(12) }}>{data.time}</Text>
                                    </View>
                                    <Text style={{ color: "black", marginLeft: 'auto' }}>{data.price}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View style={styles.pagination}>
                        {
                            koiProducts.map((data, i) => (
                                <TouchableOpacity onPress={()=>navigation.push('Products')} style={data[0] ? {} : { marginLeft: normalize(10) }} key={i}>
                                    {
                                        data?.video == true ? (
                                            <ImageBackground source={data.image} style={{ width: normalize(110), height: normalize(110) }}>
                                                <Icon name="video" size={15} color="white" style={{ padding: normalize(10), marginLeft: 'auto' }} />
                                            </ImageBackground>
                                        ) : (
                                            <Image source={data.image} style={{ width: normalize(110), height: normalize(110) }} />
                                        )
                                    }
                                    <Text style={{ color: "blue" }}>{data.name}</Text>
                                    <Text>{data.owner}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: normalize(60) }}>
                                        <Icon name="stopwatch" size={normalize(10)} color="grey" />
                                        <Text style={{ fontSize: normalize(12) }}>{data.time}</Text>
                                    </View>
                                    <Text style={{ color: "black", marginLeft: normalize(40) }}>{data.price}</Text>
                                </TouchableOpacity>
                            ))
                        }

                    </View>
                    <View style={[styles.line, {marginTop:normalize(10)}]} />
                    <View style={{ marginTop: normalize(5), marginBottom: normalize(5) }}>
                        <View style={{ padding: normalize(15), backgroundColor:"#F0E69A" }}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                <IconFA name="star" size={normalize(25)} color="orange" />
                                <Text style={styles.text3}>Best Seller</Text>
                                <Icon name="chevron-right" style={{ marginLeft: "auto" }} size={normalize(15)} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: normalize(5), marginBottom: normalize(5) }}>
                        <View style={{ padding: normalize(15), backgroundColor:"#C0F0C5" }}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                                <IconFA name="thumbs-up" size={normalize(25)} color="green" />
                                <Text style={styles.text4}>Recommended Seller</Text>
                                <Icon name="chevron-right" style={{ marginLeft: "auto" }} size={normalize(15)} color="grey" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: normalize(55),
        backgroundColor: "red",
        padding: normalize(10),
        flexDirection: "row"
    },
    searchbar: {
        width: normalize(300),
        backgroundColor: "#dfdfdf",
        borderRadius: 5,
        marginLeft: normalize(10),
        height: normalize(40),
        paddingLeft: normalize(10)
    },
    textinput: {
        width: normalize(300),
        height: normalize(40)
    },
    notification: {
        marginLeft: normalize(20),
        marginTop: normalize(8)
    },
    icon: {
        width: normalize(30),
        height: normalize(30)
    },
    banner: {
        width: normalize(380),
        height: normalize(250)
    },
    text1: {
        color: "blue",
        marginLeft: normalize(10)
    },
    text2: {
        color: "red",
        marginLeft: normalize(10)
    },
    text3: {
        color: "orange",
        marginLeft: normalize(10)
    },
    text4: {
        color: "green",
        marginLeft: normalize(10)
    },
    line: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    pagination: {
        paddingLeft: normalize(10),
        paddingRight: normalize(10),
        flexDirection: "row"
    }
})

export default Home;