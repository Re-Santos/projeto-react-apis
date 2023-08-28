import colorsData from './colors.json';

// export const getColors = (type) => {
//   return colorsData[type] || "#8A8A8A"; 
// };


export const getColors = (type) => {
  return colorsData[type.toLowerCase()] || "#8A8A8A";
};