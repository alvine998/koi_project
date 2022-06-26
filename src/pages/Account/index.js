import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome'

const Account = ({navigation}) => {
    const [user, setUser] = useState()
    return(
        <>
            {
                user ? {} : (
                    <View style={styles.container}>
                        <Icon name='user-circle' color={"#dfdfdf"} size={100} />
                        <View style={{marginTop:normalize(20)}}>
                            <Text>Pengaturan akun, deposit, dan lainnya</Text>
                        </View>
                        <View style={styles.btnLogin}>
                            <TouchableOpacity onPress={()=>navigation.push('Login')}>
                                <Text style={styles.textLogin}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:normalize(50), flexDirection:"row"}}>
                            <Text>Belum terdaftar? </Text>
                            <TouchableOpacity onPress={()=>navigation.push('Register')}>
                            <Text style={{color:"#51B8DC"}}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    btnLogin:{
        height:normalize(50),
        width:normalize(70),
        backgroundColor:"#51B8DC",
        marginTop:normalize(50),
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    textLogin:{
        color:"white",
        fontSize:normalize(18)
    }
})

export default Account