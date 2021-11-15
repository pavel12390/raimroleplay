$(document).ready(function () {
	

	

	$("form").submit(function(event) {
		
		var formID = $(this).attr('id');
		if(formID != "donate" && formID != "logs_form")
		{
			

			event.preventDefault();
			$.ajax({
				type: $(this).attr('method'),
				url: $(this).attr('action'),
				data: new FormData(this),
				contentType: false,
				cache: false,
			
				processData: false,
				success: function(result) {
					
					// console.log(result);
					json = jQuery.parseJSON(result);
					
					
					
					SendNotify(json.header,json.message,json.status,json.url);
					if(formID == "form_sell")
					{
						var win = $('.win-overlay, .win_modal');
  
        				win.removeClass('active');
						// if(json.money > 0) $('#donate_user').html(json.money+ ' руб');
					}
					
					$('#googleCreate').animate({
						'margin-left' : "-50%",
						'opacity' : '0'
						},500,function () {
							$('#googleCreate').hide();
							$('#googleDelete').show();
						});
					
				}
			});
		}
	});	
});

function SendNotify(title,message,type, link = "") {
	$("html").overhang({
		type: type,
		message: message,
		duration: 3,
		closeConfirm: true
	  });
	if(link) setTimeout(() => window.location.href = link, 3000);
	
}

function redirect(url) {
	  	window.location.href = url;
	}