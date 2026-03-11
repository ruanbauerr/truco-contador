import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  function aumentarContagem() {
    if (contador <= 11) {
      setContador(contador + 1);
    }
  }

  function diminuirContagem() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Marcador</Text>

      <Text style={{ fontSize: 70 }}>{contador}</Text>

      <View
        style={{ flexDirection: "row", marginTop: 10, marginHorizontal: 30 }}
      >
        <View style={{ width: 70, marginRight: 10 }}>
          <Button title="+" color="#41e405" onPress={aumentarContagem} />
        </View>
        <View style= {{width: 70, marginRight:10}}>
          <Button title="-" color="#f50e0e" onPress={diminuirContagem} />
        </View>
      </View>

      <StatusBar style="auto" />
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
