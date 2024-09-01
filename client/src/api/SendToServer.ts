import axios from "axios";
import {studentQr} from "../types/QrType/StudentQr";

export const SendToServer = (data: studentQr) => {
    axios
        .post("https://19e6afb7-2763-439d-bebf-183abf40a711.mock.pstmn.io/api/check-in",data)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
}