{/* Import libraries/Functions */}
import { StyleSheet, Text, View } from 'react-native';




export default function Title( {text}) {
  return (
    <View style={styles.container}>
      {/* Display Title Text */}
      <Text style={styles.title_text}>
        {text}
      </Text>
      {/* End Display Title Text */}
    </View>
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  title_text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
