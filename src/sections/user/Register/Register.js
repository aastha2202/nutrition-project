import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Logo from '../../assets/icons/Frame.svg';
import axios from 'axios'

const Register = ({ navigation }) => {

    const [response, setResponse] = useState()
    const [formValue, setFormValue] = useState({
        "user_name": "",
        "password": "",
        "role": "",
        "gender": "male",
        "mobile_number": "",
        "email_id": "",
        "address": "",
        "profile_image": ""
    })

    const registerUser = () => {
        axios.post(`http://44.212.136.151:8081/api/registerUser`, formValue)
            .then(function (response) {
                console.log(response?.data, "responseeeeeee")
                navigation.navigate('Login')
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (

        <SafeAreaView style={styles.container}>

            <View>

                <View style={styles.logovw}>
                    <Logo style={styles.logop} />
                </View>

                <View flexDirection={'column'}>

                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#8E9AA7"
                        placeholder="User name"
                        keyboardType="default"
                        onChangeText={(e) => { setFormValue({ ...formValue, user_name: e }) }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#8E9AA7"
                        placeholder="password"
                        keyboardType="default"
                        onChangeText={(e) => { setFormValue({ ...formValue, password: e }) }}
                    />

                    <View flexDirection="row" justifyContent="space-around" top={-40}>
                        <View flexDirection="row" alignItems="center">
                            <TouchableOpacity onPress={() => {
                                setFormValue({ ...formValue, gender: 'male' })
                            }}>
                                <View style={[{
                                    height: 24,
                                    width: 24,
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: '#000',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }]}>
                                    {
                                        formValue.gender == 'male' ?
                                            <View style={{
                                                height: 12,
                                                width: 12,
                                                borderRadius: 6,
                                                backgroundColor: '#000',
                                            }} />
                                            : null
                                    }
                                </View>

                            </TouchableOpacity>
                            <Text style={styles.ratetxt}>Male</Text>
                        </View>

                        <View flexDirection="row" alignItems="center">
                            <TouchableOpacity onPress={() => { setFormValue({ ...formValue, gender: 'female' }) }}>
                                <View style={[{
                                    height: 24,
                                    width: 24,
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: '#000',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }]}>
                                    {
                                        formValue.gender == 'female' ?
                                            <View style={{
                                                height: 12,
                                                width: 12,
                                                borderRadius: 6,
                                                backgroundColor: '#000',
                                            }} />
                                            : null
                                    }
                                </View>

                            </TouchableOpacity>
                            <Text style={styles.ratetxt}>Female</Text>
                        </View>
                    </View>



                    <View>

                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#8E9AA7"
                            placeholder="Mobile number"
                            keyboardType="default"
                            onChangeText={(e) => { setFormValue({ ...formValue, mobile_number: e }) }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#8E9AA7"
                            placeholder="Email ID"
                            keyboardType="default"
                            onChangeText={(e) => { setFormValue({ ...formValue, email_id: e }) }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#8E9AA7"
                            placeholder="Address"
                            keyboardType="default"
                            onChangeText={(e) => { setFormValue({ ...formValue, address: e }) }}
                        />

                    </View>


                </View>

                <TouchableOpacity style={styles.buttonvw} onPress={registerUser}>
                    <Text allowFontScaling={false} style={styles.textApple}>
                        Register
                    </Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    logovw: {
        alignItems: 'center',
        marginBottom: 40
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        top: '-16%',
        color: '#112866',
        borderColor: "#C8CEDD",
        fontFamily: "Inter-Regular",
        fontSize: 14,
        backgroundColor: '#fff'
    },
    buttonvw: {
        width: 328,
        height: 44,
        top: 75,
        backgroundColor: "#702963",
        borderRadius: 12,
        alignSelf: "center",
        borderWidth: 2.6,
        borderColor: "#F6F8FB",
    },
    textApple: {
        fontFamily: "Inter-Regular",
        fontWeight: "600",
        fontSize: 14,
        top: 11,
        color: "#fff",
        justifyContent: "center",
        textAlign: "center",
    },
    ratetxt: {
        fontFamily: "Inter-SemiBold",
        // fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 14,
        marginLeft: 10,
        color: 'black',
    },
});

export default Register;