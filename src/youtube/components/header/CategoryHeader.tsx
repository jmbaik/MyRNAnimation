import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {categoryIndexState, categoryState} from '../../../atom/CategoryAtom';

export default function CategoryHeader() {
  const category = ['휴식', '에너지충전', '집중', '운동', '출퇴근/동산'];
  const [categorySelected, setCategorySelected] = useRecoilState<string>(categoryState);
  const [categoryIndex, setCategoryIndex] = useRecoilState<number>(categoryIndexState);
  console.log('category index of ', categoryIndex);

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row', paddingVertical: 20}}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {category.map((item: string, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setCategorySelected(item);
              setCategoryIndex(index);
            }}>
            <View
              style={{
                padding: 10,
                paddingHorizontal: 16,
                borderRadius: 8,
                borderWidth: 0.5,
                backgroundColor: categorySelected === item ? '#ffffff' : '#ffffff10',
                borderColor: '#ffffff30',
                marginHorizontal: 4,
              }}>
              <Text style={{color: categorySelected === item ? '#111' : 'white'}}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
