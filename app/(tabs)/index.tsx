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
    <View>

      <Text>
        Calculadora de Combustível
      </Text>

      <Text style={{ marginBottom: 10 }}>
         Insira os preços do Álcool
      </Text>

      <TextInput
        placeholder="Preço do Álcool"
        value={alcool}
        //Atualiza o estado do álcool conforme o usuário digita
        onChangeText={setAlcool}
        keyboardType="numeric"
      />

      <Text>
         Insira os preços do Gasolina
      </Text>

      <TextInput
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

      <Text>
        {resultado}
      </Text>

    </View>
  );
}
