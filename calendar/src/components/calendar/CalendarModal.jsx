import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import './modal.css';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import {uiCloseModal} from '../../actions/ui';
import {eventAddNew, eventClearActiveEvent} from '../../actions/event';
import { useEffect } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const late = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: late.toDate(),
}

export const CalendarModal = () => {

    const { modalOpen } = useSelector(state => state.ui);
    const { activeEvent } = useSelector(state => state.calendar);

    const dispatch = useDispatch();
    const [value, onChange] = useState(new Date());
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(late.toDate());
    const [formValues, setFormValues] = useState(initEvent);
    const { notes, title, start, end } = formValues;

    useEffect(() => {
        if(activeEvent){
            setFormValues(activeEvent)
        }
    }, [activeEvent,setFormValues])
    

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleStartDateChange = (e) => {
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        })
    }
    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const [isValid, setIsValid] = useState(true);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const momentStart = moment( start );
        const momentEnd = moment( end );
        if ( momentStart.isSameOrAfter( momentEnd ) ) {
            return Swal.fire('Error','La fecha fin debe de ser mayor a la fecha de inicio', 'error');
        }
        if ( title.trim().length < 2 ) {
            return setIsValid(false);
        }
            dispatch( eventAddNew({
                ...formValues,
                id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'Fernando'
                }
            }) );

        setIsValid(true);
        closeModal();
        
    }

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(eventClearActiveEvent());
        setFormValues(initEvent)
    }

    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h4> Nuevo evento </h4>
                <hr />
                <form className="container" onSubmit={handleSubmitForm}>

                    <div className="form-group">
                        <label>Fecha y hora inicio</label>
                        <div>
                            <DateTimePicker
                                onChange={handleStartDateChange}
                                value={dateStart}
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Fecha y hora fin</label>
                        <div>
                            <DateTimePicker
                                onChange={handleEndDateChange}
                                value={dateEnd}
                                minDate={dateStart}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Título y notas</label>
                        <input
                            type="text"
                            className={`form-control ${!isValid && 'is-invalid'} `}

                            placeholder="Título del evento"
                            name="title"
                            value={title}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={notes}
                            onChange={handleInputChange}
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                        style={{width: '100%'}}
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>
            </Modal>
        </div>
    )
};

export default CalendarModal;
