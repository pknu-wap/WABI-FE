import {atom} from 'recoil';

export const selectedBandIdState = atom<number | null>({
  key: 'selectedBandIdState',
  default: null,
});
