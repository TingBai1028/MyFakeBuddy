import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

const CallScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.callingText}>Calling...</Text>
      <View style={styles.buttonContainer}>
        <Button title="End Call" onPress={() => router.back()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  callingText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default CallScreen;
