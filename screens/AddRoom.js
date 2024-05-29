import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import axios from 'axios';
import { url } from './url';
import AuthContext from '../authContext';

const AddRoom = ({ navigation }) => {

    const [room, setRoom] = useState('');
    const { token } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const handleRoom = async (e) =>
        {
            if (!room) {
                Alert.alert('Alert', 'Missing Room name', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
            }
            else
            {   
                const newRoom = await axios.post(`${url}/api/rooms`, {name: room}, config);
                Alert.alert(' ', 'Adding room successfully', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
                setRoom('');
                navigation.navigate('Home', {
                    hasNewRoom: newRoom.data,
                });
            }
        }

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
                    }}>
                        <TouchableOpacity 
                            onPressIn={()=>navigation.openDrawer()}>
                            <SimpleLineIcons name="menu" size={30} color="white" 
                                style={{
                                    marginTop: 10,
                                    marginLeft:-80,
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:20,
                            marginTop:15,
                        color:"white"}}> Add New Room</Text>
                </View>
            
            <View style={styles.inputsContainer}>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        alignItems: "center",
                        justifyContent: "center",
                        color: COLORS.darkgrey,
                        marginTop:20
                    }}>Room name</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.grey,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholderTextColor={COLORS.black}
                            keyboardType='ascii-capable'
                            style={{
                                width: "100%"
                            }}
                            value={room}
                            onChangeText={NewRoom=>setRoom(NewRoom)}
                        />
                    </View>
                </View>

                
                    <LinearGradient
                        colors={["#00c6fb", "#3381ff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}
                    >
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={handleRoom}
                        >
                            <Text style={styles.buttonText1}>Add room</Text>
                        </TouchableOpacity>
                    </LinearGradient>             

            </View>
            
            </SafeAreaView>
        </LinearGradient>
    )
}
export default AddRoom

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
        height: 'auto',
        width: '88%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 10,
        paddingHorizontal: 20,
    },
    button1: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText1:{
        fontSize:20,
        color: COLORS.white,
    },
    gradient:{
        borderRadius:18,
        marginBottom:30
    }
});
