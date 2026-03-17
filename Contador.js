import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Contador({ titulo }) {
  const [contador, setContador] = useState(0);
  const [ganhou, setGanhou] = useState(0);

  function verificarVitoria(pontos) {
  if (contador + pontos >= 12) {
    setGanhou(ganhou + 1);
    setContador(0);
  } else {
    setContador(contador + pontos);
  }
}

 function aumentarContagem() {
  verificarVitoria(1);
}

function diminuirContagem() {
  if (contador > 0) {
    setContador(contador - 1);
  }
}

function truco() {
  verificarVitoria(3);
}

function seis() {
  verificarVitoria(6);
}

function nove() {
  verificarVitoria(9);
}

function doze() {
  verificarVitoria(12);
}

  
  return (
    <View style={{ alignItems: "center" }}>
      <Text id="titulo" style={{ fontSize: 18 }}>
        {titulo}
      </Text>

      <Text style={{ fontSize: 70 }}>{contador}</Text>
      <Text>Ganhou {ganhou}</Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: 70, marginRight: 10 }}>
          <Button title="+" color="#41e405" onPress={aumentarContagem} />
        </View>

        <View style={{ width: 70 }}>
          <Button title="-" color="#cb0404" onPress={diminuirContagem} />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginRight: 10 }}>
        <Button title="TRUCO" color="#3ee4be" onPress={truco} />
      </View>

      <View style={{ flexDirection: "row", marginRight: 10 }}>
        <Button title="SEIIIIS" color="#3e86e4" onPress={seis} />
      </View>

      <View style={{ flexDirection: "row", marginRight: 10 }}>
        <Button title="NOVEEEE" color="#c8e43e" onPress={nove} />
      </View>

      <View style={{ flexDirection: "row", marginRight: 10 }}>
        <Button title="DOZEEE" color="#c829e4" onPress={doze} />
      </View>
    </View>
  );
}
