import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.model.items.reduce((acc, item) => acc + item.price, 0);
  }

  get tax() {
    return 0.12 * this.subtotal;
  }

  get total() {
    return +this.subtotal + +this.tax;
  }
}
