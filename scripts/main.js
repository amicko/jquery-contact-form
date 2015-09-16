'use strict';

$(document).ready(function() {

	var $all = $('#all');
	var $nameBox = $('.nameBox');
	var $emailBox = $('#emailBox');
	var $websiteBox = $('#websiteBox')
	var $messageBox = $('.messageBox');


	var $warningName = $('.warningName');
	var $warningEmail = $('.warningEmail');
	var $warningWebsite = $('.warningWebsite');
	var $warningMessage = $('.warningMessage');
	var $button = $('#button');

	var nameInput = false;
	var emailInput = false;
	var websiteInput = false;
	var messageInput = false;


	$button.on('click', function(e) {
		e.preventDefault();
		if(!$nameBox.val()) {
			$warningName.css({display: 'block'})
		}
		else {
			$warningName.css({display: 'none'})
			nameInput = true;
		}

		var $email = $emailBox.val();
		if($email.indexOf('@') < 0) {
			$warningEmail.css({display: 'block'})
		}
		else {
			$warningEmail.css({display: 'none'})
			emailInput = true;
		}

		var $website = $websiteBox.val();
		if($website.indexOf('https://') < 0) {
			$warningWebsite.css({display: 'block'})
		}
		else {
			$warningWebsite.css({display: 'none'})
			websiteInput = true;
		}

		if(!$messageBox.val()) {
			$warningMessage.css({display: 'block'})
		}
		else {
			$warningMessage.css({display: 'none'})
			messageInput = true;
		}

		if (nameInput === true && emailInput === true && websiteInput === true && messageInput === true) {
			console.log('winning!');
			$all.html('Thanks for contacting us, ' + $nameBox.val() + '. We have received your message and will be in touch with you shortly');
		}
	})

	$button.on('mouseover', function(e) {
		$button.css({background: '#88C470', 'transition-duration': '.5s'} );
	})

	$button.on('mouseleave', function(e) {
		$button.css({background: '#1D1E2E', 'transition-duration': '.5s'} );
	})

})