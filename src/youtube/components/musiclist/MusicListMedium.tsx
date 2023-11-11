import {faker} from '@faker-js/faker';
import React from 'react';
import {Text, View, Dimensions, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: dWidth, height: dHeight} = Dimensions.get('window');
console.log([...Array(3)]);

export default function MusicListMedium() {
  return (
    <View>
      <MediumTitle />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 8}}>
        {[...Array(7)].map((_, idx) => {
          return (
            <View style={{marginRight: 20}} key={idx}>
              <MediumItem />
              <MediumItem />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MediumItem() {
  return (
    <View>
      <Image
        style={{width: dWidth / 4, height: dWidth / 4}}
        source={{uri: `https://picsum.photos/20${Math.floor(Math.random() * 100)}`}}
        borderRadius={3}
      />
      <View
        style={{
          position: 'absolute',
          width: dWidth / 4,
          height: dWidth / 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="play" size={28} style={{color: 'white'}} />
      </View>
      <View style={{marginTop: 10, width: dWidth / 4, height: 60, flexShrink: 0}}>
        <Text style={{color: '#ffffff90', fontSize: 12}} numberOfLines={2}>
          {faker.music.songName()}
          {faker.music.songName()}
          {faker.music.songName()}
        </Text>
      </View>
    </View>
  );
}

function MediumTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'baseline',
        paddingBottom: 10,
      }}>
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>다시 듣기</Text>
      <View style={{borderWidth: 1, borderColor: '#ffffff50', padding: 2, borderRadius: 10}}>
        <Text style={{color: '#ffffff', fontSize: 12}}>더보기</Text>
      </View>
    </View>
  );
}
