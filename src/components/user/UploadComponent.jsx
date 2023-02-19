import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadComponent = (props) => {
  const { setFieldValue } = props;
  const { setSelectedImage } = props;
  const [file, selectedFile] = useState("");

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#38BDF8",
    borderStyle: "dashed",
    color: "#fff",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    accept: "image/jpeg , image/jpg",
    onDrop: (acceptedFiles) => {
      setFieldValue("image", acceptedFiles[0]);
      console.log(acceptedFiles[0].name);
      setSelectedImage(acceptedFiles[0]);
      selectedFile(acceptedFiles[0].name);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div>
      {}
      <div {...getRootProps({ className: "dropzone", style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p className="font-bold text-warning">
            {file == ""
              ? " Drag and drop payment screenshot here, or click to select image"
              : ` Selected File : ${file}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
