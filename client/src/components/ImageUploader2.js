import React, { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import axios from 'axios'

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Button, Form, Input } from "semantic-ui-react";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function ImageUploader2() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');

  // I could automaticaly her do the axios to add the image to database
  const handlePhotoUploaded = (files) => {
    console.log(files[0].file);
    files.forEach((f) => {
      console.log(f.file);
    });
    // this is getting called twice
    // when I upload a photo
  };

  // I could wait until user click a button
  const handleClick = async () => {

  try{
    let data = new FormData()
    data.append('file', files[0].file)
    data.append('name1', name)
    let res = await axios.post(`/api/images/upload2?name2=${name}`, data)
    console.log(res.data)
  } catch(err){
    alert(err)
    console.log(err)
    console.log(err.response)
  }

     
  };
  return (
    <div className="App" style={{margin:'20px'}}>
      <Form>
          <Input 
            value={name} 
            label='name' 
            onChange={(e)=>{setName(e.target.value)}}
            />
      <FilePond
        files={files}
        allowReorder={true}
        allowMultiple={false}
        onupdatefiles={setFiles}
        // onupdatefiles={handlePhotoUploaded}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <Button onClick={handleClick}>Add to Database</Button>
      </Form>

    </div>
  );
}

export default ImageUploader2


