import axios from 'axios';
import {students} from "../types/studentTypes";

export const manualUpload = (students : students) => {
    axios.post('https://13f9350d-c685-4634-9131-e118c99027d6.mock.pstmn.io/api/bands/1/members/enrollments/manual',students)
        .then((res) => {
        })
        .catch((error) => {
        })
}