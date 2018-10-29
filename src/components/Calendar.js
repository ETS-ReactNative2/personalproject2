import React, { Component } from "react"
import moment from 'moment'


export default class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            indexStart: 0,
            indexEnd: 7,
            data: '',
            time: '',
            days: [
                {
                    date: moment(),
                    appts: [
                        {
                            time: moment('9:00', 'H:mm'),
                            bookedBy: 'Travis',
                        },
                        {
                            time: moment('10:00', 'H:mm'),
                            bookedBy: null,
                        },
                    ]
                },
                {
                    date: moment().add('day', 1),
                    appts: [
                        {
                            time: moment('9:00', 'H:mm'),
                            bookedBy: null,
                        },
                        {
                            time: moment('10:00', 'H:mm'),
                            bookedBy: 'John',
                        },
                    ]
                },
            ]
        }
    }

    indexStart(){

    }

    indexEnd(){
        
    }

    render() {

        const { days } = this.state;

        const displayDays = days.map(day => {
            return (
                <div>
                    <h4>{day.date.format("MM/DD/YYYY")}</h4>
                    {
                        day.appts.map(appt => {
                            const apptColor = appt.bookedBy ? 'blue' : 'gray';
                            return (

                                <div onClick={console.log('i')} style={{backgroundColor: apptColor}}>
                                    <h5>{`${appt.time.format('hh:mm')}-${appt.time.add('hour', 1).format('hh:mm')}`}</h5>
                                    <p>{appt.bookedBy}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })


        const tomorrow = moment().add('day', 1).format('DD-MM-YYYY');
        console.log(tomorrow)


        return (
            // tomorrow
            <div style={{display: 'flex'}}>

                {/* {tomorrow} */}
                {displayDays}

                <button></button>
            </div>
        )
    }
}