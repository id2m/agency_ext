define(['jquery', 'classie', 'bootstrap', 'easing', 'throttle-debounce'], function($,classie) {

    

    /*!
     * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
     * Code licensed under the Apache License v2.0.
     * For details, see http://www.apache.org/licenses/LICENSE-2.0.
    */
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('div.modal').on('show.bs.modal', function() {
        var modal = this;
        var hash = modal.id;
        window.location.hash = hash;
        window.onhashchange = function() {
            if (!location.hash){
                $(modal).modal('hide');
            }
        }
    });

    var cbpAnimatedHeader = function() {

        var docElem = document.documentElement,
            header = document.querySelector( '.navbar-fixed-top' ),
            didScroll = false,
            changeHeaderOn = 100;

        function init() {
            window.addEventListener( 'scroll', function( event ) {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 250 );
                }
            }, false );
        }
        function scrollPage() {
            var sy = scrollY();
            if ( sy >= changeHeaderOn ) {
                classie.add( header, 'navbar-shrink' );
            }
            else {
                classie.remove( header, 'navbar-shrink' );
            }
            didScroll = false;
        }
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();
    };

    (function() {
        'use strict';
        document.createElement('picture');
    })();
    

    $(document).ready(function(){

        cbpAnimatedHeader();


    });




});