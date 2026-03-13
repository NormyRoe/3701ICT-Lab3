import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './src/components/Board';




export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe App!</Text>
      <StatusBar style="auto" />
      {/* Outer Board */}
      <Board />
      {/* End Outer Board */}
    </View>
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },  
});
