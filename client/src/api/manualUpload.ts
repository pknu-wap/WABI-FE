import axios from 'axios';
import {students} from '../types/studentTypes'; // students 타입 import

export const manualUpload = async (groupId: number, students: students) => {
  try {
    const requestBody = {
      bandStudentDtos: students.map(student => ({
        studentId: student.studentId,
        name: student.name,
        club: student.club,
        position: student.position,
        joinDate: student.joinDate,
        college: student.college,
        major: student.major,
        tel: student.tel,
        academicStatus: student.academicStatus, // 필드 이름이 academicStatus로 매핑됨
      })),
    };
    console.log('requestBody:', requestBody);
    const response = await axios.post(
      `https://zepelown.site/api/bands/${groupId}/members/enrollments/manual`,
      requestBody,
    );

    console.log('Response:', response.data);
    return response.data;
  } catch (error: unknown) {
    console.log(error);
  }
};
