import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const UploadPage = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the dropped files, e.g., upload to a server
    console.log('Accepted Files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-6">Document Upload Page</h1>
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed ${
          isDragActive ? 'bg-gray-200' : 'bg-gray-100'
        } text-center cursor-pointer`}
      >
        <input {...getInputProps()} />
        <p>Drag and drop your documents here, or click to select files</p>
      </div>
    </div>
  );
};

export default UploadPage;
