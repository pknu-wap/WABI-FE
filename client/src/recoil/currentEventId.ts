import { atom } from 'recoil';

export const selectedEventIdState = atom<number | null>({
    key: 'selectedEventIdState',
    default: null,
});
