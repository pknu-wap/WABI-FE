import React from "react";

//함수타입으로 정의 : () =>

const MemberUpdateButton = ({onClick}:{ onClick?: () => void }) => {

    return (
        //나중에 src/components/common/Button 컴포넌트로 보내주는 방식으로 확장예정
        <button onClick={onClick}>업로드</button>
    )
}
export default MemberUpdateButton;