import React from 'react';
import EventPopUp from './EventPopUp';

const EventOverlays = ({ user, events }) => {
  const displayOverlays = events.map((event) => {
    return (
      <EventPopUp
        key={event.id}
        user={user}
        event={event}
      />
    )
  });

  return (
    <>
      {displayOverlays}
    </>
  )
}

export default EventOverlays;
