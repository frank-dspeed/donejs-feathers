import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './page-auth.less!';
import template from './page-auth.stache!';

export const ViewModel = DefineMap.extend({
  page: 'any', // bound to the page in the AppState.
});

export default Component.extend({
  tag: 'page-auth',
  ViewModel,
  template
});
