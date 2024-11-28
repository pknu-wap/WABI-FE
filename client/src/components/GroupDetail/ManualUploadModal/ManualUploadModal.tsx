import React, {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {student} from '../../../types/studentTypes';
import ModalFrame from '../../common/ModalFrame/ModalFrame';
import InputField from '../../common/InputField/InputField';
import FormSaveButton from 'components/EventAndGroupList/FormSaveButton/FormSaveButton';
import * as Styled from 'components/GroupDetail/ManualUploadModal/ManualUploadModal.styles';
import {manualUpload} from 'api/manualUpload';
import {manualUploadModalState} from 'recoil/modalState';

const ManualUploadModal: React.FC<{groupId: number}> = ({groupId}) => {
  // Recoil 상태 관리
  const [isModalOpen, setModalOpen] = useRecoilState(manualUploadModalState);

  // 그룹원 데이터 상태 관리
  const [student, setStudent] = useState<student>({
    studentId: '',
    name: '',
    club: '',
    position: '',
    joinDate: '',
    college: '',
    major: '',
    tel: '',
    academicStatus: '',
  });

  // 모달 닫힐 때 상태 초기화
  useEffect(() => {
    if (!isModalOpen) {
      setStudent({
        studentId: '',
        name: '',
        club: '',
        position: '',
        joinDate: '',
        college: '',
        major: '',
        tel: '',
        academicStatus: '',
      });
    }
  }, [isModalOpen]);

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  // 제출 핸들러
  const handleSubmit = () => {
    // API 호출
    manualUpload(groupId, [student])
      .then(response => {
        console.log('Upload success:', response);
        alert('그룹원이 성공적으로 추가되었습니다.');
        setModalOpen(false); // 모달 닫기
      })
      .catch(error => {
        console.error('Upload error:', error);
        alert(
          error.response?.data?.message || '업로드 중 문제가 발생했습니다.',
        );
      });
  };

  // 모달이 열려 있지 않으면 렌더링하지 않음
  if (!isModalOpen) return null;

  return (
    <ModalFrame width={'850px'} height={'543px'}>
      <Styled.ModalContainer>
        <Styled.Form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Styled.InputGrid>
            <InputField
              name="name"
              label="이름"
              placeholder="그룹원 이름 입력"
              required={true}
              value={student.name}
              onChange={handleChange}
            />
            <InputField
              name="studentId"
              label="학번"
              placeholder="그룹원 학번 입력"
              required={true}
              value={student.studentId}
              onChange={handleChange}
              type={'number'}
            />
            <InputField
              name="tel"
              label="연락처"
              placeholder="선택 항목"
              required={false}
              type="phone"
              value={student.tel}
              onChange={handleChange}
            />
            <InputField
              name="college"
              label="대학"
              placeholder="선택 항목"
              required={false}
              value={student.college}
              onChange={handleChange}
            />
            <InputField
              name="major"
              label="학부(과)"
              placeholder="선택 항목"
              required={false}
              value={student.major}
              onChange={handleChange}
            />
            <InputField
              name="academicStatus"
              label="학적상태"
              placeholder="선택 항목"
              required={false}
              value={student.academicStatus}
              onChange={handleChange}
            />
            <InputField
              name="club"
              label="동아리명"
              placeholder="선택 항목"
              required={false}
              value={student.club}
              onChange={handleChange}
            />
            <InputField
              name="position"
              label="직책"
              placeholder="선택 항목"
              required={false}
              value={student.position}
              onChange={handleChange}
            />
            <InputField
              name="joinDate"
              label="가입일자"
              placeholder="선택 항목"
              type="date"
              required={false}
              value={student.joinDate}
              onChange={handleChange}
            />
          </Styled.InputGrid>
          <Styled.FormFooter>
            <Styled.RequiredNote>* 필수항목</Styled.RequiredNote>
            <Styled.SaveButtonWrapper>
              <FormSaveButton text="추가하기" type="submit" />
            </Styled.SaveButtonWrapper>
          </Styled.FormFooter>
        </Styled.Form>
      </Styled.ModalContainer>
    </ModalFrame>
  );
};

export default ManualUploadModal;
