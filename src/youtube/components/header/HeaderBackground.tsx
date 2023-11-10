import React from 'react';
import {Image, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {categoryIndexState} from '../../../atom/CategoryAtom';
import LinearGradient from 'react-native-linear-gradient';

export default function HeaderBackground() {
  const categoryIndex = useRecoilValue<number>(categoryIndexState);
  console.log(categoryIndex);

  return (
    <View
      style={{
        position: 'absolute',
        height: 350,
        width: '100%',
        zIndex: -1,
      }}>
      {categoryIndex === -1 ? (
        <LinearGradient
          start={{x: 0.7, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.3, 0.6, 1]}
          colors={['#ffa100', '#288f4b30', '#11111190', '#111111']}
          style={{
            opacity: 0.4,
            height: 350,
          }}
        />
      ) : (
        <>
          <Image source={{uri: `https://picsum.photos/30${categoryIndex}`}} style={{width: '100%', height: 350}} />
          <LinearGradient
            start={{x: 0.5, y: 0.1}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 1]}
            colors={['#11111100', '#111111']}
            style={{
              position: 'absolute',
              height: 350,
              width: '100%',
            }}
          />
        </>
      )}
    </View>
  );
}
