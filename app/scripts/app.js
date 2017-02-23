//*******************************************************************************************************
// BASE APP MODULE - DESIGN INSPIRATION http://productdisrupt.com/ **************************************
var app = angular.module('app', ['ui.router', 'ngAnimate']);

//*******************************************************************************************************
// APP CONFIGURATION ************************************************************************************
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // ROUTE DETAILS ******************************************************************
    $urlRouterProvider.otherwise('/AboutCorrinaBlack');

    $stateProvider
        .state('AboutCorrinaBlack', {
            url: '/AboutCorrinaBlack',
            templateUrl: '/partials/about.html'
        })
        .state('MicrosoftAccelerator', {
            url: '/MicrosoftAccelerator',
            templateUrl: '/partials/accelerator.html',
            controller: 'acceleratorController'
        })
        .state('MicrosoftIOT', {
            url: '/MicrosoftIOT',
            templateUrl: '/partials/IOT.html',
            controller: 'iotController'
        })
        .state('WindowsPhone', {
            url: '/WindowsPhone',
            templateUrl: '/partials/phone.html',
            controller: 'phoneController'
        })
        .state('PhoneDevCenter', {
            url: '/PhoneDevCenter',
            templateUrl: '/partials/center.html',
            controller: 'centerController'
        })
        .state('PhoneDevTools', {
            url: '/PhoneDevTools',
            templateUrl: '/partials/tools.html',
            controller: 'toolsController'
        })
        .state('SilverlightRIA', {
            url: '/SilverlightRIA',
            templateUrl: '/partials/ria.html',
            controller: 'riaController'
        })
        .state('VisualStudio', {
            url: '/VisualStudio',
            templateUrl: '/partials/vs.html',
            controller: 'vsController'
        })
        .state('DesignCodeSpeaking', {
            url: '/DesignCodeSpeaking',
            templateUrl: '/partials/freeform.html',
            controller: 'freeformController'
        })
});

//*******************************************************************************************************
// CURRENT STATE - http://jasonwatmore.com/post/2016/01/20/angular-nganimate-tutorial-with-ui-router ****
// ************* - https://css-tricks.com/animations-the-angular-way/ ***********************************
// ADD ng-class="{active: currentState.match('^MicrosoftAccelerator')}" TO CONTAINER FOR UI-SREF*********
// ADD .ng-enter { transition: .5s; opacity: 0; } .ng-enter-active { opacity: 1; } TO CSS ***************
app.run(function ($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.currentState = toState.name;  // used for page transition animation to track state
        });
});

//*******************************************************************************************************
// ACCELERATOR TEMPLATES - https://plnkr.co/edit/?p=preview *********************************************
app.directive('headerTemplate', function () {
    return {
        templateUrl: '/partials/header.html'
    };
});
app.directive('subheader1Template', function () {
    return {
        templateUrl: '/partials/subheader_1.html'
    };
});
app.directive('subheader3Template', function () {
    return {
        templateUrl: '/partials/subheader_3.html'
    };
});
app.directive('subheader5Template', function () {
    return {
        templateUrl: '/partials/subheader_5.html'
    };
});
app.directive('subheader6Template', function () {
    return {
        templateUrl: '/partials/subheader_6.html'
    };
});
app.directive('subheaderalt6Template', function () {
    return {
        templateUrl: '/partials/subheader_6_alt.html'
    };
});
app.directive('footerTemplate', function () {
    return {
        templateUrl: '/partials/footer.html'
    };
});

//*******************************************************************************************************
// CONTROLLERS TO INSERT SCRIPT AT END OF BODY FOR EACH PAGE ********************************************
app.controller('acceleratorController', function ($scope) {
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('iotController', function ($scope) {
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('phoneController', function ($scope) {
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('centerController', function ($scope) {
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('toolsController', function ($scope) {
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('riaController', function ($scope) {
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('vsController', function ($scope) {
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('freeformController', function ($scope) {
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});