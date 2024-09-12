import axios from "axios";
import {studentQr} from "../types/QrType/StudentQr";

export const SendToServer = (data: studentQr) => {
    axios
        .post("http://34.47.97.81:8080/api/events/check-in",data)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
}