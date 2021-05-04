/* global FlipDown */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';
import { guidFor } from '@ember/object/internals';

import moment from 'moment';

function noOp () { }

export default class FlipDownComponent extends Component {
  @action
  didInsert (element) {
    element.id = guidFor (element);

    this._flipdown = new FlipDown (this.args.until, element.id, this.options);
    this._flipdown.start ().ifEnded (() => this.ended ());
  }

  get options () {
    return {
      theme: this.theme,
      headings: this.headings
    };
  }

  get theme () {
    return this.args.theme || 'light';
  }

  get headings () {
    return this.args.headings || ['Days', 'Hours', 'Minutes', 'Seconds'];
  }

  get ended () {
    return this.args.ended || noOp;
  }
}
