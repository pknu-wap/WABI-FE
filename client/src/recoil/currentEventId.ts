import { atom } from 'recoil';

export const selectedEventIdState = atom<string | null>({
    key: 'selectedEventIdState',
    default: null,
});
