import apiClient from 'api/apiClient';

export const fileUpload = (groupId: number, fileFormData: FormData) => {
  return apiClient
    .post(`/bands/${groupId}/members/enrollments/file`, fileFormData, {})
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
