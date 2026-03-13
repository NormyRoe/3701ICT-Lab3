import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




export default function Board() {
  return (
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
    
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
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
  }
});
