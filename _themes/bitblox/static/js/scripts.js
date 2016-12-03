/**
 * Responsive Menu, Animated Dropdown
 */
// jQuery(document).ready(function($) {
//     $('.nav-menu').slicknav();

//     $(".nav-menu ul").addClass('animated hidden');

//     var menuItemWidth, submenuItemWidth;

//     $(".nav-menu > li").hover(function(){
//         var $this = $(this);

//         $this.children('ul').removeClass().addClass('animated');

//         menuItemWidth = $this.innerWidth();
//         submenuItemWidth = $this.children("ul").innerWidth();
//         $this.children("ul").css('left' , (menuItemWidth-submenuItemWidth)/2);

//         $this.children('ul').addClass('fadeInDownSmall').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//             $this.children('ul').removeClass().addClass('animated')
//         });
//     }, function(){
//         $(this).children('ul').addClass('fadeOutUpSmall').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//             $(this).removeClass().addClass('hidden')
//         })
//     })
// });

/**
 * Animated Header
 */
jQuery(function($) {
    $('.page-header').prepend('<img src="'+ tfVars['header_bg_src'] +'" alt="" class="testimage hidden">');

    $('.testimage').load(function(){
        $(".main-header .spinner, .main-header .testimage").remove();
        $(".page-header, .site-logo, .primary-navigation").removeClass('invisible').addClass('animated fadeIn');

        setTimeout(function(){
            $(".page-title-before").removeClass('invisible').addClass('animated fadeInDown');
            $(".page-title").removeClass('invisible').addClass('animated fadeInLeft');
            $(".page-subtitle").removeClass('invisible').addClass('animated fadeInRight');
            $("#search-form").removeClass('invisible').addClass('animated fadeInUp');
        }, 400);
    });
});

/**
 * Allow to select external links
 * jQuery('a:external')
 */
jQuery.expr[':'].external = function(obj){
    return !obj.href.match(/^mailto\:/)
        && (obj.hostname != location.hostname)
        && !obj.href.match(/^javascript\:/)
        && !obj.href.match(/^$/);
};

/**
 * Add target="_blank" to external links
 */
jQuery(function($){
    $('#body a:external').attr('target', '_blank');
});

/**
 * Add anchors to menu, pagination and breadcrumbs links
 * To not show that big header when you browse the documentation
 */
jQuery(function($){
    $('.pagination a, #menu li > a, #breadcrumbs a').each(function(){
        var $a = $(this);
        var href = $a.attr('href');

        if (href.indexOf('#') != -1) {
            // link already has nachor
            return;
        }

        $a.attr('href', href +'#content');
    });
});

/**
 * Hide .toctree-wrapper that has no html (but has padding and :before, which are visible)
 */
jQuery(function($){
    $('.toctree-wrapper').each(function(){
        if (!$.trim($(this).html()).length) {
            $(this).remove();
        }
    });
});
