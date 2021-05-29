// import React, { useState, useRef, useEffect } from "react";
// import { DropzoneArea, DropzoneDialog } from "material-ui-dropzone";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import {
//   Form,
//   Col,
//   InputGroup,
//   Row,
//   Button,
//   Jumbotron,
//   Alert,
//   Badge,
// } from "react-bootstrap";
// const FileUpload = () => {
//   const [image, setImage] = useState(null);
//   const [value, setValue] = useState();

//   const nameRef = useRef();
//   const numRef = useRef();
//   const cityRef = useRef();
//   const latRef = useRef();
//   const lngRef = useRef();
//   const imgRef = useRef();
//   const catRef = useRef();

//   const [url, setUrl] = useState("");
//   const [error, setError] = useState("");
//   const [vDetails, setVDetails] = useState([]);
//   const [lat, setLat] = useState("");
//   const [vendors, setVendors] = useState([]);

//   const [lng, setLng] = useState("");
//   const [progress, setProgress] = useState(0);

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//       console.log(image);
//     }
//   };

//   return (
//     <>
//       <Form.File
//         id="custom-file"
//         name="image"
//         label="Vendor Images"
//         onChange={(e) => handleImageChange(e)}
//         custom
//       />
//       <LinearProgress
//         variant="buffer"
//         value={progress}
//         color="secondary"
//         valueBuffer={progress}
//       />
//     </>
//   );
// };

// export default FileUpload;
import React, { useState, useEffect } from "react";
import "react-dropzone-uploader/dist/styles.css";
import { useAuth } from "../.././AuthContext";

import Dropzone from "react-dropzone-uploader";
import fire from "../../../config";
import { Button } from "@material-ui/core";
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LinearProgress } from "@material-ui/core";
import firebase from "firebase";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const FileUpload = (props) => {
  const [image, setImage] = useState([]);
  const { currentUser } = useAuth();
  const [url, setUrl] = useState([]);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const createNotification = () => {
    console.log("working");
  };

  const handleChangeStatus = ({ meta }, status) => {
    setImage(meta);
  };
  const handleUpload = () => {
    const uploadTask = fire
      .storage()
      .ref(`VendorImages/${props.vendorData}/${files[0].name}`)
      .put(files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentUploaded = Math.round(
          (snapshot.bytesTransferred / image.size) * 100
        );
        setProgress(percentUploaded);
      },
      (error) => {
        console.log(error);
      },
      () => {
        fire
          .storage()
          .ref(`VendorImages/${props.vendorData}/${files[0].name}`)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
            const data = {
              url: url,
              useremail: currentUser.email,
            };
            addImageUrlToDB(data);
            toast.success("Image Uploaded!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          });
      }
    );
  };
  const addImageUrlToDB = async (data) => {
    await fire
      .firestore()
      .collection(`/VendorImages/${props.vendorData}/images`)
      .doc()
      .set(data)
      .then((v) => {});
    await fire
      .firestore()
      .collection("User")
      .doc(currentUser.email)
      .update({
        totalphotos: firebase.firestore.FieldValue.increment(1),
      });
  };
  const handleSubmit = async (files, allFiles) => {
    if (!props.vendorData) {
      setError("First Set a Vendorname");
    } else {
      handleUpload();
      setError("");
    }
  };

  return (
    <>
      {/* <Dropzone
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        autoUpload={false}
        accept="image/*"
        styles={{
          dropzone: { maxwidth: 400, height: 200 },
          dropzoneActive: { borderColor: "green" },
        }}
        inputContent="Upload Vendor Images"
        inputWithFilesContent={(files) => `${3 - files.length} more`}
      /> */}
      <section className="container">
        <div
          style={{
            textAlign: "center",
          }}
          {...getRootProps({ className: "dropzone" })}
        >
          <input {...getInputProps()} />
          <Button className="btn btn-primary"> Drag 'n' drop some files</Button>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
      <LinearProgress
        variant="buffer"
        value={progress}
        color="secondary"
        valueBuffer={progress}
      />
      {error && <Alert variant="danger">{error}</Alert>}
      <Button
        type="button"
        color="primary"
        variant="contained"
        onClick={handleSubmit}
      >
        Upload Photo
      </Button>
      <ToastContainer
        position="top-center"
        autoClose={4922}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default FileUpload;
