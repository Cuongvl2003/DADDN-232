import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';


const Room = ({ navigation }) => {
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
            
            
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Room

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
        height: 500,
        width: '88%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 10,
        paddingHorizontal: 20,
    }
});
