import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';
import Slider from '@react-native-community/slider';
import EventSource from 'react-native-sse';
import { url } from './url';
import axios from 'axios';
import AuthContext from '../authContext';
// axios.defaults.withCredentials = true;


const Room = ({ route, navigation }) => {
    const { roomId, roomName } = route.params;
    const [value, setValue] = useState(0);
    const [totalTaps, setTotalTaps] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [roomDevices, setRoomDevices] = useState([]);
    const { token } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const controlDevice = async (deviceId) => {
        let newStatus
        const newRoomDevices = roomDevices.map((device) => {
            if (device.id === deviceId) {
                device.status = !device.status;
                newStatus = device.status;
            }
            return device;
        });
        setRoomDevices(newRoomDevices);
        try {
            await axios.put(`${url}/api/devices/control/${deviceId}`, {
                status: newStatus
            }, config);
        } catch (error) {
            console.log(error);
        }
      };

    useEffect(() => {
        const fetchRoomById = async () => {
            const res = await axios.get(`${url}/api/rooms/${roomId}/devices`, config);
            setRoomDevices(res.data);

        }
        fetchRoomById();

        const eventSource = new EventSource(`${url}/api/rooms/${roomId}/stream`, {...config, lineEndingCharacter: '\n'});      
        eventSource.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);
            setRoomDevices(data)
        });

        return () => {
            eventSource.close();
        }
    }, [])


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
                        marginBottom:10
                    }}>
                        <TouchableOpacity 
                            onPressIn={()=>navigation.navigate("Home")}>
                            <Ionicons name="caret-back" size={40} color="white" 
                                style={{
                                    marginTop: 10,
                                    marginLeft:-80,
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:30,
                            marginTop:15,
                            justifyContent: "center",
                        color:"white"}}> {roomName}</Text>
                </View>

                <View> 
                    </View>
                    
                    
                    <ScrollView
                            >
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                // justifyContent: 'space-around',
                                alignItems: 'center',
                                marginVertical: 5,
                                marginLeft: 8,
                            }}>

                                {roomDevices.map((device, index) => (
                                    <View
                                        key={index}

                                        style={{
                                            backgroundColor: COLORS.white,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width: 160,
                                            height: 100,
                                            borderRadius: 10,
                                            marginHorizontal: 1,
                                            marginBottom:40,
                                            marginLeft: 20,  // Adjusting margin for the first item
                                            marginRight: 20,  // Adjusting margin for the first item
                                        }}>
                                            <Text style={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                            marginTop: 5,
                                            }}>{device.name}</Text>
                                            <View style={styles.container3}>
                                                <Text style={{
                                                    textAlign: 'center',
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                marginRight: 20,

                                                }}>{device.status ? 'ON:  ': 'OFF:  '}</Text>

                                                <Switch
                                                    trackColor={{false: '#e61700', true: '#4dff88'}}
                                                    thumbColor={device.status ? '#99989a' : '#e61700'}
                                                    // ios_backgroundColor='#4dff88'
                                                    value={device.status}
                                                    onValueChange={() => controlDevice(device.id)}
                                                />
                                            </View>

                                    </View>
                                ))}
                            </View>
                        </ScrollView>            
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Room

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    header: {
       // position: 'absolute',
        width: '100%',
        height: 100,
        backgroundColor: '#3a9feb',
      },
    inputsContainer:{
        height: 500,
        width: '88%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 10,
        paddingHorizontal: 20,
    },
    circleButton: {
      width: 60,
      height: 60,
      borderRadius: 30,  // Half of the width and height to make it a circle
      borderWidth:2,
      borderColor:'white',
      backgroundColor: COLORS.color2,  // Customize your color
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 30,
    },
    container1:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'white',
        borderColor: 'white',
        borderRadius:10,
        borderWidth:2,
        padding:5,
        marginLeft:30,
        marginRight:30
    },
    container2:{
        flex: 1,
        borderWidth:2,
        borderColor:'white',
        borderRadius:20,
        marginLeft:10,
        marginRight:10,
        marginBottom:10
    },
    container3:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'white',
        borderColor: 'white',
        borderRadius:10,
        borderWidth:10,
        width:100,
        marginLeft:30,
        marginRight:30,
    },
    container4:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'white',
        borderColor: 'white',
        borderRadius:10,
        borderWidth:2,
        marginLeft:30,
        marginRight:30
    },
});
