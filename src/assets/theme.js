import '../index.css';
const color = {
  white: '#ffffff',
  lightGray: '#E1E1E1',
  darkGray: '#1F2528',
  black: '#000000',
  opacity: 'rgba(0, 0, 0, 0.10)',
};
const font = {
  default: 'KOTRAHOPE',
  user: 'KyoboHandwriting2021sjy',
  point: 'Shadows Into Light',
};
const weight = {
  bold: '600',
  semi: '500',
  regular: '400',
};
const shadow = {
  default: `box-shadow: 0px 4px 4px 0px ${common.color.opacity}`,
};
const radius = {
  rounder: '25px',
  round: '10px',
};

const theme = { color, font, weight, shadow, radius };

export default theme;
