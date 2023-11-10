import React, {useRef} from 'react';
import {Animated, Button} from 'react-native';

//
export default function AnimatedComponents() {
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const onPress = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      <Button onPress={onPress} title="사라져라" />
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🍊
      </Animated.Text>
    </>
  );
}
