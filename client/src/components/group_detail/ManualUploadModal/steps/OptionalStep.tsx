import React from 'react';
import {stepProps} from '../../../../types/stepTypes';
import {manualUpload} from "../../../../api/manualUpload";

const OptionalStep = ({prevStep, student, handleChange}: stepProps) => {
        return (
            <div>
                <h1>선택 항목 입력</h1>
                단과대학
                <input type="text" name="college" value={student?.college} onChange={handleChange}/>
                학과
                <input type="text" name="major" value={student?.major} onChange={handleChange}/>
                소속 동아리
                <input
                    type="text"
                    name="club"
                    value={student?.club}
                    onChange={handleChange}
                />
                직책
                <input
                    type="text"
                    name="position"
                    value={student?.position}
                    onChange={handleChange}
                />
                가입일자
                <input
                    type="text"
                    name="joinDate"
                    value={student?.joinDate}
                    onChange={handleChange}
                />
                재학 유무
                <input
                    type="text"
                    name="status"
                    value={student?.status}
                    onChange={handleChange}
                />
                휴대폰 번호
                <input
                    type="text"
                    name="tel"
                    value={student?.tel}
                    onChange={handleChange}
                />

                <button onClick={prevStep}>이전</button>
                <button onClick={() => {manualUpload([student])}}>추가</button>
            </div>
        )
}

export default OptionalStep;