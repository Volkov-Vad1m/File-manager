import { ChangeEvent, useState } from 'react';
import axios from "axios";

const FileUploadSingle = () => {
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        const formData = new FormData();

        // Update the formData object
        formData.append("file", file);
        formData.append("fileName", file.name);

        // Details of the uploaded file

        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:8080/api/v1/upload", formData)
            .then()
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />

            <div>{file && `${file.name} - ${file.type}`}</div>

            <button onClick={handleUploadClick}>Upload</button>
        </div>
    );
}

export default FileUploadSingle;