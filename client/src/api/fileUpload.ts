import axios from 'axios';

export const fileUpload = (fileFormData : FormData) => {
    console.log(Array.from(fileFormData))
    axios.post('https://13f9350d-c685-4634-9131-e118c99027d6.mock.pstmn.io/api/bands/1/members/enrollments/file',fileFormData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
}
