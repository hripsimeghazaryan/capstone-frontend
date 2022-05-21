import { TextField } from '@mui/material';

function InputMultiline({value, onChange, label, error, disabled, type, rows}) {
    return (
        <TextField
        className="form-component description"
        type={type}
        disabled={disabled}
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error ? error.message : null}  
        rows={rows}
        multiline
        />
    )
}

export default InputMultiline;