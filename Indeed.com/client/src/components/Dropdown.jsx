
import {Select, MenuItem, FormControl, InputLabel} from '@mui/material';
const Dropdown=({
    label,
    id,
    value,
    handleChange,
    name,
    options,
    multiple = false,  // New prop to allow multi-select
    ...props
})=>{
    return(
        <FormControl>
        <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                // value={value}
                value={multiple ? value || [] : value}  // Ensure value is an array if multiple is true
                label={label}
                onChange={handleChange}
                name={name}
                multiple={multiple}    // Pass the multiple prop
                {...props}
            >
                {
                    options.map(option =>(
                        <MenuItem value={option}>{option}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default Dropdown;