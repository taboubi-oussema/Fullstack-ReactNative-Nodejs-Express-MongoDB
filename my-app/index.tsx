
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import axios from "axios";
export default function App() {
  const [test, setTest] = useState<any>(14);
  function send() {
    console.log(test)
    axios
      .get("http://192.168.255.186:4444/ouse", test)
      .then((res) => console.log("jawww"))
      .catch((e) => console.log(e));
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.box} onChangeText={(t) => setTest(t)} />
      <Button title="ffffff" onPress={()=>send()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 120,
    padding: 15,
    backgroundColor: "pink",
  },
});
