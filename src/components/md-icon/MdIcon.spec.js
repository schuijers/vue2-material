import Vue from 'vue';
import { assert } from 'chai';

import MdIcon from './MdIcon.vue';

describe('The MdIcon component', () => {
  it('should render a placeholder for an icon', () => {
    const vm = new Vue({
      components: {
        MdIcon
      },
      template: '<md-icon>mood</md-icon>'
    }).$mount();

    assert.equal(vm.$el.outerHTML, '<i class="material-icons">mood</i>');
  });
});
