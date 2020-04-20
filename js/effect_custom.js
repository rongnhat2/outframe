$('.tab_select').on('click', function(){
	var index = $(this).index()
	$('.tab_item').removeClass('is-select');
	$('.tab_item').eq(index).addClass('is-select');
	$('.tab_select').removeClass('is-select');
	$('.tab_select').eq(index).addClass('is-select');
})

$('.side_item').on('click', function(){
	var index = $(this).index()
	$('.side_item').removeClass('is-select');
	$('.side_item').eq(index).addClass('is-select');
	$('.content_banner_wrapper').removeClass('is-select');
	$('.content_banner_wrapper').eq(index).addClass('is-select');
})

var stickyNav = $('.item_side').offset().top;
window.onscroll = function() {
	NavFixed();
}
function NavFixed() {

	var valueY = window.pageYOffset - stickyNav
	var maxY = $('.item_list').height() - $('.I-preview').height()
	$('.item_side').css({
		'height': $('.item_list').height() + 'px'
	})
  	if (valueY > 0) {
  		if(valueY > maxY){
	  		$('.item_side').find('.I-preview').css({
	  			'position': 'absolute',
	  			'top': 'auto',
	  			'bottom': 0
	  		})
  		}else{
	  		$('.item_side').find('.I-preview').css({
	  			'position': 'fixed',
	  			'top': 0,
	  			'bottom': 'auto',
	  		})
  		}
  	} else {
  		$('.item_side').find('.I-preview').css({
  			'position': 'relative',
  		})
  	}
}
