{/* Import libraries/Functions */}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

{/* Import components from src folder */}
import Title from '../components/Title';



export default function Home( {navigation}) {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={ {width: "100%", paddingHorizontal: 20} }>
        <Title text = "Tic Tac Toe App!" />
      </View>
      {/* End Title Section */}
      <StatusBar style="auto" />
      {/* Outer Board */}
      <View style={styles.outer_board}>
        {/* Inner Board */}
        <View style={styles.inner_board}>
          {/* Row 1 */}
          <View style={styles.row}>
            {/* Row 1 - Cell 1 */}
            <View style={styles.cell}>
              <Text style={styles.text}>O</Text>
            </View>
            {/* Row 1 - Cell 2 */}
            <View style={styles.cell}>
              <Text style={styles.text}></Text>
            </View>
            {/* Row 1 - Cell 3 */}
            <View style={styles.cell}>
              <Text style={styles.text}>O</Text>
            </View>
          </View>
          {/* End Row 1 */}
          {/* Row 2 */}
          <View style={styles.row}>
            {/* Row 2 - Cell 1 */}
            <View style={styles.cell}>
              <Text style={styles.text}>X</Text>
            </View>
            {/* Row 2 - Cell 2 */}
            <View style={styles.cell}>
              <Text style={styles.text}>X</Text>
            </View>
            {/* Row 2 - Cell 3 */}
            <View style={styles.cell}>
              <Text style={styles.text}>O</Text>
            </View>
          </View>
          {/* End Row 2 */}
          {/* Row 3 */}
          <View style={styles.row}>
            {/* Row 3 - Cell 1 */}
            <View style={styles.cell}>
              <Text style={styles.text}>X</Text>
            </View>
            {/* Row 3 - Cell 2 */}
            <View style={styles.cell}>
              <Text style={styles.text}></Text>
            </View>
            {/* Row 3 - Cell 3 */}
            <View style={styles.cell}>
              <Text style={styles.text}>O</Text>
            </View>
          </View>
          {/* End Row 3 */}
        </View>
        {/* End Inner Board */}
      </View>
      {/* End Outer Board */}
      {/* Add buttons to bottom of screen */}
      <View style = {styles.buttonRow}>
        {/* Rules Button */}
        <View>
            <Button title = "Rules" onPress={() => navigation.navigate("Rules")} />
        </View>
        {/* End Rules Button */}
        {/* Credits Button */}
        <View>
            <Button title = "Credits" onPress={() => navigation.navigate("Credits")} />
        </View>
        {/* End Credits Button */}
      </View>
      {/* End of buttons at bottom of screen */}
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
  outer_board: {
    width: 300,
    height: 300,
    backgroundColor: "orange",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_board: {
    width: 270,
    height: 270,
    backgroundColor: "green",
    borderRadius: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',   
  },  
  cell: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    color: "white",
  },
  buttonRow: {
  flexDirection: "row",
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,              // modern RN supports gap!
},
});
