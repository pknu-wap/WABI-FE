import {CreateGroupData, UpdateGroupData} from 'types/groupTypes';
import apiClient from 'api/apiClient';

interface CreateGroupParams {
  data: CreateGroupData;
  adminId: number;
}

interface UpdateGroupParams {
  data: UpdateGroupData;
  adminId: number;
}

interface GetGroupParams {
  bandId: number;
  adminId: number;
}

interface DeleteGroupParams {
  bandId: number;
  adminId: number;
}

export const createGroup = ({data, adminId}: CreateGroupParams) => {
  return apiClient.post('/bands/create', data, {
    params: {adminId},
  });
};

export const updateGroup = ({data, adminId}: UpdateGroupParams) => {
  return apiClient.put('/api/bands', data, {
    params: {adminId},
  });
};

interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export const getGroupById = async ({
  bandId,
  adminId,
}: GetGroupParams): Promise<ApiResponse<UpdateGroupData>> => {
  const response = await apiClient.get<ApiResponse<UpdateGroupData>>(
    `/bands/${bandId}/detail`,
    {
      params: {adminId},
    },
  );
  return response.data;
};

export const deleteGroup = ({bandId, adminId}: DeleteGroupParams) => {
  return apiClient.delete(`/bands/${bandId}`, {
    params: {adminId},
  });
};
