import Route from '@ember/routing/route';
import moment from 'moment';

export default class IndexRoute extends Route {
  setupController (controller) {
    super.setupController (...arguments);

    controller.until = moment ().add (5, 'days').unix ();
  }
}
