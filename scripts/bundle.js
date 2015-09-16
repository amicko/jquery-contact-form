(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	var $all = $('#all');
	var $nameBox = $('.nameBox');
	var $emailBox = $('#emailBox');
	var $websiteBox = $('#websiteBox');
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

	$button.on('click', function (e) {
		e.preventDefault();
		if (!$nameBox.val()) {
			$warningName.css({ display: 'block' });
		} else {
			$warningName.css({ display: 'none' });
			nameInput = true;
		}

		var $email = $emailBox.val();
		if ($email.indexOf('@') < 0) {
			$warningEmail.css({ display: 'block' });
		} else {
			$warningEmail.css({ display: 'none' });
			emailInput = true;
		}

		var $website = $websiteBox.val();
		if ($website.indexOf('https://') < 0) {
			$warningWebsite.css({ display: 'block' });
		} else {
			$warningWebsite.css({ display: 'none' });
			websiteInput = true;
		}

		if (!$messageBox.val()) {
			$warningMessage.css({ display: 'block' });
		} else {
			$warningMessage.css({ display: 'none' });
			messageInput = true;
		}

		if (nameInput === true && emailInput === true && websiteInput === true && messageInput === true) {
			console.log('winning!');
			$all.html('Thanks for contacting us, ' + $nameBox.val() + '. We have received your message and will be in touch with you shortly');
		}
	});

	$button.on('mouseover', function (e) {
		$button.css({ background: '#88C470', 'transition-duration': '.5s' });
	});

	$button.on('mouseleave', function (e) {
		$button.css({ background: '#1D1E2E', 'transition-duration': '.5s' });
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map