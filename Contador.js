import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Contador({ titulo }) {
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
  function truco() {
    if (contador <= 9) {
      setContador(contador + 3);
    }
  }
  function seis() {
    if (contador <= 6) {
      setContador(contador + 6);
    }
  }
   function nove() {
    if (contador <= 3) {
      setContador(contador + 9);
    }
  }

  function doze() {
    if (contador < 1) {
      setContador(contador + 12);
    }
  }
  return (
    <View style={{ alignItems: "center" }}>
      <Text id="titulo" style={{ fontSize: 18 }}>
        {titulo}
      </Text>

      <Text style={{ fontSize: 70 }}>{contador}</Text>

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
