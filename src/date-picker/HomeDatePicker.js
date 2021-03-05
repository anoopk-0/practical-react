import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HomeDatePicker = () => {

    const [selectedDate, setSelectedDate] = useState('')

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                // minDate={new Date()}
                //maxDate={}

                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                isClearable={true}
            //showYearDropdown
            //showYearPicker

            />
        </div>
    );
}

export default HomeDatePicker;
