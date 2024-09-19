import React from 'react';
import CreateEventForm from 'components/EventGroupSwitcher/CreateEventForm/CreateEventForm';
import Header from 'components/common/Header/Header';

const EventGroupSwitcher = () => {
  // Todo
  // 이벤트 리스트, 그룹 리스트를 클릭 이벤트에 따라 띄워줘야 한다.

  return (
    <>
      <Header />
      <CreateEventForm />
    </>
  );
};

export default EventGroupSwitcher;