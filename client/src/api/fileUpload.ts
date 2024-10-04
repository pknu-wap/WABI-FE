import axios from 'axios';

export const fileUpload = (
  groupId: number,
  fileFormData: FormData,
  token: string | null,
) => {
  return axios
    .post(
      `https://zepelown.site/api/bands/${groupId}/members/enrollments/file`,
      fileFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(error => {
      console.error(
        'File upload error:',
        error.response ? error.response.data : error.message,
      );
      throw error;
    });
};
