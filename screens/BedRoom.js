import { View, Text, Image, Pressable, ScrollView, Dimensions, Switch, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, SimpleLineIcons, Ionicons} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const BedRoom = ({ navigation }) => {
    const [isLightOn1, setIsLightOn1] = useState(false);
    const [isLightOn2, setIsLightOn2] = useState(false);

    const [speed, setSpeed] = useState(0);

    const handleSwitchChange1 = (value) => {
        setIsLightOn1(value);
    };
    const handleSwitchChange2 = (value) => {
        setIsLightOn2(value);
    };

    const increase = () => {
        if (speed < 100){
            const newSpeed = speed + 1;
            setSpeed(newSpeed);
        }
    };
    
    const decrease = () => {
        if (speed > 0){
            const newSpeed = speed - 1;
            setSpeed(newSpeed);
        }
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
                    }}>
                        <Pressable 
                            onPress={()=>navigation.navigate("Home")}>
                            <Ionicons name="caret-back" size={30} color="white" 
                                style={{
                                    marginTop: 10,
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
                        <View style={{
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                fontSize: 40,
                                fontWeight: 'bold',
                                color: COLORS.black,
                            }}>
                                BedRoom
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 20,
                            marginBottom: 30,
                        }}>
                            <View style={{
                                position: 'relative',
                                width: '40%',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 30,
                                }}>
                                    148 KwH
                                </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                }}>
                                    ELECTRICITY
                                    
                                </Text>
                            </View>
                            <View style={{
                                position: 'relative',
                                width: '30%',
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
                                width: '30%',
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
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <View style={{
                        alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 24,
                                marginBottom: 20,
                                fontWeight: 'bold'
                            }}>
                                1st Light
                            </Text>
                            <Switch
                                value={isLightOn1}
                                onValueChange={handleSwitchChange1}
                                trackColor={{ true: '#66cc00', false: '#cccccc' }}
                                thumbColor={isLightOn1 ? '#f2f2f2' : '#333333'}
                            />
                            <Text style={{
                                fontSize: 24,
                                marginBottom: 20,
                            }}>
                                {isLightOn1 ? 'Light is on' : 'Light is off'}
                            </Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 24,
                                marginBottom: 20,
                                fontWeight: 'bold'
                            }}>
                                2nd Light
                            </Text>
                            <Switch
                                value={isLightOn2}
                                onValueChange={handleSwitchChange2}
                                trackColor={{ true: '#66cc00', false: '#cccccc' }}
                                thumbColor={isLightOn2 ? '#f2f2f2' : '#333333'}
                            />
                            <Text style={{
                                fontSize: 24,
                                marginBottom: 20,
                            }}>
                                {isLightOn2 ? 'Light is on' : 'Light is off'}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                                alignItems: 'center',
                            }}>
                        <Text style={{ 
                            fontSize: 24,
                            padding: 10,
                            borderRadius: 10,
                            fontWeight: 'bold',
                            marginBottom: 15,
                            }}>
                            Speed: {speed}
                        </Text>
                        <Slider
                            style = {{ width: 300, height: 20}}
                            value={speed}
                            onValueChange={(value) => setSpeed(value)}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            minimumTrackTintColor="#FFD700"
                            maximumTrackTintColor="#DC143C"
                            thumbTintColor="#F0F8FF"
                        />
                    </View>
                    <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 50,
                            }}>
                        <Button title="-" onPress={decrease} />
                        <Button title="+" onPress={increase} />
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default BedRoom
