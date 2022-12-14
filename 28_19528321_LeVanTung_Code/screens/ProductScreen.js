import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class DongVatBaoTon extends Component {
    render() {
        // neu la class component thi can phai su dung this.props
        const { navigation } = this.props

        return (
            <View style={styles.homeSc}>
                <View style={styles.topsc1}>

                    <View style={styles.baGach}>



                    </View>

                    <View style={styles.addTask}>


                        <TouchableOpacity
                        >
                            <AntDesign name="search1" size={24} color="black"
                                style={styles.iconSearch}
                            />

                        </TouchableOpacity>

                        <TextInput
                            /* truyen gia tri cua task vao cho nut + */

                            placeholder='Would you like your bike ?'
                            style={styles.input} />
                    </View>

                    <Image source={require('./images/xedap7.jpg')}
                        style={styles.imgTx}
                    />

                    <Text style={styles.chu2}> PINA MOUNTAIN</Text>

                    <Text style={styles.chu3}> Some people have strong feelings about wheel size. Our hardtail trail companion Karate Monkey likes to party with 27.5+ wheels and 29ers alike. That open-minded versatility extends to braze-ons and beyond, allowing you to set it up for speedy singletrack mayhem,</Text>
                    <View style={styles.addTask}>


                        <TouchableOpacity
                        >
                            <Ionicons name="heart-outline" size={24} color="black" />

                        </TouchableOpacity>

                        <TouchableOpacity
                        >
                            <View style={styles.btnAdd5}>
                                <Text style={styles.txtct1}>
                                    Add to cart
                                </Text>

                            </View>




                        </TouchableOpacity>
                    </View>





                </View>





            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeSc: {
        flex: 1,
        backgroundColor: '#ffff',
    },

    topsc1: {
        flex: 1,
    },

    baGach: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 1,
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    txtRakib: {
        fontWeight: '600',
        fontSize: 21,
        color: '#db7093',
        marginTop: 25,
    },
    txtct1: {
        fontWeight: '500',
        fontSize: 15,
    },


    btnQR: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 2,
        marginRight: 120,

    },


    txtThemBan: {

        fontSize: 35,
        fontWeight: '600',
        marginLeft: 70,
        marginTop: 2,
    },

    iconSearch: {
        marginTop: 10,
    },

    imgXanh: {
        height: 50,
        width: 50,
        marginLeft: 1,
    },
    imgad04: {
        height: 120,
        width: 380,
        marginLeft: 4,

    },

    imgad02: {
        width: 50,
        height: 50,
        borderRadius: 20,

    },
    imgad: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },

    btnSDT: {

    },

    addTask: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,

    },

    input: {
        height: 44,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d8bfd8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 1,

    },
    scview: {

    },
    imgTx: {
        width: 350,
        height: 250,
        borderRadius: 20,
        marginLeft: 20,
    },
    imgMon2: {
        width: 150,
        height: 120,
        borderRadius: 20,
    },
    imgTxLV: {
        width: 180,
        height: 200,
    },
    tim: {
        width: 50,
        height: 45,
        backgroundColor: '#7fffd4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 15,

    },
    chitiet1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chitiet2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnAdd: {

        width: 90,
        height: 45,
        backgroundColor: '#b0e0e6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 3,
        marginRight: 60,
        marginLeft: 40,


    },
    btnAdd5: {

        width: 300,
        height: 45,
        backgroundColor: '#b0e0e6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 3,
        marginRight: 60,
        marginLeft: 8,


    },
    text13: {
        fontSize: 25,
        marginLeft: 20,
        fontWeight: '700',
        marginTop: 50,
    },
    btnAdd8: {

        width: 90,
        height: 39,
        backgroundColor: '#db7093',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 3,
        marginRight: 60,
        marginLeft: 40,


    },




    MayBe: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,

    },

    MayBe2: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 1,

    },
    chu2:{
        fontSize:25,
        fontWeight:'600',
        marginLeft:20,
        marginTop: 19,
    },
    chu3:{
        fontSize:18,
        fontWeight:'400',
        marginLeft:20,
        marginTop: 19,
    },
    iconMaybe: {

        height: 44,
        width: '190%',
        backgroundColor: '#ffe4e1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 15,

    },

    btnMayBe: {

        width: '100%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 1,
        marginRight: 60,

    },

    DaGui: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',


    },



    btndaGui: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 200,

    },
    GioiThieu: {

        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    MayBe02: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',

        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,

    },



    btngioiThieu: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 180,

    },



    // bottomBuy: {
    //     flex: 1,
    // },

    // btnBuy: {
    //     marginTop: 100,
    //     marginHorizontal: 30,
    //     borderRadius: 20,
    // },
});
