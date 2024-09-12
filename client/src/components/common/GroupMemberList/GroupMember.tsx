import React from 'react';
import * as Styled from 'components/common/GroupMemberList/GroupMemberList.styles';
import {student} from '../../../types/studentTypes';

const GroupMember = ({member}: {member: student}) => {
  return (
    <>
      <Styled.TBody>
        <tr>
          <Styled.TdData>{member.studentId}</Styled.TdData>
          <Styled.TdData>{member.name}</Styled.TdData> {/*여기에 실선 하나*/}
          <Styled.TdBorder>{member.status}</Styled.TdBorder>
          <Styled.TdData>{member.tel}</Styled.TdData>
          <Styled.TdData>{member.major}</Styled.TdData>
          <Styled.TdData>{member.club}</Styled.TdData>
          <Styled.TdData>{member.position}</Styled.TdData>
          <Styled.TdData>{member.joinDate}</Styled.TdData>
          <Styled.TdData>{member.college}</Styled.TdData>
          <Styled.TdBorder>✅</Styled.TdBorder>
        </tr>
      </Styled.TBody>
    </>
  );
};

export default GroupMember;
