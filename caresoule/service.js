const express = require('express');
const axios = require('axios');
const app = express();

const carouselData = [
  { imageUrl: 'image1.jpg', title: 'Title 1', subtitle: 'Subtitle 1' },
  { imageUrl: 'image2.jpg', title: 'Title 2', subtitle: 'Subtitle 2' },
  // Add more carousel items as needed
];

app.get('/api/data', (req, res) => {
  res.json(carouselData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
