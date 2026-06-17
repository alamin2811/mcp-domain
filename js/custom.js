/*banner start*/
const $bannerSingle = $(".cSlider--single");
const $bannerScrollNav = $(".cSlider--nav");

$bannerSingle.slick({
	slide: ".cSlider__item",
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: false,
	adaptiveHeight: true,
	infinite: false,
	useTransform: true,
	dots: true,
	draggable: false,
	speed: 400,
	cssEase: "cubic-bezier(0.77, 0, 0.18, 1)"
});

$bannerScrollNav
	.on("init", function (event, slick) {
		$(this).find(".slick-slide.slick-current").addClass("is-active");
	})
	.slick({
		slide: ".cSlider__item",
		slidesToShow: 9,
		slidesToScroll: 9,
		dots: false,
		focusOnSelect: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		]
	});

$bannerSingle.on("afterChange", function (event, slick, currentSlide) {
	$bannerScrollNav.slick("slickGoTo", currentSlide);
	$bannerScrollNav.find(".slick-slide.is-active").removeClass("is-active");
	$bannerScrollNav
		.find('.slick-slide[data-slick-index="' + currentSlide + '"]')
		.addClass("is-active");
});

$bannerScrollNav.on("click", ".slick-slide", function (event) {
	event.preventDefault();
	var goToSingleSlide = $(this).data("slick-index");

	$bannerSingle.slick("slickGoTo", goToSingleSlide);
});

/*banner end*/



/*Market Place start*/
$('.marketPlace_scroll_text').slick({
  slidesToShow: 7,
  slidesToScroll: 7,  	 
  asNavFor: '.marketPlace_scroll_img',
  arrows: false,	
  dots: false,
  focusOnSelect: true,
  infinite: false,		
});

$('.marketPlace_scroll_img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.marketPlace_scroll_text',
  dots: false,
  focusOnSelect: true,
  infinite: false,	
});
/*Market Place end*/


/*Free Tool start*/
$(".freeTool_scroll").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
			  dots:true,
          }
      },
      {
          breakpoint: 640,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 4,
			  dots:true,
          }
      },
  ]	
});
/*Free Tool end*/

/*feedback Tool start*/
$(".feedback_scroll").slick({
  dots: false,
  arrows: true,		
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,	
});
/*Free Tool end*/

/*domin name start*/
$(".dominName_scroll").slick({
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
			  dots:true,
          }
      },
      {
          breakpoint: 640,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
			  dots:true,
          }
      },
  ]	
});
/*domin name end*/

/*maxstore help start*/
$(".maxstoreHelp_scroll").slick({
  dots: true,
  arrows: false,		
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
/*maxstore help end*/

/*smooth scroll bottom to top start*/

$('#scrollBottom_top').bind("click", function () {
                $('html, body').animate({ scrollTop: 0 }, 1200);
                return false;
            });
/*smooth scroll bottom to top end*/


$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.home-banner-area').addClass('header_fixed');
    } else {
       $('.home-banner-area').removeClass('header_fixed');
    }
});


$('#dynamic_table').dataTable( {
    language: {
        searchPlaceholder: "Search Lits ...",
		sSearch: "",
    }
} );

$('#sms_template_table').dataTable( {
    language: {
        searchPlaceholder: "Search template ...",
		sSearch: "",
    }
} );

$('#transition_table').dataTable( {
    language: {
        searchPlaceholder: "Search invoice ...",
		sSearch: "",
		"oPaginate": {                       
             "sNext": '<i class="las la-angle-right"></i>',
             "sPrevious": '<i class="las la-angle-left"></i>'
     },
    }
} );

