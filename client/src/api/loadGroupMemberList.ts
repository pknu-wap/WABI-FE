import axios from 'axios';

export const loadGroupMemberList = (setGroupMembers :  React.Dispatch<React.SetStateAction<never[]>>) => {
    axios
        .get(
            `https://13f9350d-c685-4634-9131-e118c99027d6.mock.pstmn.io/api/bands/1/students`,
        ).then(res => setGroupMembers(res.data.data.students))
};
