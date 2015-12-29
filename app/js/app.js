var eventsApp = angular.module('eventsApp', [
  'ngRoute', 
  'eventControllers',
  'eventsServices'  
]);

eventsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardCtrl'
      }).
      when('/events', {
        templateUrl: 'partials/events.html',
        controller: 'eventsCtrl'
      }).
      when('/eventsDashboard', {
        templateUrl: 'partials/eventsDashboard.html',
        controller: 'eventsDashboardCtrl'
      }).
      when('/createEvent', {
        templateUrl: 'partials/createEvent.html',
        controller: 'createEventCtrl'
      }).
      when('/createTicket', {
        templateUrl: 'partials/createTicket.html',
        controller: 'createTicketCtrl'
      }).
      when('/events/:eventId/editEvent', {
        templateUrl: 'partials/editEvent.html',
        controller: 'editEventCtrl'
      }).
      when('/events/:eventId/ticket', {
        templateUrl: 'partials/editTicket.html',
        controller: 'editTicketCtrl'
      }).
      when('/events/:eventId/', {
        templateUrl: 'partials/eventName.html',
        controller: 'eventNameCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
}]);