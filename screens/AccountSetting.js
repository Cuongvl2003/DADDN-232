import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { url } from './url';
import axios from 'axios';
import AuthContext from '../authContext';
// axios.defaults.withCredentials = true;

const AccountSetting = ({ navigation }) => {

    const [password, setPassword] = useState('');   
    const [showPassword, setShowPassword] = useState(true); 
    const { token } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSave = async () => {
        await axios.put(`${url}/api/users/update`, {
            fullName,
            email,
            phoneNumber,
            password,
        }, config);
        setPassword('');
        navigation.navigate('Home');
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${url}/api/users/info`, config);
            setFullName(res.data.fullName);
            setEmail(res.data.email);
            setPhoneNumber(res.data.phoneNumber);
        }
        fetchUser();
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
                            // onPress={handleBack}
                            onPressIn={() => navigation.openDrawer()}
                        >
                            <SimpleLineIcons name="menu" size={30} color="white" 
                                style={{
                                    marginTop: 10,
                                    marginLeft:-80,
                                }}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:20,
                            marginTop:15,
                        color:"white"}}> Account Setting</Text>
            </View>
            
            <ScrollView>
            <View style={styles.inputsContainer}>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        alignItems: "center",
                        justifyContent: "center",
                        color: COLORS.darkgrey,
                        marginTop:20
                    }}>Full Name</Text>

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
                            defaultValue={fullName}
                            onChangeText={value => setFullName(value)}
                            keyboardType='ascii-capable'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color:COLORS.darkgrey,
                        marginVertical: 8
                    }}>Email</Text>

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
                            keyboardType='email-address'
                            defaultValue={email}
                            onChangeText={value => setEmail(value)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color:COLORS.darkgrey,
                        marginVertical: 8
                    }}>Phone Number</Text>

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
                            keyboardType='name-phone-pad'
                            defaultValue={phoneNumber}
                            onChangeText={value => setPhoneNumber(value)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
                
                <View >
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color:COLORS.darkgrey,
                        marginVertical: 8
                    }}>Password</Text>
                <View style={styles.container}> 
                
                <TextInput 
  
                    // Set secureTextEntry prop to hide  
                    //password when showPassword is false 
                    secureTextEntry={!showPassword} 
                    value={password} 
                    onChangeText={val => setPassword(val)}
                    style={styles.input} 
                    placeholder="Enter Password"
                    placeholderTextColor="#aaa"
                /> 
                <MaterialCommunityIcons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    onPress={toggleShowPassword} 
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
                        onPress={handleSave}
                    >
                        <Text style={styles.buttonText1}>SAVE</Text>
                    </TouchableOpacity>
                </LinearGradient>            
            </View>
            </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}
export default AccountSetting

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
    container: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: COLORS.white, 
        width: "100%",
        height: 48,
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: 8, 
        paddingHorizontal: 14, 
        marginBottom:12
    },
    icon: { 
        marginLeft: 10, 
    },
    input: { 
        flex: 1, 
        color: '#333', 
        paddingVertical: 10, 
        paddingRight: 10, 
        fontSize: 16, 
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
        marginBottom:30,
        marginTop:20
    }
});
