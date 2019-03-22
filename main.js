const perspectiveSquare = document.querySelector('#square');

document.addEventListener('mousemove', (e) => {
  const xRotation = e.pageY / 40 + 30;
  const zRotation = e.pageX / 40 - 18;

  perspectiveSquare.style.transform = `perspective(600px)
                                       rotateX(${xRotation}deg)
                                       rotateZ(${zRotation}deg)`;
});

const pickRandomColorFromList = () => {
  const POSSIBLE_COLORS = [
    'tomato', 'skyblue', 'lightgray', 'orange',
    'black', 'yellow', 'yellowgreen', 'white'
  ];

  const possibleNextColors = POSSIBLE_COLORS.filter(
    color => color != perspectiveSquare.style.backgroundColor
  );
  const randomColorIndex = Math.floor(Math.random() * possibleNextColors.length);
  
  return possibleNextColors[randomColorIndex];
};

perspectiveSquare.addEventListener('click', (e) => {
  perspectiveSquare.style.backgroundColor = pickRandomColorFromList();
});
