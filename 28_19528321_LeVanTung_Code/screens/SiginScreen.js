import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class SiginScreen extends Component {
  render() {
    // neu la class component thi can phai su dung this.props
    const { navigation } = this.props

    return (
      <View style={styles.homeSc}>
        <View style={styles.topsc1}>

          


          <Text style={styles.text11}>
            A premium online store for 
          </Text>
          <Text style={styles.text12}>
             sporter and their stylish choice
          </Text>


          <Image source={require('./images/xedap2.jpg')}
            style={styles.imgad04}
          />
<Text style={styles.text13}>
             POWER BIKE
          </Text>
          <Text style={styles.text14}>
             SHOP
          </Text>

          <View style={styles.MayBe02}>
            <View style={styles.chitiet1}>

              <TouchableOpacity
                onPress={() => { navigation.navigate('Home') }}
              >
                <View style={styles.btnAdd}>
                  <Text style={styles.txtct1}>Get Strarted</Text>
                </View>




              </TouchableOpacity>



            </View>




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
    marginTop: 18,


  },

  txtRakib: {
    fontWeight: '600',
    fontSize: 19,
  },
  txtct1: {
    fontWeight: '600',
    fontSize: 20,
    color: '#ffffff',
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
    marginLeft: 50,
  },
  imgad04: {
    height: 250,
    width: 385,
    marginLeft: 4,
    marginTop: 20,

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
    marginTop: 0,

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
    width: 150,
    height: 120,
    borderRadius: 20,
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

    width: 339,
    height: 49,
    backgroundColor: '#ffb6c1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 80,
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
    marginTop: 14,

  },
  text11:{
    fontSize: 21,
    marginLeft: 60,
    fontWeight: '600',
    marginTop: 55,
  },
  text12:{
    fontSize: 21,
    marginLeft: 40,
    fontWeight: '600',
  },
  text13:{
    fontSize: 25,
    marginLeft: 120,
    fontWeight: '700',
    marginTop: 50,
  },
  text14:{
    fontSize: 25,
    marginLeft: 150,
    fontWeight: '700',
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
    marginBottom: 13,
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
