import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function App() {

  const[contador, setContador] = useState(0);

  function diminuirContagem(){
    if (contador > 0){
    setContador(contador - 1);
    }
    
  }

return (
    <View style={styles.container}>
      <Text>Contador de valores: </Text>
      
      
      <Text>{contador}</Text>
      
      <View style = {{flexDirection:'row', marginTop: 10, marginHorizontal: 30}}>
      <Button 
        title='Aumentar' onPress={() => setContador(contador + 1)} 
      />
      <Button 
        title='Diminuir' onPress={diminuirContagem} 
      />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
