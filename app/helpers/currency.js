import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(params, named = {}) {
    // first arg is array of values
    // second arg is an object
    const [number] = params;
    const { sign = "$" } = named;
    const dollars = Math.floor(number);
    let cents = Math.floor(number * 100 % 100);

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }

    return `${sign}${dollars}.${cents}`
  }
}
