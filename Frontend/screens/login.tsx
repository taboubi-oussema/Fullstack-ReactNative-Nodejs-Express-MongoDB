import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { stackScreens } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";




type propsType = NativeStackScreenProps<stackScreens, "login">;

export default function login(props: propsType) {
  return (
    <ScrollView style={{ backgroundColor: "#00224F" }}>
      <View
        style={{
          height: 100,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 18,
            fontWeight: "700",
            fontStyle: "normal",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Login
        </Text>
      </View>

      <View
        style={{
          height: 500,
          justifyContent: "center",
          gap: 20,
          paddingHorizontal:20,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 26,
            fontWeight: "600",
            fontStyle: "normal",
            color: "#FFFFFF",
            textAlign:"center"
          }}
        >
          Hello Welcome Back
        </Text>
        <Text
          style={{
           
            height: 32,
            opacity: 0.4,
            fontFamily: "Roboto",
            fontSize: 14,
            fontWeight: "400",
            fontStyle: "normal",
            textAlign: "center",
            color: "#FFFFFF",
            marginBottom: 40,
          }}
        >
          Welcome back please sign in again
        </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#FFFFFF"}
          style={styles.placeholderStayle}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#FFFFFF"}
          style={styles.placeholderStayle}
        />
        

        <Pressable
          onPress={() => props.navigation.navigate("home")}
          style={{
          
            height: 56,
            borderRadius: 32,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 16,
              fontWeight: "700",
              fontStyle: "normal",
              textAlign: "center",
              color: "#00224F",
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          height: 150,
          backgroundColor: "#00224F",
          justifyContent: "center",

          gap: 15,
          paddingHorizontal:20
        }}
      >
        <Pressable style={styles.buttonStayle} onPress={() => alert("null")}>
          <Text style={styles.buttonTextStayle}>Facebook</Text>
        </Pressable>
        <Pressable style={styles.buttonStayle} onPress={() => alert("null")}>
          <Text style={styles.buttonTextStayle}>Gmail</Text>
        </Pressable>
        <Text
          style={{
            height: 14,
            fontFamily: "Roboto",
            fontSize: 12,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#999999",
            marginBottom: 40,
            textAlign:"center"
          }}
        >
          Already have an account ?
          <Text
            onPress={() => props.navigation.navigate("signin")}
            style={{
              height: 18,
              fontFamily: "Roboto",
              fontSize: 14,
              fontWeight: "700",
              fontStyle: "normal",
              lineHeight: 14,
              color: "#3C7EEE",
            }}
          >
            Sing In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  placeholderStayle: {
    padding: 10,
  
    borderBottomColor: "#12325D",
    borderBottomWidth: 2,
    marginBottom: 14,
    color: "#fff",
  },
  buttonTextStayle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#FFFFFF",
  },
  buttonStayle: {
    height: 48,
    borderRadius: 22,
    backgroundColor: "#11325C",
    justifyContent: "center",
    alignItems: "center",
  },
});
