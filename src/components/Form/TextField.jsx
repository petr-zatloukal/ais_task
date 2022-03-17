import MUITextField from "@mui/material/TextField";

const TextField = ({ onChange, value = "", label, error }) => {
  return (
    <MUITextField
      fullWidth
      value={value}
      label={label}
      onChange={onChange}
      error={error}
    />
  );
};

export default TextField;
