import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {faker} from '@faker-js/faker';
import {Dimensions} from 'react-native';

export default function MusicListSmall() {
  const dWidth = Dimensions.get('window').width;
  return (
    <View style={{}}>
      <Title />
      <ScrollView
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: 20}}
        showsHorizontalScrollIndicator={false}>
        {[...Array(3)].map((value, idx) => {
          return (
            <View key={idx} style={{width: dWidth * 0.92}}>
              {[...Array(4)].map((val, index) => {
                return <MusicSmallItem key={index} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicSmallItem() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 14,
      }}>
      <View style={{flexDirection: 'row', flex: 1, flexShrink: 0}}>
        <Image
          source={{uri: `https://picsum.photos/5${Math.floor(Math.random() * 100)}`}}
          style={{width: 50, height: 50, borderRadius: 5}}
        />
        <View style={{paddingHorizontal: 10, flex: 1}}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold', paddingBottom: 4, paddingTop: 2}}>
            {faker.music.genre()}
          </Text>
          <Text style={{color: 'white', fontSize: 14}} numberOfLines={1}>
            {faker.music.songName()}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flexShrink: 1}}>
        <Icon name="dots-three-vertical" color="white" size={12} />
      </View>
    </View>
  );
}

function Title() {
  return (
    <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
      <Text style={{fontSize: 12, color: '#ffffff', fontWeight: '200'}}>이노래로 뮤직 스테이션 시작하기</Text>
      <Text style={{fontWeight: 'bold', fontSize: 28, color: '#ffffff'}}>빠른 선곡</Text>
    </View>
  );
}
