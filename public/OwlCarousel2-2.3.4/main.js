$(document).ready(function(){	
	main_slider();
	banner_slider();
	category_product_slider();
	banner_slider_content();
	news_slider();
	testimonial_slider();
	brand_slider();
	backtop();
	sticky_header();

	//tab
	call_action_tab();	
	call_action_tab2();

});

function main_slider(){
	$("#main-slider").owlCarousel({				 
		autoplay: true,
		autoplayHoverPause: true,
		loop:false,
		margin:0,
		nav:true,
		dots:false,
		interval: 5000, // chuyen slide sau 5s
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}	
	});
}

function banner_slider(){
	$('#content #banner-slider').owlCarousel({
		autoplay: true,
		autoplayHoverPause: true,
		loop:false,
		margin:15,
		nav:false,
		dots:false,
		interval: 5000, // chuyen slide sau 5s
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}	
	});
}

function category_product_slider(){
	$('#content .category-product').owlCarousel({		
		autoplay: true,
		autoplayHoverPause: true,
		loop:false,
		margin:30,
		nav:true,
		dots:false,
		// interval: 5000, // chuyen slide sau 5s
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}	
	});
}

function banner_slider_content(){
	$('#content #banner-slider-content').owlCarousel({		
		autoplay: true,
		autoplayHoverPause: true,
		loop:false,
		margin:30,
		nav:false,
		dots:false,
		// interval: 5000, // chuyen slide sau 5s
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}	
	});
}

function news_slider() {
	$('#content #news-custom .blog-item').owlCarousel({		
		autoplay: true,
		autoplayHoverPause: true,
		loop:false,
		margin:30,
		nav:false,
		dots:false,
		// interval: 5000, // chuyen slide sau 5s
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}	
	});
}

function testimonial_slider(){
	$('#content #section-testimonial #testimonial-slider').owlCarousel({		
		autoplay: true,
		autoplayHoverPause: true,
		loop:false,
		margin:30,
		nav:false,
		dots:false,
		// interval: 5000, // chuyen slide sau 5s
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}	
	});
}


function brand_slider(){
	$('#content #section-brand #brand-slider').owlCarousel({		
		autoplay: true,
		autoplayHoverPause: true,
		loop:false,
		margin:30,
		nav:false,
		dots:false,
		// interval: 5000, // chuyen slide sau 5s
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:6
			}
		}	
	});
}

// backtop
function backtop(argument) {	 
	$(window).scroll(function(){
		var last_scroll = 600;
		if($(this).scrollTop() >= last_scroll){
			$('#footer #back-to-top').stop().fadeIn(250);
		}
		else {
			$('#footer #back-to-top').stop().fadeOut(250);	
		}		
	});
	$("#footer #back-to-top").click(function(){
		$('body, html').stop().animate({scrollTop : 0},800);
	});
}

//scroll
function sticky_header(argument) {
	//sroll fixed header-bot
	//get position header-bot
	var header_bot = $('#header nav').offset().top; // lay toa do
	console.log("#header-bot = " + header_bot); // hien len
	$(window).scroll(function() {
		if($(this).scrollTop() >= header_bot) {	 //khi cuon chuot lon hon toa do
			$('#header nav').addClass('fixed_headerbot');
		}
		else
		{
			$('#header nav').removeClass('fixed_headerbot');
		}
		
	});
}

//tab
function activeTab(obj) {
	 // Xóa class active tất cả các tab
	 $('.tab-wrapper ul li').removeClass('current');

    // Thêm class active vòa tab đang click
    $(obj).addClass('current');

    // Lấy href của tab để show content tương ứng
    var id = $(obj).find('a').attr('href');

    // Ẩn hết nội dung các tab đang hiển thị
    $('.tab-wrapper .tab-item').hide();

    // Hiển thị nội dung của tab hiện tại
    $(id) .show();
}

function call_action_tab(){
	// Sự kiện click đổi tab
	$('.tab-wrapper .tab li').click(function(){
		activeTab(this);
		return false;
	});
	// Active tab đầu tiên khi trang web được chạy
	activeTab($('.tab-wrapper .tab li:first-child'));
}

//tab2
function activeTab2(obj) {
	 // Xóa class active tất cả các tab
	 $('.tab-wrapper2 ul li').removeClass('current');

    // Thêm class active vòa tab đang click
    $(obj).addClass('current');

    // Lấy href của tab để show content tương ứng
    var id = $(obj).find('a').attr('href');

    // Ẩn hết nội dung các tab đang hiển thị
    $('.tab-wrapper2 .tab-item').hide();

    // Hiển thị nội dung của tab hiện tại
    $(id) .show();
}

function call_action_tab2(){
	// Sự kiện click đổi tab
	$('.tab-wrapper2 .tab li').click(function(){
		activeTab2(this);
		return false;
	});
	// Active tab đầu tiên khi trang web được chạy
	activeTab2($('.tab-wrapper2 .tab li:first-child'));
}