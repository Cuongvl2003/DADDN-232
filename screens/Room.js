import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';



const Room = ({ navigation }) => {

    const [value, setValue] = useState(0);
    const [totalTaps, setTotalTaps] = useState(0);

    const incrementValue = () => {
        setValue(value + 1);
        setTotalTaps(totalTaps + 1);
    }

    const decrementValue = () => {
        setValue(value - 1);
        setTotalTaps(totalTaps - 1);
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                            onPress={()=>navigation.navigate("Home")}>
                            <Ionicons name="caret-back" size={30} color="white" 
                                style={{
                                    marginTop: 10,
                                    marginLeft:-80,
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:20,
                            marginTop:15,
                            justifyContent: "center",
                        color:"white"}}> Living Room</Text>
                </View>

                <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginBottom: 5,
                        }}>
                            <View style={{
                                width: '30%',
                                height: 60,
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize:20,
                                    color:COLORS.white,
                                }}>
                                    150KwH
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    marginTop:5,
                                    color:COLORS.white,
                                }}>
                                    CLOUDY
                                </Text>
                            </View>
                            <View style={{
                                width: '30%',
                                height: 60,
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    color:COLORS.white,
                                }}>
                                    30℃
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    marginTop: 5,
                                    color:COLORS.white,
                                }}>
                                    TEMPERATURE
                                </Text>
                            </View>
                            <View style={{
                                width: '30%',
                                height: 60,
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    color:COLORS.white,
                                }}>
                                    56%
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    marginTop: 5,
                                    color:COLORS.white,
                                }}>
                                    HUMIDITY
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                    <ScrollView>
                    <View style={styles.container}>
                        <Text style={{ fontSize: 60, marginBottom: -20,  color: 'white',}}>{value}</Text>
                        <Text style={{ fontSize: 20, padding: 20, color: 'white'}}>{"Temperature"}</Text>
                        <StatusBar style="auto" />
                            <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.circleButton} onPress={incrementValue}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                            <Text>   </Text>
                            <TouchableOpacity style={styles.circleButton} onPress={decrementValue}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            </View>
                    </View>
                    <Text>   </Text>

                    <View style={styles.container2}>
                    <Text style={{color:'white',fontSize:20, marginLeft:30}}>Light List:</Text>
                    <Text> </Text>
                    <ScrollView>
                        <View style={styles.container1}> 
                            <MaterialCommunityIcons name="lightbulb-on" size={24} color="#005ce6" />
                            <Text style={{color:'black',fontSize:20}}>light1</Text>
                            <Switch
                                trackColor={{false: '#c0bfc0', true: '#c0bfc0'}}
                                thumbColor={isEnabled ? '#005ce6' : '#99989a'}
                                ios_backgroundColor='#4dff88'
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("DeviceSetting")}>
                                <Ionicons name="settings-outline" size={30} color="black" />
                            </TouchableOpacity>
                            
                        </View>
                        <Text> </Text>
                        <View style={styles.container1}> 
                            <MaterialCommunityIcons name="lightbulb-on" size={24} color="#005ce6" />
                            <Text style={{color:'black',fontSize:20}}>light2</Text>
                            <Switch
                                trackColor={{false: '#c0bfc0', true: '#c0bfc0'}}
                                thumbColor={isEnabled ? '#005ce6' : '#99989a'}
                                ios_backgroundColor='#4dff88'
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("DeviceSetting")}>
                                <Ionicons name="settings-outline" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <Text> </Text>
                        
                    </ScrollView>
                    </View>

                    <View style={styles.container2}>
                    <Text style={{color:'white',fontSize:20, marginLeft:50}}>Fan List:</Text>
                    <Text> </Text>
                    <ScrollView>
                        <View style={styles.container1}> 
                            <MaterialCommunityIcons name="lightbulb-on" size={24} color="#005ce6" />
                            <Text style={{color:'black',fontSize:20}}>fan1</Text>
                            <Switch
                                trackColor={{false: '#c0bfc0', true: '#c0bfc0'}}
                                thumbColor={isEnabled ? '#005ce6' : '#99989a'}
                                ios_backgroundColor='#4dff88'
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("DeviceSetting")}>
                                <Ionicons name="settings-outline" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <Text> </Text>
                        <View style={styles.container1}> 
                            <MaterialCommunityIcons name="lightbulb-on" size={24} color="#005ce6" />
                            <Text style={{color:'black',fontSize:20}}>fan1</Text>
                            <Switch
                                trackColor={{false: '#c0bfc0', true: '#c0bfc0'}}
                                thumbColor={isEnabled ? '#005ce6' : '#99989a'}
                                ios_backgroundColor='#4dff88'
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("DeviceSetting")}>
                                <Ionicons name="settings-outline" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <Text> </Text>
                        
                        
                    </ScrollView>
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
});
