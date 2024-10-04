import React, {useEffect, useState} from 'react';
import * as Styled from 'components/common/GroupMemberList/GroupMemberList.styles';
import {loadGroupMemberList} from '../../../api/loadGroupMemberList';
import GroupMembers from './GroupMembers';
import {student} from '../../../types/studentTypes';
import {useAuthToken} from 'hooks/useAuthToken'; // useAuthToken 훅을 가져옴

interface groupProps {
  groupId: number;
  filterText: string;
}

const GroupMemberList: React.FC<groupProps> = ({groupId, filterText}) => {
  const [groupMembers, setGroupMembers] = useState<student[]>([]);
  const token = useAuthToken('seongwon3', 'shin091612@@');

  useEffect(() => {
    if (token) {
      loadGroupMemberList(groupId, setGroupMembers, token);
    }
  }, [token, groupId]);

  const filteredMembers = groupMembers.filter(
    member =>
      (member.studentId && member.studentId.includes(filterText)) ||
      (member.name && member.name.includes(filterText)) ||
      (member.academicStatus && member.academicStatus.includes(filterText)) ||
      (member.tel && member.tel.includes(filterText)) ||
      (member.major && member.major.includes(filterText)) ||
      (member.club && member.club.includes(filterText)) ||
      (member.position && member.position.includes(filterText)) ||
      (member.joinDate && member.joinDate.includes(filterText)) ||
      (member.college && member.college.includes(filterText)),
  );

  return (
    <div>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.ThData>학번</Styled.ThData>
            <Styled.ThData>이름</Styled.ThData>
            <Styled.ThBorder>재학 유무</Styled.ThBorder>
            <Styled.ThData>휴대폰 번호</Styled.ThData>
            <Styled.ThData>학과.전공</Styled.ThData>
            <Styled.ThData>동아리</Styled.ThData>
            <Styled.ThData>직책</Styled.ThData>
            <Styled.ThData>가입일자</Styled.ThData>
            <Styled.ThData>소속대학</Styled.ThData>
            <Styled.ThBorder>체크</Styled.ThBorder>
          </tr>
        </thead>
        <GroupMembers members={filteredMembers} />
      </Styled.Table>
    </div>
  );
};

export default GroupMemberList;
