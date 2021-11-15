function redirect(url) {
	alert(url);
	window.location.href = url;
}
$(function() {

	$('.login_btn').click(function(e){
		e.preventDefault();
		$('.modal_wrap').css('display','flex');
		$('.modal_login').css('display','flex');
		setTimeout(function() { 
			$('.modal_login').addClass('md_show');
		}, 200);
	});
	$('.close_login').click(function(e){
		e.preventDefault();
		$('.modal_login').removeClass('md_show');
		setTimeout(function() { 
			
			$('.modal_wrap').css('display','none');
			$('.modal_login').css('display','none');
		}, 300);
			
	});
	$('.recovery_link').click(function(e){
		e.preventDefault();
		$('.modal_login').removeClass('md_show');
		
		setTimeout(function() { 
			$('.modal_recovery').css('display','flex');
			$('.modal_login').css('display','none');
			$('.modal_recovery').addClass('md_show');
			
		}, 300);
			
	});
	$('.auth_links').click(function(e){
		e.preventDefault();
		$('.modal_recovery').removeClass('md_show');
		
		setTimeout(function() { 
			$('.modal_login').css('display','flex');
			$('.modal_recovery').css('display','none');
			$('.modal_login').addClass('md_show');
			
		}, 300);
			
	});
	$('.close_recovery').click(function(e){
		e.preventDefault();
		$('.modal_recovery').removeClass('md_show');

		setTimeout(function() { 
			
			$('.modal_wrap').css('display','none');
			$('.modal_recovery').css('display','none');
		}, 300);
			
	});
	$('.mobile_nav').click(function(e){
		e.preventDefault();
		
			$(this).toggleClass('mobile_nav-active');
			$('.nav_list').toggleClass('nav_list-active');
		
		
		
	});

});
function copyIp(str){
  
	document.oncopy = function(event) {
event.clipboardData.setData("Text", str);
event.preventDefault();
alert("IP Адрес скопирован!");
	};
document.execCommand("Copy");
	document.oncopy = undefined;
}