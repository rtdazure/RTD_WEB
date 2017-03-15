module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      component: 'app'
    });
    /*
    .state('technologies', {
      url: '/technologies',
      component: 'technologies'
    })
    .state('messages', {
      url: '/messages',
      component: 'messages'
    })
    .state('questions', {
      url: '/questions',
      component: 'questions'
    });
    */
}
