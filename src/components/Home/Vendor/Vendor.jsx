import React, { useState, useEffect } from "react";
import { useAuth } from "../../AuthContext";
import fire from "../../../config";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReviewCard from "../Cards/Card/ComplexCard";
import { Grid } from "@material-ui/core";
import SeacrhBarInput from "../SearchBar/SeacrhBarInput";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../Spinner/Spinner";
import FAB from "../FAB/FAB";
// Can be a string as well. Need to ensure each key-value pair ends with ;

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    width: "100%",
  },
  gridContainerSearch: {
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
});

export default function Vendor() {
  //   const { fetchVendors } = useAuth();
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = fire.firestore().collection("Vendor");
  const classes = useStyles();

  const fetchData = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setVendors(items);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Grid container justify="center" className={classes.gridContainerSearch}>
        <SeacrhBarInput />
      </Grid>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {vendors.map((v) => {
          return (
            <Grid item>
              <ReviewCard name={v.name} />
            </Grid>
          );
        })}
      </Grid>
      <FAB />
    </>
  );
}
