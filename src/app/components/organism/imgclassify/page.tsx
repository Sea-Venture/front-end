"use client";

import React, { useState, useEffect } from "react";
import { Container,  ThemeProvider, createTheme, Box,  Button } from "@mui/material";
import FileUpload from "../../molecule/imgclassify/fileUpload";
import SeaCreatureDetails from "../../molecule/imgclassify/seaCreatureDetails";
import { fetchSeaCreatureDescription } from "../../../../../utils/GeminiAPI";
import Header from '../../atom/imgclassify/header';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#007BFF" },
    background: { default: "#E3F2FD" },
  },
});

const SeaCreaturePredictor: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [seaCreatureName, setSeaCreatureName] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  // Handle image selection
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  // Generate image preview safely
  useEffect(() => {
    if (image) {
      const previewUrl = URL.createObjectURL(image);
      setImagePreview(previewUrl);
      return () => URL.revokeObjectURL(previewUrl); // Cleanup
    }
  }, [image]);

  // Fetch classification and description
  const fetchSeaCreatureData = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("http://127.0.0.1:5000/classify_image", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    const predictedLabel = result.Predicted_Label;
    setSeaCreatureName(predictedLabel);
    setDescription(await fetchSeaCreatureDescription(predictedLabel));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ display: "flex", minHeight: "100vh", p: 4 }}>
        <Box sx={{ flex: 1, p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 2 }}>
        <Header title="Upload & Classify" />
        <FileUpload onChange={handleImageUpload} />
          <Button variant="contained" sx={{ mt: 2, width: "100%" }} onClick={fetchSeaCreatureData}>
            Predict
          </Button>
        </Box>

        <Box sx={{ flex: 2, ml: 4, p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 2 }}>
          {imagePreview && <Box component="img" src={imagePreview} alt="Preview" sx={{ height: "300px", borderRadius: 2, mb: 2 }} />}
          <SeaCreatureDetails seaCreatureName={seaCreatureName} description={description} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SeaCreaturePredictor;
