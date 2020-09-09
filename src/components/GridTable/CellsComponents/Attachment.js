import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const AttachmentData = () => {
    
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
           console.log(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
          }
        },
      };

      return (
        <Dragger {...props} icon={<UploadOutlined />}>
            Drop files here
        </Dragger>
    )
}
export default AttachmentData;