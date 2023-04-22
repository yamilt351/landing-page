import piza from '../images/pizza.webp';
import piza2 from '../images/pizza.jpg';
import wine from '../images/vino-argentino3.jpg';

 function SetNewImages(setCurrentImage) {
  const images = [piza, piza2, wine];
  let counter = 1;
  const intervalId = setInterval(() => {
    setCurrentImage(images[counter % images.length]);
    counter++;
  }, 5000);
  return () => clearInterval(intervalId);
}

export default SetNewImages
