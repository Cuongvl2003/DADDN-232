import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';
import { url } from './url';


const AddDevice = ({ navigation }) => {

    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1',value:'Living Room'},
        {key:'2',value:'Bedroom'},
        {key:'3',value:'Kitchen'},
        {key:'4',value:'Bathroom'},
    ];

    const data1 = [
        {key:'1',value:'Fan'},
        {key:'2',value:'Light'},
    ];
    const rooms = [
        { name: 'LIVING ROOM', devices: 5 },
        { name: 'BEDROOM', devices: 6  },
        { name: 'BATHROOM', devices: 4},
        { name: 'KITCHEN', devices: 5},
        { name: 'GARDEN', devices: 3},
      ];
      const room1 = rooms.map(room => ({ value: room.name }));//rooms là dữ liệu lấy từ api, còn room1 là dữ liệu lấy từ rooms để xử lý


      const [deviceName, setDeviceName] = useState('');
      const [deviceType, setDeviceType] = useState('');
      const [addto, setAddto] = useState('');
      


      const handleAddDevice = async (e) =>
        {
            if (!deviceName) {
                Alert.alert('Alert', 'Missing device name', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
            }
            else
            {   
                Alert.alert(' ', 'Adding devicec successfully', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
            }
        }
    return(
        <LinearGradient
            style={{flex: 1}}
            colors={[COLORS.color2, COLORS.color1]}
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
        > 
        <SafeAreaView style={{ flex: 1 }}>   
            <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity 
                            onPress={()=>navigation.openDrawer()}>
                            <SimpleLineIcons name="menu" size={30} color="white" 
                                style={{
                                    marginTop: 10,
                                    marginLeft:-80,
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:20,
                            marginTop:15,
                        color:"white"}}> Add New Device</Text>
                </View>
            
            <View style={styles.inputsContainer}>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        alignItems: "center",
                        justifyContent: "center",
                        color: COLORS.darkgrey,
                        marginTop:20
                    }}>Device name</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.grey,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholderTextColor={COLORS.black}
                            keyboardType='ascii-capable'
                            style={{
                                width: "100%"
                            }}
                            onChangeText={NewDeviceName=>setDeviceName(NewDeviceName)}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: COLORS.darkgrey,
                        marginVertical: 8
                    }}>Device type</Text>

                    <SelectList                    
                        setSelected={setSelected} 
                        data={data1}   
                        search={false} 
                        boxStyles={{borderRadius:10, borderColor: COLORS.grey, height: 52,}} //override default styles
                        defaultOption={{  value:'light' }}   //default selected option
                        dropdownStyles={{
                            borderColor: COLORS.grey,
                            borderBottomColor: COLORS.grey
                        }}
                        onValueChange={NewDeviceType=>setDeviceType(NewDeviceType)}
                        dropdownItemStyles={{marginBottom:10}}
                        dropdownTextStyles={{borderBottomColor: COLORS.grey}}
                    />
                </View>


                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color:COLORS.darkgrey,
                    }}>Add to</Text>
                    
                    <SelectList                    
                        setSelected={setSelected} 
                        data={room1}   
                        search={false} 
                        boxStyles={{borderRadius:10, borderColor: COLORS.grey, height: 52,}} //override default styles
                        defaultOption={{ key:'1', value:'LIVING ROOM' }}   //default selected option
                        dropdownStyles={{
                            borderColor: COLORS.grey,
                            borderBottomColor: COLORS.grey
                        }}
                        onValueChange={NewAddto=>setAddto(NewAddto)}
                        dropdownItemStyles={{marginBottom:10}}
                        dropdownTextStyles={{borderBottomColor: COLORS.grey}}
                    />

                    
                </View> 

                
                    <LinearGradient
                        colors={["#00c6fb", "#3381ff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}
                    >
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={handleAddDevice}
                        >
                            <Text style={styles.buttonText1}>Add device</Text>
                        </TouchableOpacity>
                    </LinearGradient>             

            </View>
            
            </SafeAreaView>
        </LinearGradient>
    )
}
export default AddDevice

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#bcbcbc',
        
    },
    header: {
       // position: 'absolute',
        width: '100%',
        height: 100,
        backgroundColor: '#3a9feb',
      },
    inputsContainer:{
        height: 'auto',
        width: '88%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 10,
        paddingHorizontal: 20,
    },
    button1: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText1:{
        fontSize:20,
        color: COLORS.white,
    },
    gradient:{
        borderRadius:18,
        marginBottom:30
    }
});
