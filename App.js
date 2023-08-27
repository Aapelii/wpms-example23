import {StatusBar} from 'expo-status-bar';
import {Platform} from 'react-native';
import {SafeAreaView, StyleSheet} from 'react-native';
import List from './components/List';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <List />
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#87CEFA',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  TouchableOpacity: {
    marginVertical: 5,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#6495ED',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: '25%',
  },
  Image: {
    margin: 5,
    width: '85%',
    height: 'auto',
    resizeMode: 'cover',
  },
  View: {
    width: '50%',
    margin: 5,
  },
  Text: {
    height: 'auto',
    width: '100%',
  },
});

export default App;
