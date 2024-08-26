import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';



export default function HomeScreen() {
  const CatScanLogo = require('@/assets/images/catscan_logo.png');
  
  return (
    <View style={styles.titleContainer}>
      <Image source={CatScanLogo}/>
      <TouchableOpacity style={styles.submitImageButton}>
        <Text style={{ color: 'white', fontSize: 16}}>Submit Image</Text>
      </TouchableOpacity>   
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: { 
    flexGrow: 1,
    backgroundColor: "#fbe8d6",
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
  },
  submitImageButton: {
    backgroundColor: '#6a705c',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    cursor: 'pointer',
  },
  
});
