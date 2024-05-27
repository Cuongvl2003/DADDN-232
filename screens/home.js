import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React,{useState, useEffect} from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';
import { url } from './url';

const Home = ({ navigation }) => {

    // const [rooms, setRooms]=useState([]);
    // useEffect( ()=>{
    //     const fetchRoom = async() => {
    //         const res = await axios.get(`${url}api/rooms`);
    //         console.log(res);
    //         setRooms(res.data)
    //     }
    //     fetchRoom()
    // }, [])
    const rooms = [
        { name: 'LIVING ROOM', devices: 5 },
        { name: 'BEDROOM', devices: 6  },
        { name: 'BATHROOM', devices: 4},
        { name: 'KITCHEN', devices: 5},
        { name: 'GARDEN', devices: 3},
      ];
      const UserName='Master';
      const [noti, setNoti]=useState(0)

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
                        alignItems:'center',
                        alignContent:'center',
                        marginTop: 10
                    }}>
                        <TouchableOpacity 
                            onPress={()=>navigation.openDrawer()}>
                            <SimpleLineIcons name="menu" size={30} color="white" 
                                style={{
                                    
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:24,
                            
                        color:"white"}}> Home</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
                            <MaterialCommunityIcons name="bell" size={32} color="white" />
                        </TouchableOpacity>
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
                            Hello, {UserName}!
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
                            >
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                marginVertical: 5,
                            }}>

                                {rooms.map((room) => (
                                    <TouchableOpacity
                                        onPress={()=>navigation.navigate("Room")}
                                        style={{
                                            backgroundColor: COLORS.white,
                                            width: 150,
                                            height: 65,
                                            borderRadius: 10,
                                            marginHorizontal: 1,
                                            marginBottom:20,
                                            marginLeft: 20,  // Adjusting margin for the first item
                                            marginRight: 20,  // Adjusting margin for the first item
                                        }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        marginTop: 5,
                                    }}>
                                        {room.name}
                                    </Text>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 11,
                                        marginTop: 5,
                                    }}>
                                        Device: {room.deviceCount}
                                    </Text>
                                    
                                    </TouchableOpacity>
      ))}

                                {/* <TouchableOpacity 
                                    onPress={()=>navigation.navigate("Room")}
                                    style={{
                                    backgroundColor: COLORS.white,
                                    width: '20%',
                                    height: 40,
                                    borderRadius: 20,
                                    marginLeft: 50,
                                    marginRight: 50,
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
                                </TouchableOpacity> */}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        }}>

                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color:COLORS.white
                        }}>HUMIDITY</Text>
                        <LineChart
                            data={{
                            labels: ['0:00', '4:00', '8:00', '12:00', '14:00', '16:00','18:00','20:00'],
                            datasets: [{
                                data: [60,62,70,64,68,55,72,60],
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