import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FAB() {
  const classes = useStyles();
  const style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  };

  const history = useHistory();
  return (
    <div className={classes.root}>
      {/* <Fab style={style} variant="extended" color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}
      <Fab
        variant="extended"
        color="primary"
        onClick={(e) => {
          history.push("/registernewvendor");
        }}
        style={style}
      >
        <AddIcon className={classes.extendedIcon} />
        Register New Vendor
      </Fab>
    </div>
  );
}
