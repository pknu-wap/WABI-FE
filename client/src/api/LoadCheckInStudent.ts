import axios from "axios";
import {studentCheckedIn} from "../types/QrType/StudentQr";

export const LoadCheckInStudent = () => {
    return axios
        .get(`https://870bafef-df00-4737-802f-dbe09e346c46.mock.pstmn.io/api/events`)
        .then((res) => {
            let cleanedData = res.data;

            if (typeof cleanedData === "string") {
                cleanedData = cleanedData.slice(cleanedData.indexOf('{'), cleanedData.lastIndexOf('}') + 1);
            }
            const parsedData = JSON.parse(cleanedData);
            const students = parsedData.content;

            console.log(students);
            return students[0];
        })
        .catch((error) => {
            console.log(error);
        })
}
