import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Button } from 'react-native';

import LoginCustOptionIDHeader from './LoginCustOptionIDHeader'
import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
    "982354063714-jk7fmoaofa2uh7lfakt0fjcfjpc7kavg.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
    "982354063714-6cup93se5ksuram62mel8osgbc4q09vb.apps.googleusercontent.com";


class LoginCust1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signedIn: false,
            name: "",
            photoUrl: ""
        }
    }
    signIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                iosClientId: IOS_CLIENT_ID,
                scopes: ["profile", "email"]
            })

            if (result.type === "success") {
                this.setState({
                    signedIn: true,
                    name: result.user.name,
                    photoUrl: result.user.photoUrl
                })
            } else {
                console.log("cancelled")
            }
        } catch (e) {
            console.log("error", e)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <LoginCustOptionIDHeader></LoginCustOptionIDHeader>
                <TouchableOpacity style={styles.login_button}>
                    <Image style={styles.img__} source={require('../../assets/login/Foodid_btn.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button}>
                    <Image style={styles.img__} source={require('../../assets/login/OAuth_btn.png')}></Image>
                </TouchableOpacity>
                {this.state.signedIn ? (
                    <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
                ) : (
                        <LoginPage signIn={this.signIn} />
                    )}


                <TouchableOpacity style={styles.create_new_btn}>
                    <Text style={styles.register_txt}>สร้างบัญชีใหม่</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const LoginPage = props => {
    return (
        <View>
            <TouchableOpacity style={styles.login_button} onPress={() => props.signIn()}>
                <Image style={styles.img__} source={require('../../assets/login/gmail_btn.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

const LoggedInPage = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome:{props.name}</Text>
            <Image style={styles.image} source={{ uri: props.photoUrl }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        fontSize: 25
    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    }
})
export default LoginCust1;
