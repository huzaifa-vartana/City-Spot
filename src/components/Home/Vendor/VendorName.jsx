/* eslint-disable no-use-before-define */
import React, { useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function FreeSolo(props) {
  const [vendors, setVendors] = React.useState();
  const [value, setValue] = React.useState();
  const nameRef = useRef();
  useEffect(() => {
    sendDataToParent();
  }, [value]);
  const sendDataToParent = async () => {
    await props.parentFunction(value);
  };
  return (
    <div style={{}}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        options={props.vendorData.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            value={value}
            required
            inputRef={nameRef}
            onChange={(e) => {
              setValue(e.target.value);
              sendDataToParent();
            }}
            label="Vendor Name"
            margin="normal"
            variant="standard"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}
