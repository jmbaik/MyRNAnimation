import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {faker} from '@faker-js/faker';
import {Dimensions} from 'react-native';

export default function MusicListSmall() {
  return (
    <ScrollView horizontal={true}>
      {[...Array(3)].map(() => {
        return (
          <View>
            {[...Array(4)].map((val, index) => {
              return (
                <View key={index}>
                  <MusicSmallItem key={index} />
                </View>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
}

function MusicSmallItem() {
  const dWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 6,
        width: dWidth * 0.8,
        borderWidth: 1,
        borderColor: 'white',
      }}>
      <View style={{flexDirection: 'row', flexShrink: 0, borderWidth: 1, borderColor: 'white'}}>
        <Image source={{uri: 'https://picsum.photos/50'}} style={{width: 50, height: 50, borderRadius: 5}} />
        <View style={{paddingHorizontal: 10}}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold', paddingBottom: 4, paddingTop: 2}}>
            {faker.music.genre()}
          </Text>
          <Text style={{color: '#ffffff90', fontSize: 14, width: dWidth * 0.55}} numberOfLines={1}>
            {faker.music.songName()}
            {faker.music.songName()}
            {faker.music.songName()}
          </Text>
        </View>
      </View>
      <View style={{flexShrink: 1, borderWidth: 1, borderColor: 'white'}}>
        <Icon name="dots-three-vertical" color="white" size={14} />
      </View>
    </View>
  );
}
