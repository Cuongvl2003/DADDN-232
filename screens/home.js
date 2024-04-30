import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
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
                        <TouchableOpacity 
                            onPress={()=>navigation.openDrawer()}>
                            <SimpleLineIcons name="menu" size={30} color="white" 
                                style={{
                                    marginTop: 10,
                                    marginRight: 20,
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:20,
                            marginTop:15,
                            marginRight:130,
                        color:"white"}}> Home</Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginVertical: 5,
                            color: COLORS.white,
                            marginLeft: 40,
                            marginTop:20
                        }}>
                            Hello, Tung!
                        </Text>
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
                                <MaterialCommunityIcons name="weather-cloudy" size={30} color="white" />
                                <Text style={{
                                    fontWeight: 'bold',
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
                                marginVertical: 5,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: COLORS.white,
                                    width: '20%',
                                    height: 40,
                                    borderRadius: 20,
                                    marginLeft: 1,
                                    marginRight: 1,
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 10,
                                        marginTop: 5,
                                    }}>
                                        LIVING ROOM         Devide: 5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor:COLORS.white,
                                    width: '20%',
                                    height: 40,
                                    borderRadius: 20,
                                    marginLeft: 1,
                                    marginRight: 1,
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 11,
                                        marginTop: 5,
                                    }}>
                                        BEDROOM         Devide: 6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor:COLORS.white,
                                    width: '20%',
                                    height: 40,
                                    borderRadius: 20,
                                    marginLeft: 1,
                                    marginRight: 1,
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 11,
                                        marginTop: 5,
                                    }}>
                                        BATHROOM        Devide: 4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor:COLORS.white,
                                    width: '15%',
                                    height: 40,
                                    borderRadius: 20,
                                    marginLeft: 1,
                                    marginRight: 1,
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 11,
                                        marginTop: 5,
                                    }}>
                                        KITCHEN         Devide: 5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor:COLORS.white,
                                    width: '15%',
                                    height: 40,
                                    borderRadius: 20,
                                    marginLeft: 1,
                                    marginRight: 1,
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 11,
                                        marginTop: 5,
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
                        {/* <Image
                            source={require('../assets/ELECTRICITY.png')}
                            style={{
                                width: '70%',
                                height: 175,
                                marginBottom: 10,
                                marginTop: 10,
                            }}
                            resizeMode='contain'
                        />
                        <Image
                            source={require('../assets/HOME.png')}
                            style={{
                                width: '70%',
                                height: 175,
                                marginBottom: 10,
                                marginTop: 10,
                            }}
                            resizeMode='contain'
                        /> */}


                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color:COLORS.white
                        }}>ELECTRICITY</Text>
                        <LineChart
                            data={{
                            labels: ['0:00', '4:00', '8:00', '12:00', '14:00', '16:00'],
                            datasets: [{
                                data: [20, 45, 28, 80, 99, 43],
                                strokeWidth: 2,
                                    },],
                            }}
                            width={Dimensions.get('window').width - 16}
                            height={220}
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
                                marginRight:20
                            }}
                        />

                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color:COLORS.white
                        }}>TEMPERATURE</Text>
                        <LineChart
                            data={{
                                labels: ['0:00', '4:00', '8:00', '12:00'],
                                datasets: [
                                {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ],
                                },
                                ],
                            }}
                            width={Dimensions.get('window').width - 16} // from react-native
                            height={220}
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
                                marginRight:20
                            }}
                        />

                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
  });