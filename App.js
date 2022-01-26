import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [luku1, setLuku1] =useState();
  const [luku2, setLuku2] =useState();
  const [tulos,setTulos] =useState();
  const [data, setData] = useState([]);

  const plussaa = () => {
    setTulos(parseInt(luku1)+parseInt(luku2));
    // console.warn(tulos);
    const summa=parseInt(luku1)+parseInt(luku2);
    const avain=luku1+ " + " + luku2 + " = " + summa;
    setData([...data, { key: avain }]);
  }

  const miinusta = () => {
    setTulos(parseInt(luku1)-parseInt(luku2));
    // console.warn(tulos);
    const vahennys=parseInt(luku1)-parseInt(luku2);
    const avain=luku1+ " - " + luku2 + " = " + vahennys;
    setData([...data, { key: avain }]);
  }

  return (
    <View style={styles.container} >
      <Text>Result: {tulos}</Text>
      <TextInput style={styles.inputit} onChangeText={text => setLuku1(text)} 
        value={luku1}  
        keyboardType={'numeric'}>
      </TextInput>
      <TextInput style={styles.inputit} onChangeText={text => setLuku2(text)} 
        value={luku2}
        keyboardType={'numeric'}>
      </TextInput>
      <View style={styles.napit}>
        <Button  onPress={plussaa} title=" + " />
        <Button onPress={miinusta} title=" - " />
      </View>
      <Text>History:</Text>
      <FlatList style={styles.lista}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.key}</Text>
        }
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputit: {
    width: 120,
    borderWidth: 1,
  },
  napit: {
    flexDirection:'row', 
    margin: 5,
    width: 100,
    justifyContent:'space-between',
  },
  lista: {

  }
});