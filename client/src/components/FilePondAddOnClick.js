import React, { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FilePondAddOnClick() {
  const [files, setFiles] = useState([]);

  // I could automaticaly her do the axios to add the image to database
  const handlePhotoUploaded = (files) => {
    console.log(files[0].file);
    files.forEach((f) => {
      console.log(f.file);
    });
    alert("called");
    // this is getting called twice
    // when I upload a photo
  };

  // I could wait until user click a button
  const handleClick = () => {
    console.log(files);
    files.forEach((f) => {
      console.log(f.file);
    });
  };
  return (
    <div className="App">
      <input />
      <FilePond
        files={files}
        allowReorder={true}
        allowMultiple={false}
        onupdatefiles={setFiles}
        // onupdatefiles={handlePhotoUploaded}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />

      <button onClick={handleClick}>Add to Database</button>
    </div>
  );
}

export default FilePondAddOnClick


