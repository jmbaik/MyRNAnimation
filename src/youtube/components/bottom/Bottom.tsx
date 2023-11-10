import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {bottom_height} from '../Utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Bottom() {
  // insets.bottom
  return (
    <View style={{backgroundColor: '#222'}}>
      <View style={{height: bottom_height}}>
        <View style={{flexDirection: 'row'}}>
          <BottomItem name={'home-filled'} title={'홈'} />
          <BottomItem name={'explore'} title={'둘러보기'} />
          <BottomItem name={'library-music'} title={'보관함'} />
        </View>
      </View>
    </View>
  );
}
type BottomItemType = {
  name: string;
  title: string;
};
function BottomItem({name, title}: BottomItemType) {
  return (
    <TouchableOpacity style={{alignItems: 'center', flex: 1, borderWidth: 1}}>
      <View style={{marginVertical: 4}}>
        <Icon name={name} color="white" size={24} />
      </View>
      <Text style={{color: 'white', fontSize: 12}}>{title}</Text>
    </TouchableOpacity>
  );
}
