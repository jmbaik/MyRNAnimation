import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import LogoHeader from './components/header/LogoHeader';
import CategoryHeader from './components/header/CategoryHeader';
import HeaderBackground from './components/header/HeaderBackground';
import Bottom from './components/bottom/Bottom';
import MusicListSmall from './components/musiclist/MusicListSmall';
import MusicListMedium from './components/musiclist/MusicListMedium';
import MusicListLarge from './components/musiclist/MusicListLarge';

export default function YoutubeMusic() {
  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <HeaderBackground />
      <LogoHeader />
      <CategoryHeader />
      <ScrollView style={{borderWidth: 1}}>
        <View style={{height: 10000000}}>
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
        </View>
      </ScrollView>
      <Bottom />
    </View>
  );
}
