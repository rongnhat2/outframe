$('.tab_select').on('click', function(){
	var index = $(this).index()
	$('.tab_item').removeClass('is-select');
	$('.tab_item').eq(index).addClass('is-select');
	$('.tab_select').removeClass('is-select');
	$('.tab_select').eq(index).addClass('is-select');
})

$('.owl-carousel').owlCarousel({
    loop:true,
    items:3,
})
$('.I-carousel').find('.next_carousel').on('click', function(){
    $('.slider_carousel').trigger('next.owl.carousel');
})
$('.I-carousel').find('.prev_carousel').on('click', function(){
    $('.slider_carousel').trigger('prev.owl.carousel');
})

