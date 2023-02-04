import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateMeeting from './CreateMeeting'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Oen up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <CreateMeeting/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
