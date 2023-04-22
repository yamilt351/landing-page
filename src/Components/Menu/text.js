function SetNewText(setCurrentText) {
  const text = [
    'Imagínense una pizza con una masa crujiente y dorada, cubierta con una capa generosa de salsa de tomate fresca y especiada, adornada con una deliciosa mezcla de queso mozzarella y parmesano, y coronada con una variedad de ingredientes frescos y sabrosos. ¡Eso es lo que ofrecemos aquí en nuestra pizzería!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendi voluptatum provident unde itaque accusantium minima',
    'Desde la clásica Margherita italiana hasta la atrevida pizza de pepperoni y jalapeños, nuestra selección de pizzas es incomparable en sabor y calidad. Nuestros clientes no pueden resistirse a volver una y otra vez para probar diferentes combinaciones y sabores.',
  ];

  let counter = 1;
  const intervalId = setInterval(() => {
    setCurrentText(text[counter % text.length]);
    counter++;
  }, 5000);
  return () => clearInterval(intervalId);
}

export default SetNewText;
