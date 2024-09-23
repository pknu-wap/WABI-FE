import React, {useState} from 'react';
import CreateEventForm from 'components/EventAndGroupList/CreateEventForm/CreateEventForm';
import Header from 'components/common/Header/Header';
import EventCardList from 'components/EventAndGroupList/EventCardList/EventCardList';
import GroupCardList from 'components/EventAndGroupList/GroupCardList/GroupCardList';
import CreateGroupForm from 'components/EventAndGroupList/CreateGroupForm/CreateGroupForm';
import TabSwitcher from 'components/EventAndGroupList/TabSwitcher/TabSwitcher';
import * as Styled from 'pages/EventAndGroupList/EventAndGroupList.styles';
import FormSaveButton from 'components/EventAndGroupList/FormSaveButton/FormSaveButton';

const EventAndGroupList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [selectedBandId, setSelectedBandId] = useState<number | null>(null);

  const handleCreateClick = () => {
    setSelectedEventId(null);
    setSelectedBandId(null);
    setIsFormVisible(true);
  };

  const handleUpdateClick = (id: number) => {
    if (activeTab === 0) {
      setSelectedEventId(id);
    } else if (activeTab === 1) {
      setSelectedBandId(id);
    }
    setIsFormVisible(true);
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
