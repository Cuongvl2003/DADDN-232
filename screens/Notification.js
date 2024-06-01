import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { SelectList } from 'react-native-dropdown-select-list'
import AuthContext from '../authContext';
import { url } from './url';
import axios from 'axios';
// import { ScrollView } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native';
// axios.defaults.withCredentials = true;
const Notification = ({ navigation }) => {

    const [selected, setSelected] = React.useState("");
  
    const [data, setData] = useState([]);
    const { token } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/api/logs`, config);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

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
                            onPressIn={()=>navigation.navigate("Home")}>
                            <Ionicons name="caret-back" size={40} color="white" 
                                style={{
                                    marginTop: 10,
                                    marginLeft:-80,
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:30,
                            marginTop:15,
                        color:"white"}}> Notification </Text>
                </View>
            <ScrollView>
            <View style={styles.inputsContainer}>
                {data.map((notification, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        
                                        style={{
                                            backgroundColor: COLORS.white,

                                            height: 120,
                                            borderRadius: 20,
                                            marginHorizontal: 1,
                                            marginBottom:0,
                                            marginLeft: 0,  // Adjusting margin for the first item
                                            marginRight: 0,  // Adjusting margin for the first item
                                        }}>
                                    <Text style={{
                                        
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        marginTop: 5,
                                    }}>
                                        Date {notification.date}
                                    </Text>
                                    <Text style={{
                                        
                                        fontWeight: 400,
                                        fontSize: 15,
                                        marginTop: 5,
                                    }}>
                                        Message: {notification.message}{"\n"}
                                        Value: {notification.value}
                                    </Text>
                                    
                                    </TouchableOpacity>
      ))}           

            </View>
            </ScrollView>
            
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Notification

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
