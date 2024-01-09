import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const LoginScreen = () => {
    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Entypo name="spotify" size={80} color="white" style={{ textAlign: 'center' }} />
                <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>Millons of Songs Free on Spotify!</Text>
                <View style={{ height: 80 }} />
                <Pressable style={{
                    backgroundColor: "#1DB954",
                    padding: 10,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: 300,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 10
                }}>
                    <Text>Sign in with Spotify</Text>

                </Pressable>
                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                    <MaterialIcons name="phone-android" size={24} color="white" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Continue with phone number</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                    <AntDesign name="google" size={24} color="red" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Sign in with Google</Text>
                </Pressable>
                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                    <AntDesign name="facebook-square" size={24} color="blue" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Sign in with FaceBook</Text>
                </Pressable>

            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})