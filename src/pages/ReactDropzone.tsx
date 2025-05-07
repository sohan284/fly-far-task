import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

const ReactDropzone = () => {
  const [files, setFiles] = useState<File[]>([]);
  const dropRef = useRef(null);

  // Handle drop or file select
const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev: File[]) => [...prev, ...acceptedFiles]);
}, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: false,
    noKeyboard: false,
  });

  // Handle Ctrl + V screenshot paste
  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const items: DataTransferItemList | undefined = event.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.indexOf("image") !== -1) {
          const file: File | null = item.getAsFile();
          if (file) {
            setFiles((prev: File[]) => [...prev, file]);
          }
        }
      }
    };
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      {/* Drag & Drop Area */}
      <Paper
        {...getRootProps()}
        ref={dropRef}
        elevation={3}
        sx={{
          border: "2px dashed #888",
          padding: 4,
          textAlign: "center",
          borderRadius: 2,
          backgroundColor: isDragActive ? "#f0f0f0" : "#fff",
        }}
      >
        <input {...getInputProps()} />
        <Typography variant="body1">
          Drag & drop files here, click to upload, or paste screenshot (Ctrl+V)
        </Typography>
      </Paper>

      {/* Uploaded Files */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Uploaded Files:
        </Typography>
        <List>
          {files.map((file, index) => (
            <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${file.name} - ${(file.size / 1024).toFixed(2)} KB`}
              />
              {file.type.startsWith("image/") && (
                <Box sx={{ marginLeft: 2 }}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    style={{ width: "100px", borderRadius: "8px" }}
                  />
                </Box>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ReactDropzone;