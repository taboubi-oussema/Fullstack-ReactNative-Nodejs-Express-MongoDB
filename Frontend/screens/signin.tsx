import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { stackScreens } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import axios from "axios";

type propsType = NativeStackScreenProps<stackScreens, "signin">;

export default function login(props: propsType) {
  const [email, setemain] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(false);

  function send() {
    const data = {
      email: email,
      mobile: Phone,
      password: Password,
    };
    axios
      .post('http://192.168.1.108:5001/signin', data)
      .then((res: any) => console.log(res.data))
      .catch((e) => console.log(e));
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={true}
      style={{ backgroundColor: "#00224F" }}
    >
      <StatusBar />
      <View
        style={{ justifyContent: "center", alignItems: "center", height: 200 }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 24,
            fontWeight: "700",
            fontStyle: "normal",
            color: "#FFFFFF",
          }}
        >
          Welcome Back
        </Text>
        <Text style={[styles.textStayle, { fontSize: 18 }]}>
          Login to access your account
        </Text>
      </View>
      <View style={{ paddingHorizontal: 18, gap: 15 }}>
        <Text style={styles.textStayle}>Email Address</Text>
        <TextInput
          style={styles.inputStyle}
          keyboardType="email-address"
          onChangeText={(text) => setemain(text)}
        />
        <Text style={styles.textStayle}>Phone Number</Text>
        <TextInput
          style={styles.inputStyle}
          keyboardType="decimal-pad"
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.textStayle}>Password</Text>
        <View
          style={[
            styles.inputStyle,
            { flexDirection: "row", alignItems: "center" },
          ]}
        >
          <TextInput
            style={{ flex: 1 }}
            secureTextEntry={!showpass}
            onChangeText={(text) => setPhone(text)}
          />
          <TouchableOpacity onPress={() => setShowpass(!showpass)}>
            {showpass ? (
              <Feather name="eye-off" size={24} color="grey" />
            ) : (
              <Feather name="eye" size={24} color="grey" />
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 12,
            fontWeight: "500",
            fontStyle: "normal",
            textAlign: "right",
            color: "#F34B1B",
          }}
        >
          Forgot Password?
        </Text>
        <Pressable
          onPress={() => send()}
          style={{
            height: 56,
            borderRadius: 6,
            backgroundColor: "#283FB1",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: "700",
              fontStyle: "normal",
              color: "#FFFFFF",
            }}
          >
            Login
          </Text>
        </Pressable>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(242, 242, 242, 1.0)",
            }}
          ></View>
          <Text style={[styles.textStayle, { paddingHorizontal: 12 }]}>
            Or Sign In With
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(242, 242, 242, 1.0)",
            }}
          ></View>
        </View>
        <Pressable
          style={[
            styles.inputStyle,
            {
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: 14,
              color: "#222222",
            }}
          >
            Google
          </Text>
        </Pressable>
        <Text style={[styles.textStayle, { textAlign: "center", margin: 15 }]}>
          Don’t have an account?
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 12,
              fontWeight: "700",
              fontStyle: "normal",
              color: "#283FB1",
            }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textStayle: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#888888",
    paddingLeft: 15,
  },
  inputStyle: {
    height: 56,
    borderRadius: 30,
    backgroundColor: "#999999",
    fontSize: 20,
    color: "#222222",
    fontWeight: "400",
    fontFamily: "Poppins",
    paddingHorizontal: 15,
  },
});
