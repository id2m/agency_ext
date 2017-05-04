// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    // not; if baseUrl not defined, baseUrl is the path defined in meta script : data-main
    'paths': {
      // 'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
      'jquery': 'vendor/jquery.2.2.0.min',
      // 'lunr': 'vendor/lunr.min',
      // 'moment': 'vendor/moment-with-fr.2.12.0.min',
      // 'slick': '//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min',
      'picturefill': 'vendor/picturefill.min',
      // 'responsive-nav': 'vendor/responsive-nav.min',
      // 'slidebars': 'vendor/slidebars',
      'throttle-debounce': 'plugin/jquery.ba-throttle-debounce.min',
      'easing': 'plugin/jquery.easing.1.3.2',
      'bootstrap': 'vendor/bootstrap.3.3.7.min',
      'jqBootstrapValidation': 'plugin/jquery.bootstrap-validation',
      'classie': 'vendor/classie'
      
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

// requirejs(['app/common']); //req jquery,picturefill

// requirejs(['app/common-sticky']); //req jquery,sticky,throttle-debounce


// // Load the main app module to start the app
// requirejs(['app/main-home']);


//https://github.com/danzel/Leaflet
//http://stackoverflow.com/questions/15471088/requirejs-why-and-when-to-use-shim-config

//Load common code that includes config, then load the app logic for this page.
// requirejs(['app/common'], function (common) {
//   requirejs(['app/common-sticky'], function (commonSticky) {
//       requirejs(['app/main-home']);
//   });
// });

// requirejs(['app/common'], function () {
//   // requirejs(['app/common-sticky'], function () {
//   requirejs(['app/home-event-coll-ext'], function () {
//     requirejs(['app/home-slider-inf-coll-ext'], function () {
//       requirejs(['app/main-home']);
//     });
//   });
// });
requirejs(['app/common-agency'], function () {
  requirejs(['app/main-agency-home']);
});