$(
	function(){
		var curPage = location.hash || "#home";
		checkPage(curPage);
		$('body').bind('pageChange', function(evt, page){
			checkPage(page);
		});

		$('.header .menu .menu__link, .header__to-top').click(function(evt){
			var page = $(this).attr("href");
			if(page == curPage) return;

			curPage = page;
			$('body').trigger('pageChange', page);
			$('html, body').animate({
				scrollTop: $(page).offset().top
			});
		});
	}
);

function checkPage(page){
	if(page != '#home'){
		$('.header__to-top').removeClass("display-none");
	}
	else{
		$('.header__to-top').addClass("display-none");
	}
}
