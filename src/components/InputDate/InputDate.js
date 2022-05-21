import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { TextField } from "@mui/material";

function InputDate({label, value, onChange, invalid, error, disabled}) {
    return (
        <DatePicker
        disabled={disabled}
        className="form-component"
        label={label}
        disableFuture
        value={value}
        onChange={(value) =>
            onChange(moment(value).format("YYYY-MM-DD"))
        }
        renderInput={(params) => (
            <TextField
            disabled={disabled}
            error={invalid}
            className="form-component"
            helperText={invalid ? error.message : null}
            variant="outlined"
            margin="dense"
            fullWidth
            color="primary"
            {...params}
            />
        )}
        />
    )
}

export default InputDate;