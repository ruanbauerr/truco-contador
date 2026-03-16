import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Contador from "./Contador";

export default function App() {

  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);

  return (
    <View style={styles.container}>

      <View style={{flexDirection:"row", gap:40}}>

        <View style={{ flexDirection: "row", gap: 40 }}>

        <Contador titulo="NÓS" />

        <Contador titulo="ELES" />

      </View>

      <StatusBar style="auto" />

    </View>
  );

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
});