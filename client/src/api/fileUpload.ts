import axios from 'axios';

export const fileUpload = (fileFormData : FormData) => {
    axios.post('https://zepelown.site/api/bands/1/members/enrollments/file',fileFormData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.log(error.data);
    })
}
