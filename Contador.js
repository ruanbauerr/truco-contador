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

  return (
    <View style={{ alignItems: "center" }}>

      <Text style={{ fontSize: 18 }}>{titulo}</Text>

      <Text style={{ fontSize: 70 }}>{contador}</Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>

        <View style={{ width: 70, marginRight: 10 }}>
          <Button title="+" color="green" onPress={aumentarContagem} />
        </View>

        <View style={{ width: 70 }}>
          <Button title="-" color="red" onPress={diminuirContagem} />
        </View>

      </View>

    </View>
  );
}