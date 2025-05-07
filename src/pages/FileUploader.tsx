import { Box } from '@mui/material';
// import FileUploaderRaw from './FileUploaderRaw';
import ReactDropzone from './ReactDropzone';
const FileUploader = () => {

  return (
    <Box>
        {/* <FileUploaderRaw/> */}
        <ReactDropzone/>
    </Box>
  );
};

export default FileUploader;