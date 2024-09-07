import axios from 'axios';

export const LoadCheckInStudent = () => {
  return axios
    .get(
      `https://870bafef-df00-4737-802f-dbe09e346c46.mock.pstmn.io/api/events`,
    )
    .then(res => {
      const cleanedData = res.data.slice(
        res.data.indexOf('{'),
        res.data.lastIndexOf('}') + 1,
      );

      const parsedData = JSON.parse(cleanedData);
      const students = parsedData.content;

      console.log(students);
      return students[0];
    })
    .catch(error => {
      console.log(error);
    });
};
