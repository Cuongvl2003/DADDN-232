import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Button } from 'react-native'
import React,{useState, useEffect, useContext} from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';
import { url } from './url';
import Modal from "react-native-modal";

import { DatePickerModal, en, registerTranslation } from 'react-native-paper-dates';
import DateTimePicker from "react-native-modal-datetime-picker";
import EventSource from 'react-native-sse';
import AuthContext from '../authContext';
registerTranslation('en', en);
const Home = ({ route, navigation }) => {
    const defaultData = {
        temperature: [[
            "2024-05-28T04:00:00Z",
            "0"
        ],
        [
            "2024-05-28T12:00:00Z",
            "0"
        ],
        [
            "2024-05-28T04:00:00Z",
            "0"
        ],
        [
            "2024-05-28T12:00:00Z",
            "0"
        ],
        [
            "2024-05-28T04:00:00Z",
            "0"
        ],
        [
            "2024-05-28T12:00:00Z",
            "0"
        ],
        [
            "2024-05-28T04:00:00Z",
            "0"
        ]],

        humidity: [[
            "2024-05-28T04:00:00Z",
            "0"
        ],
        [
            "2024-05-28T12:00:00Z",
            "0"
        ],
        [
            "2024-05-28T04:00:00Z",
            "0"
        ],
        [
            "2024-05-28T12:00:00Z",
            "0"
        ],
        [
            "2024-05-28T04:00:00Z",
            "0"
        ],
        [
            "2024-05-28T12:00:00Z",
            "0"
        ],
        [
            "2024-05-28T04:00:00Z",
            "0"
        ]],
    }

    const [rooms, setRooms]=useState([]);
    const [humidity, setHumidity] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [hasNotification, setHasNotification] = useState(false);
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [notification, setNotification] = useState('');
    const [dataStory, setDataStory] = useState(defaultData)
    const [isVisible, setIsVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    
    const { token, user } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const handleConfirm = async (date) => {
        setIsVisible(false);
        setDate(date);
        const sensorData = await axios.get(`${url}/api/sensors/data`, {
            params: {
                date: date.toLocaleDateString(),
            },
            ...config
        });
        if(sensorData.data.temperature.length !== 0 && sensorData.data.humidity.length !== 0)
            setDataStory(sensorData.data);
        else setDataStory(defaultData);
    }

    useEffect(()=>{
        const fetchRoom = async() => {
            const res = await axios.get(`${url}/api/rooms`, config);
            setRooms(res.data)
            const sensorData = await axios.get(`${url}/api/sensors/data`, {
                params: {
                    date: date.toLocaleDateString(),
                },
                ...config
            });
            if(sensorData.data.temperature.length !== 0 && sensorData.data.humidity.length !== 0)
                setDataStory(sensorData.data);
            else setDataStory(defaultData);
        }
        fetchRoom()

        // const getSensorData = () => {
            const eventSource1 = new EventSource(`${url}/api/sensors/current`, {...config, lineEndingCharacter: '\n'});      
            eventSource1.addEventListener("message", (event) => {
                const data = JSON.parse(event.data);
                setHumidity(parseFloat(data.humidity).toFixed(1));
                setTemperature(parseFloat(data.temperature).toFixed(1));
            });
        // }
        // getSensorData();

        // const getNotifications = async () => {
            const eventSource2 = new EventSource(`${url}/api/logs/stream`, {...config, lineEndingCharacter: '\n'});
            eventSource2.addEventListener("message", (event) => {
                const data = JSON.parse(event.data);
                setNotification(data.message);
                setHasNotification(true);
                setShowNotificationModal(true);
            });
        // }
        // getNotifications();

    }, [])

    const hasNewRoom = route.params?.hasNewRoom;

    useEffect(() => {
        if (hasNewRoom) {
            setRooms([...rooms, hasNewRoom])
        }
    }, [hasNewRoom])
    
    const hasNewDeviceInRoom = route.params?.hasNewDevice;
    useEffect(() => {
        if (hasNewDeviceInRoom) {
            const fetchRoom = async() => {
                const res = await axios.get(`${url}/api/rooms`, config);
                setRooms(res.data)
            }
            fetchRoom()
        }
    }, [hasNewDeviceInRoom])

    let now=new Date().getHours();       

    const handleNotificationPress = () => {
        setHasNotification(false);
        navigation.navigate("Notification");
    };

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
                            fontSize:30,
                            
                        color:"white"}}> Home</Text>
                        <TouchableOpacity onPress={handleNotificationPress}>
                            {hasNotification ? (
                                <MaterialCommunityIcons name="bell-alert" size={32} color="#DC143C" />
                            ) : (
                                <MaterialCommunityIcons name="bell" size={32} color="white" />
                            )}
                        </TouchableOpacity>
                        <Modal isVisible={showNotificationModal}>
                            <View style={{ 
                                backgroundColor: 'white',
                                width: 320,
                                height: 160,
                                alignItems: 'center', 
                                justifyContent: 'center',
                                borderRadius: 20,
                                margin: 'auto',
                                }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    fontSize: 25,
                                    marginBottom: 20,
                                }}>
                                    {notification}
                                </Text>
                                <Button title="Close" onPress={() => setShowNotificationModal(false)} />
                            </View>
                        </Modal>
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
                            Hello, {user}!
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
                                    {temperature}°C
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
                                    {humidity}%
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
                                // justifyContent: 'space-evenly',
                                alignItems: 'center',
                                marginVertical: 5,
                                marginLeft: 8,
                            }}>

                                {rooms.map((room, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={()=>{
                                            navigation.navigate("Room",
                                            {
                                                roomId: room.id,
                                                roomName: room.name,
                                            })
                                        }}
                                        style={{
                                            backgroundColor: COLORS.white,
                                            width: "40%",
                                            height: 70,
                                            borderRadius: 10,
                                            marginHorizontal: 1,
                                            marginBottom:20,
                                            marginLeft: 20,  // Adjusting margin for the first item
                                            marginRight: 20,  // Adjusting margin for the first item
                                        }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginTop: 5,
                                    }}>
                                        {room.name}
                                    </Text>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontWeight: 'normal',
                                        fontSize: 16,
                                        marginTop: 5,
                                    }}>
                                        Device: {room.deviceCount}
                                    </Text>
                                    </TouchableOpacity>
      ))}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        }}>

                    <View style={{
                        width:200,
                        height:100,
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginTop: 10,
                        borderRadius: 10,
                        marginBottom: 10,
                    }}>
                        {/* <DatePickerModal
                            locale="en"
                            mode="single"
                            visible={isVisible}
                            onDismiss={() => setIsVisible(false)}
                            date={date
                            onConfirm={handleConfirm}
                        /> */}
                        <DateTimePicker
                            isVisible={isVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={() => setIsVisible(false)}
                            minimumDate={new Date(Date.now() - 3600 * 1000 * 24 * 30)}
                            maximumDate={new Date()}
                        />
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}>
                            Date: {date.toLocaleDateString()}
                        </Text>
                        <Button title="Chọn ngày" onPress={() => setIsVisible(true)} />
                    </View>

                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color:COLORS.white
                        }}>HUMIDITY (%)</Text>
                        <LineChart
                            data={{
                                labels: [now-12, now-10, now-8, now-6, now-4, now-2, now],
                                datasets: [
                                {
                                data: dataStory.humidity.map(item => parseFloat(item[1])),},],
                            }}
                            width={Dimensions.get('window').width - 16} // from react-native
                            height={220}
                            xAxisLabel={':00'}
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

                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            color:COLORS.white
                        }}>TEMPERATURE (℃)</Text>
                        <LineChart
                            data={{
                                labels: [now-12, now-10, now-8, now-6, now-4, now-2, now],
                                datasets: [
                                {
                                data: dataStory.temperature.map(item => parseFloat(item[1])),},],
                            }}
                            width={Dimensions.get('window').width - 16} // from react-native
                            height={220}
                            xAxisLabel={':00'}
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