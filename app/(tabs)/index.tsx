import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native";
import React from 'react';

export default function Index() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Fake Buddy</Text>
      <Text style={styles.subtitle}>Press the button below to start a call!</Text>   
      <Button
          title="Start Call"
          onPress={() => alert('complete functionality')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 300,
    height: 68,
    marginHorizontal: 20,
    backgroundColor: '#008000',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F5F5DC',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F0FFFF',
    marginTop: 15,
    marginBottom: 5,
},
});
