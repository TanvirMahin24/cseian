import React from "react";
import { useDropzone } from "react-dropzone";
import styles from "./ImageDropZone.module.css";

const ImageDropZone = (props) => {
  const { setFieldValue, setFiles, onSelectFile } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: "image/jpeg, image/png,image/jpg",
    onDrop: (acceptedFiles) => {
      onSelectFile(acceptedFiles[0]);
      setFieldValue("files", acceptedFiles[0]);
      setFiles(URL.createObjectURL(acceptedFiles[0]));
    },
  });
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <div
        className={`${styles.input__wrapper} ${
          isDragActive ? `${styles.active}` : ""
        }`}
      >
        <span className="d-block text-primary h5" style={{ cursor: "pointer" }}>
          Upload a recognizable photo
        </span>
        <span className="d-block">
          Click here or Drag and Drop an square image.
        </span>
      </div>
    </div>
  );
};

export default ImageDropZone;
