//*******************************************************************************************************
// BASE APP MODULE - DESIGN INSPIRATION http://productdisrupt.com/ **************************************
var app = angular.module('app', ['ui.router', 'ngAnimate']);

//*******************************************************************************************************
// APP CONFIGURATION ************************************************************************************
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // ROUTE DETAILS ******************************************************************
    $urlRouterProvider.otherwise('/about_corrina_black');

    $stateProvider
        .state('AboutCorrinaBlack', {
            url: '/about_corrina_black',
            templateUrl: '/partials/about.html'
        })
        .state('MicrosoftAccelerator', {
            url: '/microsoft_accelerator',
            templateUrl: '/partials/accelerator.html',
            controller: 'acceleratorController'
        })
        .state('MicrosoftIOT', {
            url: '/microsoft_iot',
            templateUrl: '/partials/IOT.html',
            controller: 'iotController'
        })
        .state('WindowsPhone', {
            url: '/windows_phone',
            templateUrl: '/partials/phone.html',
            controller: 'phoneController'
        })
        .state('PhoneDevCenter', {
            url: '/windows_phone_dev_center',
            templateUrl: '/partials/center.html',
            controller: 'centerController'
        })
        .state('PhoneDevTools', {
            url: '/windows_phone_dev_tools',
            templateUrl: '/partials/tools.html',
            controller: 'toolsController'
        })
        .state('SilverlightRIA', {
            url: '/silverlight_ria_platform',
            templateUrl: '/partials/ria.html',
            controller: 'riaController'
        })
        .state('VisualStudio', {
            url: '/visual_studio',
            templateUrl: '/partials/vs.html',
            controller: 'vsController'
        })
        .state('DesignCodeSpeaking', {
            url: '/creative_pursuits',
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