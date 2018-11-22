import './button.scss';
import myPng from './640x360.png';

export default function buttonFunction() {
  const myImage = new Image();
  myImage.src = myPng;
  document.body.append(myImage);
}
