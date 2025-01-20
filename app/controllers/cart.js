import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    return this.model.items
      .reduce((acc, item) => acc + item.price, 0)
      .toFixed(2);
  }

  get tax() {
    return (0.12 * this.subtotal).toFixed(2);
  }

  get total() {
    return (+this.subtotal + +this.tax).toFixed(2);
  }
}
