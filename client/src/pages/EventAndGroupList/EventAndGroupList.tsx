import React, {useState} from 'react';
import CreateEventForm from 'components/EventAndGroupList/CreateEventForm/CreateEventForm';
import Header from 'components/common/Header/Header';
import EventCardList from 'components/EventAndGroupList/EventCardList/EventCardList';
import GroupCardList from 'components/EventAndGroupList/GroupCardList/GroupCardList';
import CreateGroupForm from 'components/EventAndGroupList/CreateGroupForm/CreateGroupForm';
import TabSwitcher from 'components/EventAndGroupList/TabSwitcher/TabSwitcher';
import * as Styled from 'pages/EventAndGroupList/EventAndGroupList.styles';
import FormSaveButton from 'components/EventAndGroupList/FormSaveButton/FormSaveButton';
import {useRecoilState} from 'recoil';
import {isFormVisibleState} from 'recoil/formState';

const EventAndGroupList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFormVisible, setIsFormVisible] = useRecoilState(isFormVisibleState);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [selectedBandId, setSelectedBandId] = useState<number | null>(null);

  const handleCreateClick = () => {
    if (isFormVisible && !selectedEventId && !selectedBandId) {
      // 폼이 열려 있고, 생성 모드라면 폼을 닫기
      setIsFormVisible(false);
    } else {
      // 새로운 폼 열기
      setSelectedEventId(null);
      setSelectedBandId(null);
      setIsFormVisible(true);
    }
  };

  const handleUpdateClick = (id: number) => {
    if (activeTab === 0) {
      if (isFormVisible && selectedEventId === id) {
        // 동일한 이벤트 수정 모드라면 폼 닫기
        setIsFormVisible(false);
        setSelectedEventId(null);
      } else {
        // 다른 이벤트 수정 모드 열기
        setSelectedEventId(id);
        setIsFormVisible(true);
      }
    } else if (activeTab === 1) {
      if (isFormVisible && selectedBandId === id) {
        // 동일한 그룹 수정 모드라면 폼 닫기
        setIsFormVisible(false);
        setSelectedBandId(null);
      } else {
        // 다른 그룹 수정 모드 열기
        setSelectedBandId(id);
        setIsFormVisible(true);
      }
    }
  };

  const renderEventForm = () => {
    if (selectedEventId) {
      return <CreateEventForm eventId={selectedEventId} />;
    }
    return <CreateEventForm />;
  };

  const renderGroupForm = () => {
    if (selectedBandId) {
      return <CreateGroupForm bandId={selectedBandId} />;
    }
    return <CreateGroupForm />;
  };

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Styled.StyledLogo
          src="images/user.png"
          alt="USER Logo"
          text="Communitiy"
          width="36px"
          height="36px"
          fontSize="38px"
          redirectUrl={'/'}
        />
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
        <Styled.CreateButtonWrapper>
          <FormSaveButton
            text={activeTab === 0 ? '이벤트 개설하기' : '그룹 개설하기'}
            width="130px"
            height="30px"
            onClick={handleCreateClick}
          />
        </Styled.CreateButtonWrapper>

        <Styled.EventGroupWrapper>
          {activeTab === 0 && (
            <>
              <EventCardList
                onUpdateClick={handleUpdateClick}
                selectedEventId={selectedEventId}
              />
              <Styled.DivideLine />
              {isFormVisible && renderEventForm()}
            </>
          )}
          {activeTab === 1 && (
            <>
              <GroupCardList
                onUpdateClick={handleUpdateClick}
                selectedBandId={selectedBandId}
              />
              <Styled.DivideLine />
              {isFormVisible && renderGroupForm()}
            </>
          )}
        </Styled.EventGroupWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default EventAndGroupList;
