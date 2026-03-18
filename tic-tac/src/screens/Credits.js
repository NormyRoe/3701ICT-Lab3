{/* Import libraries/Functions */}
import { StyleSheet, Text, View, Button } from 'react-native';

{/* Import components from src folder */}
import Title from '../components/Title';


export default function Credits( {navigation}) {
  return (
    <View style={styles.container}>
      {/* Top Section */}
              <View style={styles.top_section}>
                  <Title text = "Credits" />
              </View>
              {/* End Top Section */}
              {/* Middle Section */}
              <View style={styles.middle_section}>
                  <Text style={styles.credits_text}>
                  {/* Placeholder text for now */}
                  These are the credits for the game...
                  </Text>
              </View>
              {/* End Middle Section */}
              {/* Bottom Section */}
              <View style={styles.bottom_section}>
                  <Button title="Back" onPress={() => navigation.navigate("Home")} />
              </View>
              {/* End Bottom Section */}      
    </View>
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,   // gives space around all 3 sections
  },
  top_section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  middle_section: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  credits_text: {
    fontSize: 16,
    textAlign: "center",
  },
});
