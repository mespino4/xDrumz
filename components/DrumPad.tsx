import React, { useEffect, useState } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Audio } from 'expo-av';
import { sounds } from '../assets/sets';


interface DrumPadProps {
  color: string;
  label: string;
  soundKey: keyof typeof sounds;
}

const DrumPad: React.FC<DrumPadProps> = ({ color, label, soundKey }) => {
  const [sound, setSound] = useState<Audio.Sound | undefined>();

  const playSound = async () => {
    console.log('Playing Sound 🔊 ', soundKey);
    try {
      if (sound) {
        await sound.replayAsync();
      } else {
        console.error('Sound not found');
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadSound = async () => {
      try {
        await Audio.setIsEnabledAsync(true);
        const { sound: soundObject } = await Audio.Sound.createAsync(sounds[soundKey]);
        setSound(soundObject);
      } catch (error) {
        console.error('Error loading sound:', error);
      }
    };

    loadSound();

    return () => {
      isMounted = false;
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [soundKey]);

  return (
    <TouchableOpacity
      onPressIn={playSound}
      style={[styles.drumPad, { backgroundColor: color }]}
    >

      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drumPad: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 4,
    elevation: 5,
  },
  label: {
    color: 'white',
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default DrumPad;
