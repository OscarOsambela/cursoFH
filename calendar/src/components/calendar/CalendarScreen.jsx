import React, { useState } from 'react';
import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { messages } from '../../helpers/calendar-messages-es';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/event';
import AddNewFab from '../ui/AddNewFab';

moment.locale('es');

const localizer = momentLocalizer(moment)

const events = [{
  title: "Cumpleaños",
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: "#fafafa",
  notes: "comprar el pastel",
  user: {
    _id: '123',
    name: 'Oscar'
  }
}]

export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.calendar)
console.log(selector);
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  }

  const onSelectEvent = (e) => {
    dispatch(eventSetActive());
     dispatch(uiOpenModal())
  }

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e)
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: 0,
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }
    return { style }
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent
          }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={onViewChange}
          view={lastView}
        />
      </div>
      <AddNewFab/>
      <CalendarModal />
    </div>
  )
};

export default CalendarScreen;
