import React, { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSelectedFile = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleUploadFile = (event) => {

    }

    return (
        <Box className="upload-image">
            <Input type="file" onChange={handleSelectedFile}></Input>
        </Box>
    )
}