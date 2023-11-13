import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LogoHeader() {
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 14,
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 100,
          zIndex: 100,
        }}>
        <Image source={require('../../../assets/cih-logo.png')} style={{width: 122, height: 28}} />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <IconItem name="cast" />
          <IconItem name="search" />
          <View
            style={{
              width: 45,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: '#555',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconItem name="perm-identity" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

type IconItemType = {
  name: string;
};
function IconItem({name}: IconItemType) {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 45,
          width: 45,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          // paddingHorizontal: 10,
          // borderWidth: 1,
          // borderColor: 'white',
        }}>
        <Icon name={name} size={20} color="white" />
      </View>
    </TouchableOpacity>
  );
}
