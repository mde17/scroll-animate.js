$(document).ready(function(e) {
    var vis = false;
	var target_el = $('.test');
	
	$(window).scroll(function(){
		setTimeout(animate_scroll,1000);
	});
	
	function animate_scroll(){
		if(isScrolledIntoView(target_el) === true){
			if(vis === false){
				vis = true;
				target_el.animate({'font-size':'2em'},500);
			}
		}else{
			if(vis === true){
				vis = false;
				target_el.animate({'font-size':'1em'},500);
			}
		}	
	}
	
	function isScrolledIntoView(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
	
		var elemTop = elem.offset().top;
		var elemBottom = elemTop + elem.height();
	
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
});
