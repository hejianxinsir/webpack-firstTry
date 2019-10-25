import _ from 'lodash';
import './style.css';
import j from 'jquery'
import module1 from './module1'
module1()

function component() {
  var element = j('<div></div>');

  element.html(_.join(['hello', 'webpack'], ' '));
  return element.get(0);
}

document.body.appendChild(component());
