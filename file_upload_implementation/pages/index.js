import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

export default function Home() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [filePreview, setFilePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'application/pdf': []
    },
    maxSize: 5 * 1024 * 1024,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setValue('file', acceptedFiles);
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        if (file.type.startsWith('image/')) {
          const previewUrl = URL.createObjectURL(file);
          setFilePreview({ url: previewUrl, name: file.name, type: file.type });
        } else if (file.type === 'application/pdf') {
          setFilePreview({ name: file.name, type: file.type });
        } else {
          setFilePreview(null);
        }
      }
    }
  });

  const onSubmit = async (data) => {
    // Manual file validation
    if (!data.file || data.file.length === 0) {
      setUploadResult({ success: false, message: 'Please select a file first' });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setUploadResult(null);
    try {
      const formData = new FormData();
      formData.append('file', data.file[0]);
      formData.append('name', data.name);
      const response = await axios.post('http://localhost:8000/api/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentage);
        }
      });
      setUploadResult({ success: true, message: 'File uploaded successfully!', data: response.data });
    } catch (error) {
      console.error('Upload error:', error);
      setUploadResult({ success: false, message: error.response?.data?.error || 'Upload failed' });
    } finally {
      setIsUploading(false);
    }
  };

  const pageStyle = { minHeight: '100vh', background: '#f3f4f6', padding: '40px 16px', fontFamily: 'Arial, sans-serif' };
  const containerStyle = { maxWidth: '600px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '32px' };
  const headingStyle = { fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' };
  const fieldStyle = { marginBottom: '16px' };
  const labelStyle = { display: 'block', fontWeight: '600', marginBottom: '6px' };
  const inputStyle = { width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box', fontSize: '14px' };
  const dropzoneStyle = {
    border: '2px dashed',
    borderColor: isDragActive ? '#3b82f6' : '#9ca3af',
    background: isDragActive ? '#eff6ff' : '#f9fafb',
    borderRadius: '8px',
    padding: '40px 20px',
    textAlign: 'center',
    cursor: 'pointer'
  };
  const errorStyle = { color: '#dc2626', fontSize: '13px', marginTop: '4px' };
  const previewStyle = { border: '1px solid #d1d5db', borderRadius: '4px', padding: '12px', marginTop: '8px' };
  const buttonStyle = {
    width: '100%',
    padding: '12px',
    background: isUploading ? '#9ca3af' : '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: isUploading ? 'not-allowed' : 'pointer',
    marginTop: '8px'
  };
  const successStyle = { marginTop: '16px', padding: '16px', background: '#d1fae5', color: '#065f46', borderRadius: '4px' };
  const failureStyle = { marginTop: '16px', padding: '16px', background: '#fee2e2', color: '#991b1b', borderRadius: '4px' };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>File Upload</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={fieldStyle}>
            <label style={labelStyle}>Your Name:</label>
            <input type="text" {...register('name', { required: 'Name is required' })} style={inputStyle} placeholder="Enter your name" />
            {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Upload File:</label>
            <div {...getRootProps()} style={dropzoneStyle}>
              <input {...getInputProps()} />
              {isDragActive ? <p>Drop the file here...</p> : <p>Drag and drop a file here, or click to select</p>}
              <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px' }}>Accepted: JPEG, PNG, PDF (max 5MB)</p>
            </div>
          </div>
          {filePreview && (
            <div style={fieldStyle}>
              <label style={labelStyle}>Preview:</label>
              <div style={previewStyle}>
                {filePreview.type?.startsWith('image/') ? (
                  <img src={filePreview.url} alt={filePreview.name} style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '4px' }} />
                ) : filePreview.type === 'application/pdf' ? (
                  <div style={{ display: 'flex', alignItems: 'center', padding: '12px', background: '#f3f4f6', borderRadius: '4px' }}>
                    <span style={{ fontSize: '24px', marginRight: '12px' }}>PDF</span>
                    <span>{filePreview.name}</span>
                  </div>
                ) : (
                  <div>File selected: {filePreview.name}</div>
                )}
              </div>
            </div>
          )}
          {isUploading && (
            <div style={fieldStyle}>
              <div style={{ width: '100%', height: '10px', background: '#e5e7eb', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: uploadProgress + '%', height: '100%', background: '#3b82f6' }}></div>
              </div>
              <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>Uploading: {uploadProgress}%</p>
            </div>
          )}
          <button type="submit" disabled={isUploading} style={buttonStyle}>
            {isUploading ? 'Uploading...' : 'Upload File'}
          </button>
        </form>
        {uploadResult && (
          <div style={uploadResult.success ? successStyle : failureStyle}>
            <p style={{ fontWeight: '600', margin: 0 }}>{uploadResult.message}</p>
            {uploadResult.success && uploadResult.data && (
              <div style={{ fontSize: '13px', marginTop: '8px' }}>
                <p>File: {uploadResult.data.originalName}</p>
                <p>Size: {(uploadResult.data.size / 1024).toFixed(2)} KB</p>
                <p>URL: <a href={'http://localhost:8000' + uploadResult.data.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>View File</a></p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}