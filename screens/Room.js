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



const Room = ({ navigation }) => {

    const [value, setValue] = useState(0);
    const [totalTaps, setTotalTaps] = useState(0);
    const [speed, setSpeed] = useState(0);

    const incrementValue = () => {
        setValue(value + 1);
        setTotalTaps(totalTaps + 1);
    }

    const decrementValue = () => {
        setValue(value - 1);
        setTotalTaps(totalTaps - 1);
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
    let RoomName='living room';

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
                        color:"white"}}> {RoomName}</Text>
                </View>

                <View>
                        
                    </View>
                    
                    <ScrollView>
                    <Text>   </Text>

                    <View style={styles.container2}>
                    <Text style={{color:'white',fontSize:20, marginLeft:30}}>Light List:</Text>
                    <Text> </Text>
                    <ScrollView>
                        <View style={styles.container1}> 
                            <MaterialCommunityIcons name="lightbulb-on" size={24} color="#005ce6" />
                            <Text style={{color:'black',fontSize:20}}>light1</Text>
                            <Switch
                                trackColor={{false: '#c0bfc0', true: '#c0bfc0'}}
                                thumbColor={isEnabled ? '#005ce6' : '#99989a'}
                                ios_backgroundColor='#4dff88'
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("DeviceSetting")}>
                                <Ionicons name="settings-outline" size={30} color="black" />
                            </TouchableOpacity>
                            
                        </View>
                        <Text> </Text>
                        <View style={styles.container1}> 
                            <MaterialCommunityIcons name="lightbulb-on" size={24} color="#005ce6" />
                            <Text style={{color:'black',fontSize:20}}>light2</Text>
                            <Switch
                                trackColor={{false: '#c0bfc0', true: '#c0bfc0'}}
                                thumbColor={isEnabled ? '#005ce6' : '#99989a'}
                                ios_backgroundColor='#4dff88'
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("DeviceSetting")}>
                                <Ionicons name="settings-outline" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <Text> </Text>
                        
                    </ScrollView>
                    </View>

                    <View style={styles.container2}>
                    <Text style={{color:'white',fontSize:20, marginLeft:50}}>Fan List:</Text>
                    <Text> </Text>
                    <ScrollView>
                        <View style={styles.container4}>
                            <View style={styles.container3}> 
                                <MaterialCommunityIcons name="fan" size={24} color="#005ce6" />
                                <Text style={{color:'black',fontSize:20}}>fan1</Text>
                            
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate("DeviceSetting")}>
                                    <Ionicons name="settings-outline" size={30} color="black" />
                                </TouchableOpacity>
                            
                            </View>
                            <Text style={{ 
                                fontSize: 20,
                                padding: 5,
                                borderRadius: 10,
                                fontWeight: 10,
                                marginBottom: 15,
                                }}>Speed: {speed}</Text>
                            <Slider
                                style = {{ width: 300, height: 20, transform: [{ scaleY: 2 }]}}
                                value={speed}
                                onValueChange={(value) => setSpeed(value)}
                                minimumValue={0}
                                maximumValue={100}
                                step={1}
                                minimumTrackTintColor="#005ce6"
                                maximumTrackTintColor="#CCCCCC"
                                thumbTintColor="#CCCCCC"
                            />
                            <Text> </Text>
                        </View>


                        <Text> </Text>
                        <View style={styles.container4}>
                            <View style={styles.container3}> 
                                <MaterialCommunityIcons name="fan" size={24} color="#005ce6" />
                                <Text style={{color:'black',fontSize:20}}>fan2</Text>
                            
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate("DeviceSetting")}>
                                    <Ionicons name="settings-outline" size={30} color="black" />
                                </TouchableOpacity>
                            
                            </View>
                            <Text style={{ 
                                fontSize: 20,
                                padding: 5,
                                borderRadius: 10,
                                fontWeight: 10,
                                marginBottom: 15,
                                }}>Speed: {speed}</Text>
                            <Slider
                                style = {{ width: 300, height: 20, transform: [{ scaleY: 2 }]}}
                                value={speed}
                                onValueChange={(value) => setSpeed(value)}
                                minimumValue={0}
                                maximumValue={100}
                                step={1}
                                minimumTrackTintColor="#005ce6"
                                maximumTrackTintColor="#CCCCCC"
                                thumbTintColor="#CCCCCC"
                            />
                            <Text> </Text>
                        </View>
                        <Text> </Text>
                        
                        
                    </ScrollView>
                    </View>
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
        width:310,
        marginLeft:30,
        marginRight:30,
    },
    container4:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'white',
        borderColor: 'white',
        borderRadius:10,
        borderWidth:2,
        marginLeft:30,
        marginRight:30
    },
});
