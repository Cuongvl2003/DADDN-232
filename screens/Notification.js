import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { SelectList } from 'react-native-dropdown-select-list'


const Notification = ({ navigation }) => {

    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1',value:'Living sfsdfdsfdsfRoom'},
        {key:'2',value:'Bedrosdfsdfdsfsdfdsfom'},
        {key:'3',value:'Bác bên mảng web hay bên core vậy, bên core thì thường lương còn cao hơn nữa '},
        {key:'4',value:'Bathroosfddsfdsfm'},
    ];

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
                        color:"white"}}> Add New Device</Text>
                </View>
            
            <View style={styles.inputsContainer}>
                {data.map((room, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        
                                        style={{
                                            backgroundColor: COLORS.white,

                                            height: 100,
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
                                        Notification {room.key}
                                    </Text>
                                    <Text style={{
                                        
                                        fontWeight: 400,
                                        fontSize: 15,
                                        marginTop: 5,
                                    }}>
                                        {room.value}
                                    </Text>
                                    
                                    </TouchableOpacity>
      ))}           

            </View>
            
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
