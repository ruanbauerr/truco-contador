import { useState } from "react";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Contador({
  contador,
  titulo,
  setContador,
  ganhou,
  setGanhou,
}) {
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
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.contador}>{contador}</Text>

      <Text style={styles.ganhou}>Ganhou {ganhou}</Text>

      <View style={styles.linhaBotoes}>
        <View style={styles.botaoPequeno}>
          <Button title="+" color="#2ecc71" onPress={aumentarContagem} />
        </View>

        <View style={styles.botaoPequeno}>
          <Button title="-" color="#e74c3c" onPress={diminuirContagem} />
        </View>
      </View>

      <View style={styles.botaoGrande}>
        <Button title="TRUCO" color="#1abc9c" onPress={truco} />
      </View>

      <View style={styles.botaoGrande}>
        <Button title="SEIS" color="#3498db" onPress={seis} />
      </View>

      <View style={styles.botaoGrande}>
        <Button title="NOVE" color="#9b59b6" onPress={nove} />
      </View>

      <View style={styles.botaoGrande}>
        <Button title="DOZE" color="#c0392b" onPress={doze} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 140,
  },

  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  contador: {
    fontSize: 60,
    fontWeight: "bold",
    marginVertical: 5,
  },

  ganhou: {
    fontSize: 14,
    marginBottom: 10,
  },

  linhaBotoes: {
    flexDirection: "row",
    marginBottom: 10,
  },

  botaoPequeno: {
    width: 55,
    marginHorizontal: 5,
  },

  botaoGrande: {
    width: 120,
    marginVertical: 3,
  },
});
