import {atom} from 'recoil';

export const fileUploadModalState = atom<boolean>({
  key: 'fileUploadModalState',
  default: false,
});

export const manualUploadModalState = atom<boolean>({
  key: 'manualUploadModalState',
  default: false,
});
