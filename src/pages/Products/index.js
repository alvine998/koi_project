import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from "react-native-normalize";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconFA from "react-native-vector-icons/FontAwesome";
import { koi1, koi2, koi5 } from '../../assets';

const Products = ({ navigation }) => {
    const [bid, setBid] = useState(0)
    const [price, setPrice] = useState(50000)
    const [increase, setIncrease] = useState(25000)
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

    const onPlus = (a, b) => {
        a = a + b
        setBid(a)
    }

    const onMinus = (a, b, c) => {
        if (a <= c) {
            setBid(price)
        } else {
            a = a - b
            setBid(a)
        }
    }

    useEffect(() => {

    }, [])
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 'auto' }}>
                    <Icon name='chevron-left' color={"red"} size={normalize(20)} />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Showa 35cm</Text>
                <Icon name='bell' color={"grey"} size={normalize(20)} style={{ marginLeft: 'auto' }} />
            </View>
            <ScrollView>
                <Image source={koi2} style={styles.imgSize} />
                <View style={{ padding: normalize(10) }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ marginRight: 'auto' }}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name='user-circle' size={normalize(20)} />
                                <Text style={styles.textName}>Andre Koi Blitar</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: normalize(10) }}>
                                <Icon name='map-marker-alt' size={normalize(20)} />
                                <Text style={{ marginLeft: normalize(14) }}>Blitar, Jawa Timur</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: normalize(10) }}>
                                <Icon name='stopwatch' size={normalize(20)} />
                                <Text style={{ marginLeft: normalize(14) }}>02:08:05</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 'auto' }}>
                            <View style={styles.boxStart}>
                                <Text>Rp. </Text>
                                <Text style={{ fontSize: normalize(16), fontWeight: "bold", color: "black" }}>{price}</Text>
                            </View>
                            <Text style={{ marginTop: normalize(10), marginLeft: normalize(10), color: "black" }}>++ Rp. {increase}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.boxYellow}>
                    <TouchableOpacity style={styles.boxWA}>
                        <Icon name='whatsapp' color={"green"} solid size={normalize(30)} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>onMinus(bid, increase, price)} style={styles.boxMin}>
                        <Icon name='minus' color={"grey"} solid size={normalize(30)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxPrice}>
                        <TextInput keyboardType='number-pad' style={{ textAlign: "right", fontSize: normalize(12), width: normalize(200), marginRight: normalize(20), color: "black" }} onChangeText={(e) => setBid(e.value)} value={bid.toString()} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onPlus(bid, increase)} style={styles.boxMax}>
                        <Icon name='plus' color={"#51B8DC"} solid size={normalize(30)} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxBid}>
                        <Text style={{ color: "white", fontSize: normalize(16) }}>BID</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: normalize(10) }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "black" }}>{">"} Total Bid</Text>
                        <Text style={{ marginLeft: 'auto', color: "black" }}>1 Bid</Text>
                    </View>
                </View>

                <View style={styles.boxDesc}>
                    <Text style={{ color: "black" }}>Showa 35cm</Text>
                    <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: "black" }}>Ref ID: #189000</Text>
                        <TouchableOpacity style={styles.boxShare}>
                            <Icon name='share-alt' size={normalize(15)} />
                            <Text style={{ color: "#51B8DC" }}> Share</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "black", marginTop: normalize(10) }}>Size : 35 cm</Text>
                    <Text style={{ color: "black", marginTop: normalize(10) }}>Sex : </Text>
                    <Text style={{ color: "black", marginTop: normalize(10) }}>Instagram : @showakoi</Text>
                    <Text style={{ color: "black", marginTop: normalize(10) }}>* Teliti sebelum melakukan bidding</Text>
                    <Text style={{ color: "black", marginTop: normalize(10) }}>* Ikan dalam kondisi sehat dan siap kirim</Text>
                    <Text style={{ color: "black", marginTop: normalize(10) }}>* Konfirmasi pemenang 2 x 24 jam</Text>
                    <Text style={{ color: "black", marginTop: normalize(10) }}>* Titip ikan maksimal 7 hari setelah lelang close</Text>
                    <Text style={{ color: "black", marginTop: normalize(10) }}>* Harga belum termasuk ongkos kirim + packing</Text>
                </View>

                <View style={{ paddingLeft: normalize(10), paddingTop: normalize(20) }}>
                    <Text style={{ color: "black" }}>Item lain dari pelelang ini</Text>
                    <ScrollView horizontal>
                        <View style={styles.pagination}>
                            {
                                koiProducts.map((data, i) => (
                                    <TouchableOpacity onPress={() => navigation.push('Products')} style={data[0] ? {} : { marginLeft: normalize(10) }} key={i}>
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
                            {
                                koiProducts.map((data, i) => (
                                    <TouchableOpacity onPress={() => navigation.push('Products')} style={data[0] ? {} : { marginLeft: normalize(10) }} key={i}>
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
                    </ScrollView>
                </View>

                <View style={{ paddingLeft: normalize(10), paddingTop: normalize(50), paddingBottom: normalize(20) }}>
                    <Text style={{ color: "black" }}>Item lain dari kategori ini</Text>
                    <ScrollView horizontal>
                        <View style={styles.pagination}>
                            {
                                koiProducts.map((data, i) => (
                                    <TouchableOpacity onPress={() => navigation.push('Products')} style={data[0] ? {} : { marginLeft: normalize(10) }} key={i}>
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
                            {
                                koiProducts.map((data, i) => (
                                    <TouchableOpacity onPress={() => navigation.push('Products')} style={data[0] ? {} : { marginLeft: normalize(10) }} key={i}>
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
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        height: normalize(55),
        backgroundColor: "white",
        padding: normalize(20),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    textTitle: {
        color: "red",
        fontSize: normalize(16),
        fontWeight: "500"
    },
    imgSize: {
        width: '100%',
        height: normalize(200)
    },
    textName: {
        color: "#51B8DC",
        marginLeft: normalize(10)
    },
    boxStart: {
        width: normalize(100),
        height: normalize(40),
        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    boxYellow: {
        width: "100%",
        height: normalize(40),
        backgroundColor: "#F9FCC5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: normalize(5)
    },
    boxWA: {
        width: normalize(35),
        height: normalize(35),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginRight: 'auto',
        borderWidth: 1,
        borderColor: "#808080"
    },
    boxMin: {
        width: normalize(35),
        height: normalize(35),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor: "#808080"
    },
    boxMax: {
        width: normalize(35),
        height: normalize(35),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderWidth: 1,
        borderColor: "#808080",
    },
    boxPrice: {
        width: normalize(200),
        minHeight: normalize(35),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#808080"
    },
    boxBid: {
        width: normalize(50),
        height: normalize(35),
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginLeft: 'auto'
    },
    boxDesc: {
        width: "100%",
        height: normalize(310),
        padding: normalize(10),
        backgroundColor: "white"
    },
    boxShare: {
        width: normalize(70),
        height: normalize(35),
        backgroundColor: "#DDFCC5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: "#dfdfdf",
        flexDirection: "row"
    },
    pagination: {
        paddingRight: normalize(10),
        flexDirection: "row",
        paddingTop: normalize(20)
    }
})

export default Products;