 const backgroundColors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
  ];

  const getRandomColor = () => {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  };

export default getRandomColor;