import {faker} from '@faker-js/faker';
import React from 'react';
import {Image, Text, View, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: dWidth, height: dHeight} = Dimensions.get('window');
export default function MusicListLarge() {
  return (
    <View>
      <LargeTitle />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 8}}>
        {[...Array(7)].map((_, idx) => {
          return (
            <View style={{marginRight: 20}} key={idx}>
              <LargeItem />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function LargeItem() {
  return (
    <View>
      <Image
        source={{uri: `https://picsum.photos/20${Math.floor(Math.random() * 100)}`}}
        style={{width: dWidth / 3, height: dWidth / 3, borderRadius: 3}}
      />
      <View
        style={{
          position: 'absolute',
          width: dWidth / 3,
          height: dWidth / 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="play" size={28} style={{color: 'white'}} />
      </View>
      <View style={{width: dWidth / 3, height: 38, flexShrink: 0, marginTop: 10}}>
        <Text style={{color: 'white'}}>{faker.music.songName()}</Text>
      </View>
    </View>
  );
}

function LargeTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'baseline',
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ffffff90',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            width: 28,
            height: 28,
          }}>
          <Icon name="rewind" style={{color: '#ffffff90'}} size={20} />
        </View>
        <Text style={{color: 'white', fontSize: 26, paddingLeft: 18, fontWeight: 'bold'}}>돌아보기</Text>
      </View>
      <View style={{borderWidth: 1, borderColor: 'white', borderRadius: 6, padding: 2}}>
        <Text style={{color: 'white', fontSize: 12}}>더보기</Text>
      </View>
    </View>
  );
}
