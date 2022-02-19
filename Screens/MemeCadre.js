import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, SafeAreaView, LogBox } from 'react-native';
import ImagePicker from './ImagePicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Colors from '../assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function MemeCadre({ navigation }){
  const [ uri, setUri ] = useState(null);
  const [ title, setTitle ] = useState("");
  const [ subtitle, setSubtitle ] = useState("");
  
  const setMemeUri = (uri) => {
    setUri(uri);
  }

  _displayMemePreview = () => {
    if(uri != null && title.length > 0){
      //Open a new screen with the form selected
      navigation.navigate("MemeCadrePreview", {uri: uri, title: title, subtitle: subtitle});
    } else{
      alert("Please add an image and a title to your meme.");
    }
    
  }

  LogBox.ignoreLogs(['[Unhandled promise rejection: Error: Exception in HostFunction: Malformed calls from JS: field sizes are different.]']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.text_container}>
          <View style={styles.part_containter}> 
            <Text style={styles.subtitle}>Pick an image</Text>
            <ImagePicker setMemeUri={setMemeUri}/>
          </View>
          <View style={styles.part_containter}>
            <Text style={styles.subtitle}>Title meme</Text>
            <TextInput style={styles.input}
              returnKeyType="done"
              multiline={true}
              blurOnSubmit={true}
              onSubmitEditing={()=>{Keyboard.dismiss()}}
              onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.subtitle}>Subtitle meme</Text>
            <TextInput style={[styles.input, {marginBottom: 10}]}
              returnKeyType="done"
              multiline={true}
              blurOnSubmit={true}
              onSubmitEditing={()=>{Keyboard.dismiss()}}
              onChangeText={(text) => setSubtitle(text)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity style={styles.button} onPress={() => _displayMemePreview()}>
          <Text style={styles.text_button}>Preview</Text>
      </TouchableOpacity>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primaryColor,
      marginTop: hp('3%')
    },
    subtitle: {
      color: '#fff',
      fontSize: hp('2.8%'),
      marginTop: hp('3%')
    },
    input: {
      backgroundColor: '#fff',
      fontSize: hp('3%'),
      borderRadius: 20,
      color: '#121212',
      padding: '2.5%'
    },
    text_container: {
      flex: 1,
      marginHorizontal: wp('5%'),    
    },
    button: {
      padding: '2.5%',
      backgroundColor: Colors.tertiaryColor,
      borderRadius: 20,
      alignItems: 'center',
      alignSelf: 'center',
      width: wp('45%'),
      marginTop: hp('2.5%'),
      marginBottom: hp('2.5%')
    },
    text_button: {
      color: '#fff'
    },
    part_containter: {
      borderRadius: 20,
      paddingHorizontal: wp('2.5%'),
      marginVertical: hp('3%'),
      backgroundColor: Colors.secondaryColor
    }
});