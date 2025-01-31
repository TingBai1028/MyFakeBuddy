import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Voice from '@react-native-voice/voice';
import { useState } from 'react';

const CallScreen = () => {
  const router = useRouter();

  const [ready, setReady] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [progressItems, setProgressItems] = useState([]);

  // Inputs and outputs
  const [input, setInput] = useState('I love walking my dog.');
  const [output, setOutput] = useState('');


  return (
      <div className='container'>
        <div className='textboxContainer'>
          <textarea value={input} rows={3} onChange={e => setInput(e.target.value)}></textarea>
          <textarea value={output} rows={3} readOnly></textarea>
        </div>
      </div>
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
    textboxContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: 20,
      width: 800,
    }
  });

export default CallScreen;

/**
 * Procedure:
 * 
 * Step 1: add speech to text 
 * Setp 2: add text to speech
 */
