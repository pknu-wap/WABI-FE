import axios from 'axios';
import { student } from '../types/studentTypes';


interface ApiResponse {
  data: {
    students: student[];
  };
}

export const loadGroupMemberList = (
    groupId: string,
    setGroupMembers: React.Dispatch<React.SetStateAction<student[]>>,
) => {
  axios
    .get<ApiResponse>(
      `https://zepelown.site/api/bands/${groupId}/students`,
    )
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
      });
};
