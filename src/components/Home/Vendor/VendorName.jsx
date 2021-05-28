import React, { useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Paper from "@material-ui/core/Paper";

export default function FreeSolo(props) {
  const [vendors, setVendors] = React.useState([]);
  const [value, setValue] = React.useState();
  const nameRef = useRef();
  useEffect(() => {
    sendDataToParent();
  }, [value]);

  const sendDataToParent = async () => {
    await props.parentFunction(value);
  };
  const Link = ({ children }) => (
    <Paper>
      <p>Click the Option to Visit the Vendor</p>
      {children}
    </Paper>
  );

  return (
    <div style={{}}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        getOptionLabel={(option) => option.name}
        options={props.vendorData.map((option) => option)}
        renderOption={(option) => (
          <React.Fragment>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href = `/allvendors/${option.id}`;
              }}
            >
              {option.name}
            </span>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            value={value}
            required
            inputRef={nameRef}
            onChange={(e) => {
              setValue(e.target.value.trim());
              sendDataToParent();
            }}
            label="Vendor Name"
            margin="normal"
            variant="standard"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
        PaperComponent={Link}
      />
    </div>
  );
}
