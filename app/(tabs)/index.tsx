// Importação de bibliotecas e componentes necessários
import { useState } from 'react'

// Importação de componentes do React Native para construção da interface
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

// Componente principal do aplicativo
export default function App() {

  // Estados para armazenar os valores do álcool, gasolina e resultado
  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('')
  const [resultado, setResultado] = useState('')

  // Função para calcular qual combustível é mais vantajoso
  function calcularCombustivel() {

    const valorAlcool = Number(alcool)
    const valorGasolina = Number(gasolina)

    const calculo = valorAlcool / valorGasolina

    if (calculo < 0.7) {
      setResultado('Vale mais a pena usar Álcool')
    } else {
      setResultado('Vale mais a pena usar Gasolina')
    }

  }

  // Renderização da interface do aplicativo
    return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Calculadora de Combustível
      </Text>

      <Text style={styles.label}>
         Insira os preços do Álcool
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        value={alcool}
        //Atualiza o estado do álcool conforme o usuário digita
        onChangeText={setAlcool}
        keyboardType="numeric"
      />

      <Text style={styles.label}>
         Insira os preços do Gasolina
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        value={gasolina}
        //Atualiza o estado da gasolina conforme o usuário digita  
        onChangeText={setGasolina}
        keyboardType="numeric"
      />

      <Button 

        title="Calcular"
        onPress={calcularCombustivel}
      />

      <Text style={styles.resultado}>
        {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     justifyContent:'center',
     padding:20,
     backgroundColor:'#FFFFFF'
  },

 titulo: {
    fontSize: 24,
    fontWeight:'bold',
    marginBottom: 20, 
    textAlign: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8
  },

  label: {
    marginBottom: 10,
    fontSize: 16
  },

  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center'
  }

})
