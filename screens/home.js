import { View, Text, Image, Pressable, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

const Home = ({ navigation }) => {

    return (
        <LinearGradient
            style={{flex: 1}}
            colors={[COLORS.color2, COLORS.color1]}
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <Pressable 
                            onPress={()=>navigation.openDrawer()}>
                            <SimpleLineIcons name="menu" size={40} color="black" 
                                style={{
                                    marginTop: 5,
                                    marginLeft: -50,
                                }}/>
                        </Pressable>
                        <MaterialCommunityIcons name="face-man" size={50} color="black"
                            style={{
                                marginTop: 1,
                                marginRight: -50,
                            }}/>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 40,
                            fontWeight: 'bold',
                            color: COLORS.black,
                            marginLeft: '10%',
                        }}>
                            Hello, Tung!
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: '2%',
                        }}>
                            <View style={{
                                position: 'relative',
                                width: '33%',
                                alignItems: 'center',
                            }}>
                                <MaterialCommunityIcons name="weather-cloudy" size={40} color="black" />
                                <Text style={{
                                    fontWeight: 'bold',
                                }}>
                                    CLOUDY
                                </Text>
                            </View>
                            <View style={{
                                position: 'relative',
                                width: '33%',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 30,
                                }}>
                                    30℃
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                }}>
                                    TEMPERATURE
                                </Text>
                            </View>
                            <View style={{
                                position: 'relative',
                                width: '33%',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 30,
                                }}>
                                    56%
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
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
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                marginVertical: 30,
                            }}>
                                <Pressable onPress={()=>navigation.navigate('Room')}
                                    style={{
                                        backgroundColor: COLORS.Aquamarine,
                                        width: 180,
                                        height: 75,
                                        borderRadius: 50,
                                        marginLeft: 30,
                                        marginRight: 30,
                                    }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginTop: 10,
                                    }}>
                                        LIVING ROOM                     Devide: 5
                                    </Text>
                                </Pressable>
                                <Pressable onPress={()=>navigation.navigate('BedRoom')}
                                    style={{
                                        backgroundColor:COLORS.Aquamarine,
                                        width: 180,
                                        height: 75,
                                        borderRadius: 50,
                                        marginLeft: 30,
                                        marginRight: 30,
                                    }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginTop: 10,
                                    }}>
                                        BEDROOM                         Devide: 6
                                    </Text>
                                </Pressable>
                                <Pressable onPress={()=>navigation.openDrawer()}
                                    style={{
                                        backgroundColor:COLORS.Aquamarine,
                                        width: 180,
                                        height: 75,
                                        borderRadius: 50,
                                        marginLeft: 30,
                                        marginRight: 30,
                                    }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginTop: 10,
                                    }}>
                                        BATHROOM                        Devide: 4
                                    </Text>
                                </Pressable>
                                <Pressable onPress={()=>navigation.openDrawer()}
                                    style={{
                                        backgroundColor:COLORS.Aquamarine,
                                        width: 180,
                                        height: 75,
                                        borderRadius: 50,
                                        marginLeft: 30,
                                        marginRight: 30,
                                    }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginTop: 10,
                                    }}>
                                        KITCHEN                         Devide: 5
                                    </Text>
                                </Pressable>
                                <Pressable onPress={()=>navigation.openDrawer()}
                                    style={{
                                        backgroundColor:COLORS.Aquamarine,
                                        width: 180,
                                        height: 75,
                                        borderRadius: 50,
                                        marginLeft: 30,
                                        marginRight: 30,
                                    }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginTop: 10,
                                    }}>
                                        GARDEN                          Devide: 3
                                    </Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flex: 1,
                    }}>
                        <Image
                            source={require('../assets/ELECTRICITY.png')}
                            style={{
                                height: 350,
                                marginTop: 30,
                            }}
                            resizeMode='contain'
                        />
                        <Image
                            source={require('../assets/HOME.png')}
                            style={{
                                height: 350,
                                marginTop: 30,
                            }}
                            resizeMode='contain'
                        />
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: 20,
                            color:COLORS.white
                        }}>
                            ELECTRICITY
                        </Text>
                        <LineChart
                            data={{
                            labels: ['0:00', '4:00', '8:00', '12:00', '14:00', '16:00'],
                            datasets: [{
                                data: [20, 45, 28, 80, 99, 43],
                                strokeWidth: 2,
                                    },],
                            }}
                            width={Dimensions.get('window').width - 16}
                            height={350}
                            chartConfig={{
                                backgroundColor: COLORS.white,
                                backgroundGradientFrom: '#eff3ff',
                                backgroundGradientTo: '#efefef',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                marginLeft:20,
                                marginRight:20,
                                marginTop: 30,
                            }}
                        />

                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: 20,
                            color:COLORS.white
                        }}>
                            TEMPERATURE
                        </Text>
                        <LineChart
                            data={{
                                labels: ['0:00', '4:00', '8:00', '12:00'],
                                datasets: [{
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ]
                                }]
                            }}
                            width={Dimensions.get('window').width - 16} // from react-native
                            height={350}
                            yAxisLabel={'℃'}
                            chartConfig={{
                                backgroundColor: '#1cc910',
                                backgroundGradientFrom: '#eff3ff',
                                backgroundGradientTo: '#efefef',
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                                }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                marginLeft:20,
                                marginRight:20,
                                marginTop: 30,
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Home
