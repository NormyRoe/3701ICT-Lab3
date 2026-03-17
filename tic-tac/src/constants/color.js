{/* Import libraries/Functions */}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




export default function color() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>color</Text>
      
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
