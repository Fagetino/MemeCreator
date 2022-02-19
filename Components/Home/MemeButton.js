import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function MemeButton(props) {
    const navigation = props.navigation
    const meme = props.meme

  return (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() => navigation.navigate('MemeCadre', {memeType: meme.name})}
        >
            <Image source={meme.image} style={styles.img} />
        </TouchableOpacity>   
        <Text style={styles.text}>{meme.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1%')
  },
  img: {
    borderRadius: 12,
    width: wp('35%'),
    height: wp('35%')
  },
  text: {
    color: '#fff'
  }
});
