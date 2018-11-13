import './button.scss';
import myPng from './640x360.png';

export function buttonFunction() {

  let myImage = new Image();
  myImage.src = 'dist/' + myPng;
  document.body.append(myImage);
}
