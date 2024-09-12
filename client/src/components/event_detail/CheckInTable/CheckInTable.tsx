import React from "react";
import * as Styled from "./CheckInTable.styles";
import useCheckInStudent from "../../../hooks/useCheckInStudent";

const CheckInTable = () => {
    const { students } = useCheckInStudent("8");
    return (
        <div>
            <Styled.Table>
                <thead>
                <tr>
                    <Styled.ThData>학번</Styled.ThData>
                    <Styled.ThData>이름</Styled.ThData>
                    <Styled.ThBorder>그룹</Styled.ThBorder>
                    <Styled.ThBorder>체크인상태</Styled.ThBorder>
                    <Styled.ThBorder>체크인시간</Styled.ThBorder>
                </tr>
                </thead>
                <tbody>
                {students.length > 0 ? (
                    students.map((row, index) => (
                        <tr key={index}>
                            <Styled.ThData>{row.id}</Styled.ThData>
                            <Styled.ThData>{row.name}</Styled.ThData>
                            <Styled.ThBorder>{row.group}</Styled.ThBorder>
                            <Styled.ThBorder>{row.eventStudentStatus}</Styled.ThBorder>
                            <Styled.ThBorder>{row.checkInTime}</Styled.ThBorder>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>데이터가 없습니다.</td>
                    </tr>
                )}
                </tbody>
            </Styled.Table>
        </div>
    );
};

export default CheckInTable;
