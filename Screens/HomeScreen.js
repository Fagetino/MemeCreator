import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';
import MemeButton from '../Components/Home/MemeButton';
import * as Colors from '../assets/colors';

export default function HomeScreen({navigation}) {
  const data = [
    {
      name: 'Cadre',
      image: require(`../assets/images/cadre_meme.png`)
    },
    {
      name: 'Classique',
      image: require(`../assets/images/textMeme.jpg`)
    },
    {
      name: 'fd',
      image: require(`../assets/images/textMeme.jpg`)
    },
    {
      name: 'ij',
      image: require(`../assets/images/textMeme.jpg`)
    },
    {
      name: 'Caqsdqdsdre',
      image: require(`../assets/images/textMeme.jpg`)
    },
    {
      name: 'oqdsqdk',
      image: require(`../assets/images/textMeme.jpg`)
    },
    {
      name: 'fqsdsqd',
      image: require(`../assets/images/textMeme.jpg`)
    },
    {
      name: 'isqsqdj',
      image: require(`../assets/images/textMeme.jpg`)
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.listContainer}>
          {
            data.map((meme) => {
              return(
                <View key={meme.name} style={{width: '46%'}}>
                  <MemeButton meme={meme} navigation={navigation}/>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
});
