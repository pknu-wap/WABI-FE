import axios from 'axios';

export const fileUpload = (fileFormData : FormData) => {
    console.log(Array.from(fileFormData))
    axios.post('http://localhost:8000/upload-endpoint',fileFormData, {
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
