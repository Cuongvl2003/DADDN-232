import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
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
import AuthContext from '../authContext';
import { url } from './url';

// axios.defaults.withCredentials = true;
const fakeData = [
    {
        id: 1,
        name: 'Temperature',
        lowerThreshold: 10,
        upperThreshold: 20,
    },
    {
        id: 2,
        name: 'Humidity',
        lowerThreshold: 30,
        upperThreshold: 40,
    }
]


const Sensor = ({ navigation }) => {
    const [sensors, setSensors] = useState(fakeData);
    const { token } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const handleSave = async () => {
        await axios.put(`${url}/api/sensors/${sensors[0].id}`, {
            lowerThreshold: sensors[0].lowerThreshold,
            upperThreshold: sensors[0].upperThreshold,
        }, config);

        await axios.put(`${url}/api/sensors/${sensors[1].id}`, {
            lowerThreshold: sensors[1].lowerThreshold,
            upperThreshold: sensors[1].upperThreshold,
        }, config);

        navigation.navigate('Home');
    }
    useEffect(() => {
        const fetchSensor = async () => {
            try {
                const res = await axios.get(`${url}/api/sensors`, config);
                // setSensors(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSensor();
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
                        color:"white"}}> Sensor Adjusting</Text>
                </View>
            
            <View style={styles.inputsContainer}>

                {sensors.map((sensor, index) => {
                    return (
                        <View style={{ marginBottom: 12 }} key={index}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                color: 'black',
                                marginVertical: 8,
                                marginTop:20,
                                marginBottom:20,
                                fontWeight: 'bold'
                            }}>{sensor.name.toUpperCase()} SENSOR</Text>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'black',
                                    marginVertical: 8
                                }}>Lower Threshold: </Text>
                                <View style={{
                                    width: "50%",
                                    height: 48,
                                    borderColor: COLORS.black,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingLeft: 22,
                                    marginBottom:10
                                }}>
                                    <TextInput
                                        placeholder={sensor.lowerThreshold}
                                        placeholderTextColor={COLORS.black}
                                        keyboardType='numeric'
                                        style={{
                                            width: "100%"
                                        }}
                                        defaultValue={sensor.lowerThreshold}
                                        onChangeText={(text) => {
                                            sensors[index].lowerThreshold = text;
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'black',
                                    marginVertical: 8
                                }}>Upper Threshold: </Text>
                                <View style={{
                                    width: "50%",
                                    height: 48,
                                    borderColor: COLORS.black,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingLeft: 22,
                                    marginBottom:10
                                }}>
                                    <TextInput
                                        placeholder={sensor.upperThreshold}
                                        placeholderTextColor={COLORS.black}
                                        keyboardType='numeric'
                                        style={{
                                            width: "100%"
                                        }}
                                        defaultValue={sensor.upperThreshold}
                                        onChangeText={(text) => {
                                            sensors[index].upperThreshold = text;
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    )
                })}

                    <LinearGradient
                        colors={["#00c6fb", "#3381ff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}
                    >
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={handleSave}
                        >
                            <Text style={styles.buttonText1}>SAVE</Text>
                        </TouchableOpacity>
                    </LinearGradient>             

            </View>
            
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Sensor

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
