import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';


const AddDevice = ({ navigation }) => {
    return(
        <View style={styles.container}> 
            <SafeAreaView style={styles.header}>
            <Ionicons name="reorder-three" size={32} color="white" />
            <Text style={{alignItems: "center",
                        justifyContent: "center",
                        color:"white"}}> Add New Device</Text>
            <Ionicons name="search" size={32} color="white" />
            </SafeAreaView>
            <View style={styles.inputsContainer}>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>Device name</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            // placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='name'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Device type</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            // placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='name'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Device brand</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            // placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='name'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Add to</Text>
                    <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                    }}>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Ionicons name="bed-outline" size={32} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <FontAwesome5 name="bath" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <MaterialCommunityIcons name="sofa-outline" size={24} color="black" />
                    </TouchableOpacity>
                    </View>

                    
                </View>               

            </View>
            <Button
                    title="Add Device"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        marginLeft:20,
                        marginRight:20,
                    }}
                />
        </View>
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
        height: 400,
        width: '94%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 30,
        paddingHorizontal: 20,
    }
});
