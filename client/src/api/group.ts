import {CreateGroupData, UpdateGroupData} from 'types/groupTypes';
import apiClient from 'api/apiClient';

export const createGroup = (data: CreateGroupData, adminId: number) => {
  return apiClient.post('/bands/create', data, {
    params: {adminId: adminId},
  });
};

export const updateGroup = (data: UpdateGroupData, adminId: number) => {
  return apiClient.put(`/api/bands`, data, {
    params: {adminId: adminId},
  });
};

interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export const getGroupById = async (
  bandId: number,
  adminId: number,
): Promise<ApiResponse<UpdateGroupData>> => {
  const response = await apiClient.get<ApiResponse<UpdateGroupData>>(
    `/bands/${bandId}/detail`,
    {
      params: {adminId: adminId},
    },
  );
  return response.data;
};

export const deleteGroup = (bandId: number, adminId: number) => {
  return apiClient.delete(`/bands/${bandId}`, {
    params: {bandId: bandId, adminId: adminId},
  });
};
