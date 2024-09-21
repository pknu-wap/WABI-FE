export interface Band {
  bandId: number;
  bandName: string;
}

// 밴드를 생성할 때 사용하는 인터페이스
export interface CreateGroupData {
  bandName: string;
  bandMemo: string;
}

// 밴드를 수정할 때 사용하는 인터페이스
export interface UpdateGroupData {
  bandId: number;
  bandName: string;
  bandMemo: string;
}
