import {atom} from 'recoil';

export const categoryState = atom<string>({
  key: 'categoryState',
  default: '',
});

export const categoryIndexState = atom<number>({
  key: 'categoryIndexState',
  default: -1,
});
