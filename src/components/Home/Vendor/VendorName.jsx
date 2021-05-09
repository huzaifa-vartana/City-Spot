/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function FreeSolo(props) {
  const [vendors, setVendors] = React.useState();
  const [value, setValue] = React.useState();
  const nameRef = React.useRef();
  console.log(value);
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={props.vendorData.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            ref={nameRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            label="Vendor Name"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}
