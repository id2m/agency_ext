// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    // not; if baseUrl not defined, baseUrl is the path defined in meta script : data-main
    'paths': {
      'bootstrap': 'vendor/bootstrap.3.3.7.min',
      'classie': 'vendor/classie',
      'jquery': 'vendor/jquery.2.2.0.min',
      'picturefill': 'vendor/picturefill.min',

      'throttle-debounce': 'plugin/jquery.ba-throttle-debounce.min',
      'jqBootstrapValidation': 'plugin/jquery.bootstrap-validation',
      'easing': 'plugin/jquery.easing.1.3.2',
      
      
      
      
    },
    shim: {
        'throttle-debounce': {
          deps: ['jquery'],
          exports: 'throttle-debounce'
        },
        'jqBootstrapValidation': {
          deps: ['jquery'],
          exports: 'jqBootstrapValidation'
        },
        'easing': {
          deps: ['jquery'],
          exports: 'easing'
        },
        'bootstrap': {
          deps: ['jquery'],
          exports: 'bootstrap'
        }        
    }
});

requirejs(['app/common-agency'], function () {
  requirejs(['app/main-agency-home']);
});