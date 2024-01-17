import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DrumPadGrid from './components/DrumPadGrid';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DrumPadGrid/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
});

export default App;
