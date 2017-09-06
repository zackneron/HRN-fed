$(function(){
	$('#action-btn-open').on('click', function(){
		$('.booking-block__benefits').removeClass('display-none');
		$('.booking-block__benefits').addClass('display-block');

		$(this).removeClass('display-block');
		$(this).addClass('display-none');
		$('#action-btn-close').addClass('display-block');
		$('#action-btn-close').removeClass('display-none');
	});

	$('#action-btn-close').on('click', function(){
		$('.booking-block__benefits').removeClass('display-block');
		$('.booking-block__benefits').addClass('display-none');

		$(this).removeClass('display-block');
		$(this).addClass('display-none');
		$('#action-btn-open').addClass('display-block');
		$('#action-btn-open').removeClass('display-none');
	});
});