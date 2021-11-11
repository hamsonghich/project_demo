$(document).ready(function() {

})


jQuery(document).ready(function($) {
    var owlBest_Selling = $('#owlBest_Selling');
    owlBest_Selling.on('initialize.owl.carousel initialized.owl.carousel ' +
        'initialize.owl.carousel initialize.owl.carousel ' +
        'resize.owl.carousel resized.owl.carousel ' +
        'refresh.owl.carousel refreshed.owl.carousel ' +
        'update.owl.carousel updated.owl.carousel ' +
        'drag.owl.carousel dragged.owl.carousel ' +
        'translate.owl.carousel translated.owl.carousel ' +
        'to.owl.carousel changed.owl.carousel',
        function(e) {
            $('.' + e.type)
                .removeClass('secondary')
                .addClass('success');
            window.setTimeout(function() {
                $('.' + e.type)
                    .removeClass('success')
                    .addClass('secondary');
            }, 500);
        });
    owlBest_Selling.owlCarousel({
        loop: true,
        nav: true,
        lazyLoad: true,
        margin: 10,
        video: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            960: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });

    var listProduct_NhuaDanpla=$('#listProduct_NhuaDanpla');
    listProduct_NhuaDanpla.on('initialize.owl.carousel initialized.owl.carousel ' +
        'initialize.owl.carousel initialize.owl.carousel ' +
        'resize.owl.carousel resized.owl.carousel ' +
        'refresh.owl.carousel refreshed.owl.carousel ' +
        'update.owl.carousel updated.owl.carousel ' +
        'drag.owl.carousel dragged.owl.carousel ' +
        'translate.owl.carousel translated.owl.carousel ' +
        'to.owl.carousel changed.owl.carousel',
        function(e) {
            $('.' + e.type)
                .removeClass('secondary')
                .addClass('success');
            window.setTimeout(function() {
                $('.' + e.type)
                    .removeClass('success')
                    .addClass('secondary');
            }, 500);
        });
    listProduct_NhuaDanpla.owlCarousel({
        loop: true,
        nav: true,
        lazyLoad: true,
        margin: 10,
        video: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    var listProduct_vachDanpla=$('#listProduct_vachDanpla');
    listProduct_vachDanpla.on('initialize.owl.carousel initialized.owl.carousel ' +
        'initialize.owl.carousel initialize.owl.carousel ' +
        'resize.owl.carousel resized.owl.carousel ' +
        'refresh.owl.carousel refreshed.owl.carousel ' +
        'update.owl.carousel updated.owl.carousel ' +
        'drag.owl.carousel dragged.owl.carousel ' +
        'translate.owl.carousel translated.owl.carousel ' +
        'to.owl.carousel changed.owl.carousel',
        function(e) {
            $('.' + e.type)
                .removeClass('secondary')
                .addClass('success');
            window.setTimeout(function() {
                $('.' + e.type)
                    .removeClass('success')
                    .addClass('secondary');
            }, 500);
        });
    listProduct_vachDanpla.owlCarousel({
        loop: true,
        nav: true,
        lazyLoad: true,
        margin: 10,
        video: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

});

