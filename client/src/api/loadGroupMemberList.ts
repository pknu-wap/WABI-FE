import apiClient from 'api/apiClient';
import {student} from '../types/studentTypes';

interface ApiResponse {
  data: {
    students: student[];
  };
}

export const loadGroupMemberList = (
  groupId: number,
  setGroupMembers: React.Dispatch<React.SetStateAction<student[]>>,
) => {
  apiClient
    .get<ApiResponse>(`/bands/${groupId}/students`, {})
    .then(res => {
      const students: student[] = res.data.data.students.map(item => ({
        studentId: item.studentId,
        name: item.name,
        academicStatus: item.academicStatus,
        tel: item.tel,
        major: item.major,
        club: item.club,
        position: item.position,
        joinDate: item.joinDate,
        college: item.college,
      }));

      setGroupMembers(students);
    })
    .catch(error => {
      console.error('Error fetching group members:', error);
      alert('데이터를 불러올 수 없습니다.');
    });
};
