import React from 'react';
import {useNavigate} from 'react-router-dom';

const MainEventList = () => {
  const [eventId, setEventId] = React.useState<string | null>(null);
  const navigate = useNavigate();

  // Handle changes in the input field and update the state
  const handleEventIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEventId(event.target.value);
  };

  // Navigate to event detail with eventId
  const navigateToEventDetail = () => {
    if (eventId) {
      navigate('/eventDetail', {state: {eventId}});
    }
  };

  return (
    <div>
      <input
        type="text"
        value={eventId || ''}
        onChange={handleEventIdChange}
        placeholder="Enter Event ID"
      />
      <button onClick={navigateToEventDetail}>Go to Event</button>
    </div>
  );
};

export default MainEventList;
