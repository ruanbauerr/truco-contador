import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Contador from "./Contador";

export default function App() {
  const [contadorNos, setContadorNos] = useState(0);
  const [contadorEles, setContadorEles] = useState(0);

  const [ganhouNos, setGanhouNos] = useState(0);
  const [ganhouEles, setGanhouEles] = useState(0);
  
  function reiniciar(){
    setContadorNos(0);
    setContadorEles(0);
  }

  function novoJogo(){
     setContadorNos(0);
    setContadorEles(0);
    setGanhouEles(0);
    setContadorNos(0);
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 40 }}>
        <View style={{ flexDirection: "row", gap: 40 }}>
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
      </View>

      <View>
        <Button title="REINICIAR" color="#663e6d" onPress={reiniciar} />
         <Button title="NOVO JOGO" color="#663e6d" onPress={novoJogo} />
      </View>

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
