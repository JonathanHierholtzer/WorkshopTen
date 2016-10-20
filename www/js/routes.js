angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('mesDerniersStages', {
    url: '/mesDerniersStages',
    templateUrl: 'templates/mesDerniersStages.html',
    controller: 'mesDerniersStagesCtrl'
  })

  .state('tabsController.quickView', {
    url: '/quickview',
    views: {
      'tab4': {
        templateUrl: 'templates/quickView.html',
        controller: 'quickViewCtrl'
      }
    }
  })

  .state('tabsController.messages', {
    url: '/messages',
    views: {
      'tab2': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('tabsController.rechercher', {
    url: '/rechercher',
    views: {
      'tab1': {
        templateUrl: 'templates/rechercher.html',
        controller: 'rechercherCtrl'
      }
    }
  })

  .state('crErUnCompteTudiant', {
    url: '/signupEtudiant',
    templateUrl: 'templates/crErUnCompteTudiant.html',
    controller: 'crErUnCompteTudiantCtrl'
  })

  .state('crErUnCompteEntreprise', {
    url: '/signupEntreprise',
    templateUrl: 'templates/crErUnCompteEntreprise.html',
    controller: 'crErUnCompteEntrepriseCtrl'
  })

  .state('crErUnCompte', {
    url: '/creerCompte',
    templateUrl: 'templates/crErUnCompte.html',
    controller: 'crErUnCompteCtrl'
  })

  .state('capgemini', {
    url: '/capgeministage',
    templateUrl: 'templates/capgemini.html',
    controller: 'capgeminiCtrl'
  })

  .state('tabsController.capgemini2', {
    url: '/capgeminioffre',
    views: {
      'tab1': {
        templateUrl: 'templates/capgemini2.html',
        controller: 'capgemini2Ctrl'
      }
    }
  })

  .state('aSA', {
    url: '/asastage',
    templateUrl: 'templates/aSA.html',
    controller: 'aSACtrl'
  })

  .state('tabsController.aSA2', {
    url: '/asaoffre',
    views: {
      'tab1': {
        templateUrl: 'templates/aSA2.html',
        controller: 'aSA2Ctrl'
      }
    }
  })

  .state('cGI', {
    url: '/cgistage',
    templateUrl: 'templates/cGI.html',
    controller: 'cGICtrl'
  })

  .state('tabsController.cGI2', {
    url: '/cgioffre',
    views: {
      'tab1': {
        templateUrl: 'templates/cGI2.html',
        controller: 'cGI2Ctrl'
      }
    }
  })

  .state('monCV', {
    url: '/moncv',
    templateUrl: 'templates/monCV.html',
    controller: 'monCVCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});