import React from 'react';
import * as Styled from 'components/EventGroupSwitcher/ToggleTabs/TabSwitcher.styles';

interface TabSwitcherProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabSwitcher = ({activeTab, setActiveTab}: TabSwitcherProps) => {
  const tabs = ['이벤트', '그룹'];

  return (
    <Styled.TabsWrapper>
      {tabs.map((tab, index) => (
        <Styled.TabButton
          key={index}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </Styled.TabButton>
      ))}
    </Styled.TabsWrapper>
  );
};

export default TabSwitcher;
