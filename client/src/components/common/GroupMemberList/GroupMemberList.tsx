import React, {useEffect, useState} from 'react';
import * as Styled from 'components/common/GroupMemberList/GroupMemberList.styles';
import {loadGroupMemberList} from '../../../api/loadGroupMemberList';
import GroupMembers from './GroupMembers';

// 학번, 이름 재학유무, 휴대폰 번호, 학과.전공, 체크
const GroupMemberList = () => {
  const [groupMembers, setGroupMembers] = useState([]);
  useEffect(() => {
    loadGroupMemberList(setGroupMembers);
  }, []);

  return (
    <div>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.ThData>학번</Styled.ThData>
            <Styled.ThData>이름</Styled.ThData> {/*여기에 실선 하나*/}
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
        <GroupMembers members={groupMembers} />
      </Styled.Table>
    </div>
  );
};

export default GroupMemberList;
