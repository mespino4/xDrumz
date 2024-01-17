import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrumPad from './DrumPad';
import { sounds } from '../assets/sets';

const drumPads = [
  { color: '#FF5733', label: 'Crash', soundKey: 'CRASH' },
  { color: '#c2a200', label: 'FX', soundKey: 'PERC' },
  { color: '#5733FF', label: 'Ride', soundKey: 'RIDE' },
  { color: '#FF33A1', label: 'Tom', soundKey: 'TOM' },
  { color: '#33A1FF', label: 'Snare', soundKey: 'SNARE' },
  { color: '#22ab1d', label: 'Closed Hi-Hat', soundKey: 'CHH' },
  { color: '#d10000', label: 'Clap', soundKey: 'CLAP' },
  { color: '#808080', label: 'Kick', soundKey: 'KICK' },
  { color: '#e300d0', label: 'Open Hi-Hat', soundKey: 'OHH' },
];

const DrumPadGrid: React.FC = () => {
  const renderDrumPads = () => {
    return drumPads.map((drumPad, index) => (
      <DrumPad
        key={index}
        color={drumPad.color}
        label={drumPad.label}
        soundKey={drumPad.soundKey as keyof typeof sounds} // Add 'as keyof typeof sounds'
      />
    ));
  };
  // expo doctor --fix-dependencies

  return (
    <View style={styles.gridContainer}>
      <View style={styles.grid}>
        <View style={styles.row}>{renderDrumPads().slice(0, 3)}</View>
        <View style={styles.row}>{renderDrumPads().slice(3, 6)}</View>
        <View style={styles.row}>{renderDrumPads().slice(6, 9)}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8, // Add padding for spacing
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default DrumPadGrid;
