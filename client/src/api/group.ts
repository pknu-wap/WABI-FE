import {CreateGroupData, UpdateGroupData} from 'types/groupTypes';
import apiClient from 'api/apiClient';

interface CreateGroupParams {
  data: CreateGroupData;
}

interface UpdateGroupParams {
  data: UpdateGroupData;
}

interface GetGroupParams {
  bandId: number;
}

interface DeleteGroupParams {
  bandId: number;
}

export const createGroup = ({data}: CreateGroupParams) => {
  return apiClient.post('/bands/create', data, {});
};

export const updateGroup = ({data}: UpdateGroupParams) => {
  return apiClient.put('/api/bands', data, {});
};

interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export const getGroupById = async ({
  bandId,
}: GetGroupParams): Promise<ApiResponse<UpdateGroupData>> => {
  const response = await apiClient.get<ApiResponse<UpdateGroupData>>(
    `/bands/${bandId}/detail`,
  );
  return response.data;
};

export const deleteGroup = ({bandId}: DeleteGroupParams) => {
  return apiClient.delete(`/bands/${bandId}`, {});
};
