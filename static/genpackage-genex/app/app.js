'use strict';


angular.module('genex', ['ngRoute', 'ngGrid', 'genjs.services', 'genjs.table',
    'genex.controllers', 'blueimp.fileupload'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
        .when('/', {
            templateUrl: '/static/genpackage-genex/partials/genex.html',
            controller: 'GenExCtrl'
        })
        .when('/:projectId/', {
            templateUrl: '/static/genpackage-genex/partials/genex.html',
            controller: 'GenExCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }])
    .constant('title', 'GenEx')
;
