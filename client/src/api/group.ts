import axios from 'axios';
import {CreateGroupData, UpdateGroupData} from 'types/groupTypes';

// 그룹 생성
export const createGroup = (data: CreateGroupData, adminId: number) => {
  return axios.post('https://zepelown.site/api/bands/create', data, {
    params: {adminId: adminId},
  });
};

// 이벤트 수정
export const updateGroup = (data: UpdateGroupData, adminId: number) => {
  return axios.put(`https://zepelown.site/api/bands`, data, {
    params: {adminId: adminId},
  });
};

// 그룹 단일 조회
interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export const getGroupById = async (
  bandId: number,
  adminId: number,
): Promise<ApiResponse<UpdateGroupData>> => {
  const response = await axios.get<ApiResponse<UpdateGroupData>>(
    `https://zepelown.site/api/bands/${bandId}/detail`,
    {
      params: {adminId: adminId},
    },
  );
  return response.data;
};

// 이벤트 삭제
export const deleteGroup = (bandId: number, adminId: number) => {
  return axios.delete(`https://zepelown.site/api/bands/${bandId}`, {
    params: {bandId: bandId, adminId: adminId},
  });
};
