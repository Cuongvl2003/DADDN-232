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
import Slider from '@react-native-community/slider';



const Room = ({ route, navigation }) => {

    const { name } = route.params;

    const [value, setValue] = useState(0);
    const [totalTaps, setTotalTaps] = useState(0);
    const [speed, setSpeed] = useState();

    const incrementValue = () => {
        setValue(value + 1);
        setTotalTaps(totalTaps + 1);
    }

    const decrementValue = () => {
        setValue(value - 1);
        setTotalTaps(totalTaps - 1);
    }
    

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
    const room3 = [
        { name: 'Fan1', Stat: true},
        { name: 'Fan2', Stat: false},
        { name: 'light1', Stat: true},
        { name: 'light2', Stat: false},
        { name: 'light3', Stat: false},
      ];
    const [rooms, setRooms]=useState(room3);
    const toggleRoomStat = (index) => {
        setRooms((prevRooms) =>
          prevRooms.map((room, idx) =>
            idx === index ? { ...room, Stat: !room.Stat } : room
          )
        );
      };

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
                        color:"white"}}> {name}</Text>
                </View>

                <View>
                        
                    </View>
                    
                    <ScrollView>
                    <Text>   </Text>


                            <ScrollView
                            >
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                marginVertical: 5,
                            }}>

                                {rooms.map((room, index) => (
                                    <View
                                        key={index}
                                        
                                        style={{
                                            backgroundColor: COLORS.white,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width: 150,
                                            height: 100,
                                            borderRadius: 10,
                                            marginHorizontal: 1,
                                            marginBottom:40,
                                            marginLeft: 20,  // Adjusting margin for the first item
                                            marginRight: 20,  // Adjusting margin for the first item
                                        }}>
                                            <Text style={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                            marginTop: 5,
                                            }}>{room.name}</Text>
                                            <View style={styles.container3}>
                                                <Text style={{
                                                    textAlign: 'center',
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                
                                                }}>{room.Stat ? 'ON:  ': 'OFF:  '}</Text>

                                                <Switch
                                                    trackColor={{false: '#c0bfc0', true: '#c0bfc0'}}
                                                    thumbColor={room.Stat ? '#005ce6' : '#99989a'}
                                                    ios_backgroundColor='#4dff88'
                                                    value={room.Stat}
                                                    onValueChange={() => toggleRoomStat(index)}
                                                />
                                            </View>
                                    
                                    </View>
                                ))}
                            </View>
                        </ScrollView>

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
    container3:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'white',
        borderColor: 'white',
        borderRadius:10,
        borderWidth:10,
        width:100,
        marginLeft:30,
        marginRight:30,
    },
});
