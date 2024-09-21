import React, {useState} from 'react';
import Header from 'components/common/Header/Header';
import TabSwitcher from '../../components/EventGroupSwitcher/ToggleTabs/TabSwitcher';
import * as Styled from 'pages/EventGroupSwitcher/EventGroupSwitcher.styles';

const EventGroupSwitcher = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Styled.ContentContainer>
      <Header />
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <div>이벤트 관련 콘텐츠</div>}
      {activeTab === 1 && <div>그룹 관련 콘텐츠</div>}
    </Styled.ContentContainer>
  );
};

export default EventGroupSwitcher;
