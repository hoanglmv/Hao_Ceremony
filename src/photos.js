export const photoNames = [
  "IMG_5661.JPG", "IMG_5663.JPG", "IMG_5664.JPG", "IMG_5811.JPG", 
  "IMG_5812.JPG", "IMG_5813.JPG", "IMG_5814.JPG", "IMG_5818.JPG", 
  "IMG_5819.JPG", "IMG_5823.JPG", "IMG_5824.JPG", "IMG_5825.JPG", 
  "IMG_5830.JPG", "IMG_5831.JPG", "IMG_5832.JPG", "IMG_5833.JPG", 
  "IMG_5834.JPG", "IMG_5835.JPG", "IMG_5836.JPG", "IMG_5840.JPG", 
  "IMG_5841.JPG", "IMG_5842.JPG", "IMG_5843.JPG", "IMG_5844.JPG", 
  "IMG_5845.JPG", "IMG_5846.JPG", "IMG_5848.JPG", "IMG_5849.JPG", 
  "IMG_5856.JPG", "IMG_5867.JPG", "IMG_5868.JPG", "IMG_5870.JPG", 
  "IMG_5871.JPG", "IMG_5872.JPG", "IMG_5873.JPG", "IMG_5874.JPG", 
  "IMG_5884.JPG", "IMG_5885.JPG", "IMG_5888.JPG", "IMG_5896.JPG"
];

export const photos = photoNames.map((name, index) => ({
  id: index + 1,
  url: `/data/${name}`,
  title: `Memory #${index + 1}`,
  date: `Class of '26`
}));
