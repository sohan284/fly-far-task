import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

const FileUploaderRaw = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

interface FileWithPreview extends File {
    preview?: string;
}

const handleFile = (file: FileWithPreview | null): void => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        console.log('File data URL:', reader.result);
        setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
};

interface PasteEvent extends ClipboardEvent {
    clipboardData: DataTransfer & {
        items: DataTransferItemList;
    };
}

const handlePaste = (e: ClipboardEvent): void => {
    const pasteEvent = e as PasteEvent;
    const items = pasteEvent.clipboardData?.items || [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === 'file' && item.type.startsWith('image/')) {
            const file = item.getAsFile();
            if (file) {
                handleFile(file);
            }
        }
    }
};
    window.addEventListener('paste', (e) => handlePaste(e as ClipboardEvent));
  useEffect(() => {
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
        handleFile(files[i] as FileWithPreview);
    }
};

const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
};

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
        handleFile(files[0] as FileWithPreview);
    }
};

  return (
    <Box sx={{ padding: 4, fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom>
        Upload Image
      </Typography>

      {/* Manual Upload */}
      <Button
        variant="contained"
        component="label"
        sx={{ marginBottom: 2 }}
      >
        Choose File
        <input
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          hidden
        />
      </Button>

      {/* Drag & Drop Area */}
      <Paper
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        elevation={3}
        sx={{
          marginTop: 2,
          padding: 4,
          border: '2px dashed gray',
          textAlign: 'center',
          borderRadius: 2,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="body1" color="textSecondary">
          Drag & Drop your image here
        </Typography>
      </Paper>

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ marginTop: 2 }}
      >
        Or press <strong>Ctrl + V</strong> to paste a screenshot
      </Typography>

      {imageUrl && (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Preview:</Typography>
          <img
            src={imageUrl}
            alt="Preview"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginTop: '10px',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default FileUploaderRaw;