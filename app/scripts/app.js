//*******************************************************************************************************
// BASE APP MODULE - DESIGN INSPIRATION http://productdisrupt.com/ **************************************
var app = angular.module('app', ['ui.router']);

//*******************************************************************************************************
// APP CONFIGURATION ************************************************************************************
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // ROUTE DETAILS ******************************************************************
    $urlRouterProvider.otherwise('/AboutMe');

    $stateProvider
        .state('AboutMe', {
            url: '/AboutMe',
            templateUrl: '/partials/about.html'
        })
        .state('MicrosoftAccelerator', {
            url: '/MicrosoftAccelerator',
            templateUrl: '/partials/accelerator.html',
            controller: 'acceleratorController'
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
        .state('SilverlightEmbedded', {
            url: '/SilverlightEmbedded',
            templateUrl: '/partials/embedded.html',
            controller: 'embeddedController'
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
// CONTROLLERS ******************************************************************************************
app.controller('acceleratorController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('phoneController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('centerController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('toolsController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('embeddedController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('riaController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('vsController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});
app.controller('freeformController', function ($scope) {
    // INSERTS SCRIPT AT END OF BODY
    $scope.sourceUrl = '/scripts/niceScroll_Script.js';
    $("<script>").attr({ src: $scope.sourceUrl }).appendTo("body");
});