import { View, Text, Image , Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: COLORS.DodgerBlue,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <TouchableOpacity 
                            onPress={()=>navigation.openDrawer()}>
                            <Image
                                source={require('../assets/menu_button.png')}
                                style={{
                                    width: 100,
                                    height: 50,
                                    top: 10,
                                    right: 40,
                                }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../assets/hero2.jpg')}
                            style={{
                                width: 100,
                                height: 50,
                                left: 50,
                                top: 10,
                            }}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: COLORS.black,
                            right: -10,
                        }}>
                            Hello, Tung!
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                            <View style={{
                                width: 60,
                                height: 60,
                                alignItems: 'center',
                            }}>
                                <Image
                                    source={require('../assets/Cloudy.jpg')}
                                    style={{
                                        width: 50,
                                        height: 40,
                                        
                                    }}
                                />
                                <Text style={{
                                    fontWeight: 'bold',
                                }}>
                                    CLOUDY
                                </Text>
                            </View>
                            <View style={{
                                width: 60,
                                height: 60,
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                    top: 5,
                                }}>
                                    30℃
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    top: 5,
                                }}>
                                    TEMPERATURE
                                </Text>
                            </View>
                            <View style={{
                                width: 100,
                                height: 60,
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                    top: 5,
                                }}>
                                    56%
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    top: 5,
                                }}>
                                    HUMIDITY
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        backgroundColor: COLORS.LightSlateGrey,
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: COLORS.Aquamarine,
                            width: 150,
                            height: 75,
                            borderRadius: 50,
                            marginBottom: 30,
                            marginTop: 30,
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                                top: 10,
                            }}>
                                LIVING ROOM
                                Devide: 5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor:COLORS.Aquamarine,
                            width: 150,
                            height: 75,
                            borderRadius: 50,
                            marginBottom: 30,
                            marginTop: 30,
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                                top: 10,
                            }}>
                                BEDROOM     Devide: 6
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor:COLORS.Aquamarine,
                            width: 150,
                            height: 75,
                            borderRadius: 50,
                            marginBottom: 30,
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                                top: 10,
                            }}>
                                BATHROOM        Devide: 4
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor:COLORS.Aquamarine,
                            width: 150,
                            height: 75,
                            borderRadius: 50,
                            marginBottom: 30,
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                                top: 10,
                            }}>
                                KITCHEN     Devide: 5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor:COLORS.Aquamarine,
                            width: 150,
                            height: 75,
                            borderRadius: 50,
                            marginBottom: 30,
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                                top: 10,
                            }}>
                                GARDEN      Devide: 3
                            </Text>
                        </TouchableOpacity>
                        <Image
                            source={require('../assets/ELECTRICITY.png')}
                            style={{
                                width: 300,
                                height: 200,
                                marginBottom: 30,
                            }}
                            resizeMode='contain'
                        />
                        <Image
                            source={require('../assets/HOME.png')}
                            style={{
                                width: 300,
                                height: 200,
                            }}
                            resizeMode='contain'
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Home