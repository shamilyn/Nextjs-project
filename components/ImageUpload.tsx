// components/ImageUpload.tsx
import React, { useState, useEffect } from 'react';
import { Button, Input, Card, CardContent, CardMedia, Typography } from '@mui/material';
import {useEmployeeStore} from '../store/store';

interface ImageUploadProps {
  onImageUpload: (image: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { selectedEmployee, setSelectedEmployee } = useEmployeeStore();

  useEffect(() => {
    // Update the form data when selectedEmployee changes
    if (selectedEmployee) {
      setSelectedImage(selectedEmployee.avatar);
    }
  }, [selectedEmployee]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setSelectedImage(imageUrl);
      // Call the callback function with the image URL
      onImageUpload(imageUrl);
    }
  };

  return (
    <div>
      <Input
        type="file"
        // accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="image-upload-input"
      />
      <label htmlFor="image-upload-input">
        <Button variant="outlined" component="span">
          Select Image
        </Button>
      </label>
      {selectedImage && (
        <Card sx={{ maxWidth: 345, marginTop: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={selectedImage}
            alt="Selected Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Selected Image
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageUpload;
