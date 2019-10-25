import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import module1 from './module1'
import module2 from './module2'
module1()
module2()

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')
  element.classList.add('janson')

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
