import {mount as mountProduct} from 'products/ProductsIndex';
import {mount as mountCart} from 'cart/CartShow';

console.log('Container!');

mountProduct(document.querySelector('#dev-products-container')); //now the code from products javascript file to the div from the container
mountCart(document.querySelector('#dev-cart-container')); //now the code from car javascript file to the div from the container