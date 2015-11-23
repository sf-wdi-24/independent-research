$(document).ready(function(){

var s = slidr.create('listDiv', {
  after: function(e) { console.log('in: ' + e.in.slidr); },
  before: function(e) { console.log('out: ' + e.out.slidr); },
  breadcrumbs: true,
  direction: 'vertical',
  fade: true,
  keyboard: true,
  overflow: true,
  theme: '#222',
  timing: { 'linear': '0.5s ease-in' },
  touch: true,
  transition: 'linear'
});
s.start();
s.add('h', ['one', 'two', 'three', 'one']);
s.auto();

});

