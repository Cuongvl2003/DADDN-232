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


const Sensor = ({ navigation }) => {

    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1',value:'Living Room'},
        {key:'2',value:'Bedroom'},
        {key:'3',value:'Kitchen'},
        {key:'4',value:'Bathroom'},
    ];

    const data1 = [
        {key:'1',value:'Fan'},
        {key:'2',value:'Light'},
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
                            onPress={()=>navigation.openDrawer()}>
                            <SimpleLineIcons name="menu" size={30} color="white" 
                                style={{
                                    marginTop: 10,
                                    marginLeft:-80,
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:20,
                            marginTop:15,
                        color:"white"}}> Sensor Adjusting</Text>
                </View>
            
            <View style={styles.inputsContainer}>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: 'black',
                        marginVertical: 8,
                        marginTop:20,
                        marginBottom:20,
                        fontWeight: 'bold'
                    }}>TEMPERATURE SENSOR</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: 'black',
                        marginVertical: 8
                    }}>Lower Threshold: </Text>
                    <View style={{
                        width: "50%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        marginBottom:10
                    }}>
                        
                        <TextInput
                            placeholder='50'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "100%"
                            }}
                            defaultValue={50}
                            //onChangeText={NewuName=>setuName(NewuName)}
                            
                        />
                    </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: 'black',
                        marginVertical: 8
                    }}>Upper Threshold: </Text>
                    <View style={{
                        width: "50%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        marginBottom:10
                    }}>
                        
                        <TextInput
                            placeholder='50'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "100%"
                            }}
                            defaultValue={50}
                            //onChangeText={NewuName=>setuName(NewuName)}
                            
                        />
                    </View>
                    </View>
                </View>


                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: 'black',
                        marginVertical: 8,
                        marginTop:20,
                        marginBottom:20,
                        fontWeight: 'bold'
                    }}>HUMIDITY SENSOR</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: 'black',
                        marginVertical: 8
                    }}>Lower Threshold: </Text>
                    <View style={{
                        width: "50%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        marginBottom:10
                    }}>
                        
                        <TextInput
                            placeholder='50'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "100%"
                            }}
                            defaultValue={50}
                            //onChangeText={NewuName=>setuName(NewuName)}
                            
                        />
                    </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: 'black',
                        marginVertical: 8
                    }}>Upper Threshold: </Text>
                    <View style={{
                        width: "50%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        marginBottom:10
                    }}>
                        
                        <TextInput
                            placeholder='50'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "100%"
                            }}
                            defaultValue={50}
                            //onChangeText={NewuName=>setuName(NewuName)}
                            
                        />
                    </View>
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
                        >
                            <Text style={styles.buttonText1}>SAVE</Text>
                        </TouchableOpacity>
                    </LinearGradient>             

            </View>
            
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Sensor

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
