import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {

    return (
        <LinearGradient
            style={{flex: 1}}
            colors={[COLORS.DodgerBlue, COLORS.LightSlateGrey]}
            >
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <TouchableOpacity 
                            onPress={()=>navigation.openDrawer()}>
                            <SimpleLineIcons name="menu" size={'250%'} color="black" 
                                style={{
                                    marginTop: '50%',
                                    marginLeft: '-70%',
                                }}/>
                        </TouchableOpacity>
                        <MaterialCommunityIcons name="face-man" size={'350%'} color="black"
                            style={{
                                marginTop: '5%',
                                marginRight: '-10%',
                            }}/>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: '200%',
                            fontWeight: 'bold',
                            marginVertical: '5%',
                            color: COLORS.black,
                            marginLeft: '10%',
                        }}>
                            Hello, Tung!
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginBottom: '5%',
                        }}>
                            <View style={{
                                width: '30%',
                                height: '60%',
                                alignItems: 'center',
                            }}>
                                <MaterialCommunityIcons name="weather-cloudy" size={'250%'} color="black" />
                                <Text style={{
                                    fontWeight: 'bold',
                                }}>
                                    CLOUDY
                                </Text>
                            </View>
                            <View style={{
                                width: '30%',
                                height: '60%',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: '165%',
                                }}>
                                    30℃
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    marginTop: '5%',
                                }}>
                                    TEMPERATURE
                                </Text>
                            </View>
                            <View style={{
                                width: '30%',
                                height: '60%',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: '165%',
                                }}>
                                    56%
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    marginTop: '5%',
                                }}>
                                    HUMIDITY
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <ScrollView
                            horizontal = {true}>
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                marginVertical: '5%',
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: COLORS.Aquamarine,
                                    width: '15%',
                                    height: '120%',
                                    borderRadius: 50,
                                    marginLeft: '1%',
                                    marginRight: '1%',
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '120%',
                                        marginTop: '5%',
                                    }}>
                                        LIVING ROOM         Devide: 5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor:COLORS.Aquamarine,
                                    width: '15%',
                                    height: '120%',
                                    borderRadius: 50,
                                    marginLeft: '1%',
                                    marginRight: '1%',
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '120%',
                                        marginTop: '5%',
                                    }}>
                                        BEDROOM         Devide: 6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor:COLORS.Aquamarine,
                                    width: '15%',
                                    height: '120%',
                                    borderRadius: 50,
                                    marginLeft: '1%',
                                    marginRight: '1%',
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '120%',
                                        marginTop: '5%',
                                    }}>
                                        BATHROOM        Devide: 4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor:COLORS.Aquamarine,
                                    width: '15%',
                                    height: '120%',
                                    borderRadius: 50,
                                    marginLeft: '1%',
                                    marginRight: '1%',
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '120%',
                                        marginTop: '5%',
                                    }}>
                                        KITCHEN         Devide: 5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor:COLORS.Aquamarine,
                                    width: '15%',
                                    height: '120%',
                                    borderRadius: 50,
                                    marginLeft: '1%',
                                    marginRight: '1%',
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '120%',
                                        marginTop: '5%',
                                    }}>
                                        GARDEN          Devide: 3
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        }}>
                        <Image
                            source={require('../assets/ELECTRICITY.png')}
                            style={{
                                width: '70%',
                                height: '175%',
                                marginBottom: '10%',
                                marginTop: '10%',
                            }}
                            resizeMode='contain'
                        />
                        <Image
                            source={require('../assets/HOME.png')}
                            style={{
                                width: '70%',
                                height: '175%',
                                marginBottom: '10%',
                                marginTop: '10%',
                            }}
                            resizeMode='contain'
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Home