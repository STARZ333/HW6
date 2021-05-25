import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import $ from 'jquery';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers'; import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function DatePickers() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    let year = selectedDate.getFullYear() - 1911;
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format={"民國" + year + "年" + "-MM月-dd號"}
                    margin="normal"
                    id="date-picker-inline"
                    label="阿公開店日選擇"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}