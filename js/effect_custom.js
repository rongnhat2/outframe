var data =  '<div class="I-item">' +
			'	<div class="item_image">' +
			'		<div class="image_wrapper">' +
			'			<img src="images/image_07.png">' +
			'		</div>' +
			'	</div>' +
			'	<div class="item_content">' +
			'		<div class="item_category">' +
			'			fashion' +
			'		</div>' +
			'		<a href="#" class="item_title">' +
			'			Metropolitan x adidas Skateboarding "Drift Culture" Pack Is Built for Speed' +
			'		</a>' +
			'		<div class="item_detail">' +
			'			London-based retailer Browns has showcased some of the highlights from the Spring/Summer 2020 season in a new editorial shot in Sāo Paulo. Themed around the work of Italian artist and architect Lina Bo Bardi, the editorial features pieces that reflect her work in the city, including the SESC Pompéia and MASP Museum of Art....'+
			'		</div>' +
			'		<div class="item_info">' +
			'			<div class="copyright">' +
			'				 by Vanh.' +
			'			</div>' +
			'			<div class="time">' +
			'				20m ago' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'</div>' +
			 '<div class="I-item">' +
			'	<div class="item_image">' +
			'		<div class="image_wrapper">' +
			'			<img src="images/image_08.png">' +
			'		</div>' +
			'	</div>' +
			'	<div class="item_content">' +
			'		<div class="item_category">' +
			'			fashion' +
			'		</div>' +
			'		<a href="#" class="item_title">' +
			'			Metropolitan x adidas Skateboarding "Drift Culture" Pack Is Built for Speed' +
			'		</a>' +
			'		<div class="item_detail">' +
			'			London-based retailer Browns has showcased some of the highlights from the Spring/Summer 2020 season in a new editorial shot in Sāo Paulo. Themed around the work of Italian artist and architect Lina Bo Bardi, the editorial features pieces that reflect her work in the city, including the SESC Pompéia and MASP Museum of Art....'+
			'		</div>' +
			'		<div class="item_info">' +
			'			<div class="copyright">' +
			'				 by Vanh.' +
			'			</div>' +
			'			<div class="time">' +
			'				20m ago' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'</div>' +
			 '<div class="I-item">' +
			'	<div class="item_image">' +
			'		<div class="image_wrapper">' +
			'			<img src="images/image_09.png">' +
			'		</div>' +
			'	</div>' +
			'	<div class="item_content">' +
			'		<div class="item_category">' +
			'			fashion' +
			'		</div>' +
			'		<a href="#" class="item_title">' +
			'			Metropolitan x adidas Skateboarding "Drift Culture" Pack Is Built for Speed' +
			'		</a>' +
			'		<div class="item_detail">' +
			'			London-based retailer Browns has showcased some of the highlights from the Spring/Summer 2020 season in a new editorial shot in Sāo Paulo. Themed around the work of Italian artist and architect Lina Bo Bardi, the editorial features pieces that reflect her work in the city, including the SESC Pompéia and MASP Museum of Art....'+
			'		</div>' +
			'		<div class="item_info">' +
			'			<div class="copyright">' +
			'				 by Vanh.' +
			'			</div>' +
			'			<div class="time">' +
			'				20m ago' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'</div>' +
			 '<div class="I-item">' +
			'	<div class="item_image">' +
			'		<div class="image_wrapper">' +
			'			<img src="images/image_10.png">' +
			'		</div>' +
			'	</div>' +
			'	<div class="item_content">' +
			'		<div class="item_category">' +
			'			fashion' +
			'		</div>' +
			'		<a href="#" class="item_title">' +
			'			Metropolitan x adidas Skateboarding "Drift Culture" Pack Is Built for Speed' +
			'		</a>' +
			'		<div class="item_detail">' +
			'			London-based retailer Browns has showcased some of the highlights from the Spring/Summer 2020 season in a new editorial shot in Sāo Paulo. Themed around the work of Italian artist and architect Lina Bo Bardi, the editorial features pieces that reflect her work in the city, including the SESC Pompéia and MASP Museum of Art....'+
			'		</div>' +
			'		<div class="item_info">' +
			'			<div class="copyright">' +
			'				 by Vanh.' +
			'			</div>' +
			'			<div class="time">' +
			'				20m ago' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'</div>'



$('.side_item').on('click', function(){
	var index = $(this).index()
	$('.side_item').removeClass('is-select');
	$('.side_item').eq(index).addClass('is-select');
	$('.content_banner_wrapper').removeClass('is-select');
	$('.content_banner_wrapper').eq(index).addClass('is-select');
})

$(".learn_more_wrapper").on('click', function(){
	$(this).parent().find('.item_list').append(data)
})


$('.I-header').find('.text').on('mouseover', function(){
	$('.I-header').find('.form_open').addClass('is-open')
})
$('.I-header').find('.text').on('mouseout', function(){
	$('.I-header').find('.form_open').removeClass('is-open')
})
$('.I-header').find('.form_open').on('mouseover', function(){
	$(this).addClass('is-open')
})
$('.I-header').find('.form_open').on('mouseout', function(){
	$(this).removeClass('is-open')
})