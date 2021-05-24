import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import fire from "../../../../config";
const useStorage = (file, name) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(`VendorImages/${name}/${file.name}`);
    const collectionRef = projectFirestore.collection(
      `/VendorImages/${name}/images`
    );

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        // const createdAt = firestore.FieldValue.serverTimestamp();
        const data = {
          url: url,
        };
        await collectionRef.doc().set(data);
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
