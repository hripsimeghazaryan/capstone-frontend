import {
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";

function InputRadioGroup({field, radio, disabled}) {
    return (
        <RadioGroup 
        className="form-component radio-group"
        {...field}>
            {radio.map(({value, label}, key) => {
                return (
                    <FormControlLabel
                    key={key}
                    disabled={disabled}
                    value={value}
                    control={<Radio />}
                    label={label}
                    />
                )
            })}
        </RadioGroup>
    )
}

export default InputRadioGroup;