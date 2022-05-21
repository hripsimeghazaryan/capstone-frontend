import { TextField } from '@mui/material';

function InputText({value, onChange, label, error, disabled, type}) {
    return (
        <TextField
        className="form-component"
        type={type}
        disabled={disabled}
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error ? error.message : null}  
        />
    )
}

export default InputText;