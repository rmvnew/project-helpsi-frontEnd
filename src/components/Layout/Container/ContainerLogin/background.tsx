import styled from "styled-components";

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" width="900" height="600">
  <rect x="0" y="0" width="900" height="600" fill="#9fdfae83"></rect>
  <path d="M0 117L37.5 130.5C75 144 150 171 
  225 184.2C300 197.3 375 196.7 450 189C525 181.3 
  600 166.7 675 168C750 169.3 825 186.7 862.5 195.3L900 
  204L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 
  0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#f4f7f8" 
  stroke-linecap="round" stroke-linejoin="miter"></path>
</svg>
`;

const base64Svg = `data:image/svg+xml;base64,${btoa(svgContent)}`;

export const LoginBackground = styled.body`
  background-image: url(${base64Svg});
  background-size: cover;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
