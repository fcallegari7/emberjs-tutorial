import { module, test } from 'qunit';
import { visit, currentURL, click} from '@ember/test-helpers';
import { setupApplicationTest } from 'emberjs-tutorial/tests/helpers';

module('Acceptance | shopping', function (hooks) {
  setupApplicationTest(hooks);

  test('it should be able to add item to shopping cart', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');

    await click('[data-test-product="1"]');

    assert.equal(currentURL(), '/item/1');

    await click('[data-test-add-to-cart]');

    assert.dom('[data-test-cart-count]').hasText('1');
  });
});
