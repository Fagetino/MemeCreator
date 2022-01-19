import React, { useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView,Platform } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import ViewShot from "react-native-view-shot";
import * as Picker from 'expo-image-picker';


export default function MemeMaker({ navigation, route }){
    const viewShot = useRef(null)
    const _font = () => {
        let font=null;
        (Platform.OS === 'ios') ? font = "Cochin" : font = "serif";
        return font;
    }


    const _saveImage = async () => {
        //Ask storage permission to user
        const { status } = await Picker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need media library permissions to make this work!');
        } else {
            viewShot.current.capture().then(uri => {
                MediaLibrary.saveToLibraryAsync(uri);
            });
        }
        
    }

    const _displayMemeCadre = () => {
        //Go back to the memeMaker screen
        navigation.navigate("MemeCadre");
    }

    const _displayHome = () => {
        //Go back to the memeMaker screen
        navigation.navigate("Home");
    }

    return(
        <SafeAreaView style={styles.container}>
            <ViewShot ref={viewShot} options={{ format: "png", quality: 1 }} style={styles.shot}>
                <View style={styles.frame}>
                    <Image source={{uri: route.params.uri}} style={styles.image}/>
                </View>
                <Text style={[styles.text_title, {fontFamily: _font()}]}>{route.params.title.toUpperCase()}</Text>
                <Text style={[styles.text_subtitle, {fontFamily: _font()}]}>{route.params.subtitle}</Text>
            </ViewShot>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button} onPress={() => _displayMemeCadre()}>
                    <Text style={styles.text_button}>Edit meme</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    _saveImage()
                    _displayHome()
                }}>
                    <Text style={styles.text_button}>Save meme</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    button: {
        padding: '2.5%',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
        width: '45%',
    },
    text_button: {
        color: '#121212'
    },
    text_title: {
        color: '#fff',
        alignSelf: 'center',
        width: '70%',
        fontSize: 30,
        textAlign: 'center',
    },
    text_subtitle: {
        color: '#fff',
        alignSelf: 'center',
        width: '40%',
        fontSize: 18,
        textAlign: 'center',
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'cover'
    },
    frame: {
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 3,
        padding: 5,
    },
    button_container: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 'auto',
        marginBottom: '5%',
        justifyContent: 'space-around'
    },
    shot: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    }
});