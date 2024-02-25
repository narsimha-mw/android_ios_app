import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,StyleSheet,Text,useColorScheme,View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginPage from './app/src/components/screens/Login/LoginPage';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
     <LoginPage/>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F9FBFC',
    flex:1
  }
});

export default App;
