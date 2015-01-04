import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: config.wordpress.host,
  namespace: config.wordpress.namespace || 'wp-json'
});
