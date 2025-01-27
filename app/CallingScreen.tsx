import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Voice from '@react-native-voice/voice';
import { useState } from 'react';

const CallScreen = () => {
  const router = useRouter();

  // transcription to store user's voice to text
  const [transcription, setTranscription] = useState('');
  
  // record whether the program is listening / user is speaking
  const [listening, setListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = ((event) => {
        setTranscription(event.value[0]);
    });

    Voice.onSpeechError = (error) => {
        console.error('Speech error:', error);
        setListening(false);
    };
  
    return () => {
        Voice.destroy().then(Voice.removeAllListeners); // Cleanup listeners on unmount
    };
  }, []);

  const startListening = async () => {
    try {
      setListening(true);
      await Voice.start('en-US'); // Start listening in English
    } catch (error) {
      console.error('Error starting Voice:', error);
    }
  };

  const stopListening = async () => {
    try {
      setListening(false);
      await Voice.stop(); // Stop listening
    } catch (error) {
      console.error('Error stopping Voice:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.callingText}>Calling...</Text>
      <Text style={styles.transcription}>You said: {transcription || '...'}</Text>
      <View style={styles.buttonContainer}>
        <Button title={listening ? 'Stop Listening' : 'Start Listening'} onPress={listening ? stopListening : startListening} />
        <br></br>
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
    transcription: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 20,
    },
    buttonContainer: {
      marginTop: 20,
    },
  });

export default CallScreen;

/**
 * Procedure:
 * 
 * Step 1: add speech to text 
 * Setp 2: add text to speech
 */
