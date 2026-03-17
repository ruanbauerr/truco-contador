import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Contador from "./Contador";
import { Image } from "react-native";

export default function App() {
  const [contadorNos, setContadorNos] = useState(0);
  const [contadorEles, setContadorEles] = useState(0);

  const [ganhouNos, setGanhouNos] = useState(0);
  const [ganhouEles, setGanhouEles] = useState(0);

  function reiniciar() {
    setContadorNos(0);
    setContadorEles(0);
  }

  function novoJogo() {
    setContadorNos(0);
    setContadorEles(0);
    setGanhouEles(0);
    setContadorNos(0);
  }

  return (
    <View style={styles.container}>
      <Image source={require("./assets/unipar.png")} style={styles.logo} />

      <View style={styles.linha}>
        <Contador
          contador={contadorNos}
          setContador={setContadorNos}
          ganhou={ganhouNos}
          setGanhou={setGanhouNos}
          titulo="NÓS"
        />

        <Contador
          contador={contadorEles}
          setContador={setContadorEles}
          ganhou={ganhouEles}
          setGanhou={setGanhouEles}
          titulo="ELES"
        />
      </View>
      <StatusBar style="auto" />

      <View style={styles.botoesControle}>
        <View style={styles.botao}>
          <Button title="REINICIAR" color="#4b1d3f" onPress={reiniciar} />
        </View>

        <View style={styles.botao}>
          <Button title="NOVO JOGO" color="#2c0d25" onPress={novoJogo} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  linha: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginBottom: 40,
  },

  botoesControle: {
    width: "70%",
    gap: 10,
  },

  botao: {
    borderRadius: 8,
    overflow: "hidden",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
