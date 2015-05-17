function randomPosition(w, h) {
	do {
		var randX = Math.floor(Math.random() * $(window).width());
		var randY = Math.floor(Math.random() * $(window).height());
	} while (randX + w / 5 > $(window).width() || randY + h / 5 > $(window).height());

	return {top: randY - 100, left: randX};
}

function randomWidth() {
	do {
		var randW = Math.floor(Math.random() * 600);
	} while (randW < 360);

	return randW;
}

var elem = $('#mlg').find('div img');

function MLGRandom() {
	for (var i = 0; i < elem.length; i++) {
		$(elem[i]).offset(randomPosition($(this).width(), $(this).height())).width(randomWidth()).css({ zIndex: Math.floor(Math.random() * elem.length) });
	}
}

MLGRandom();
$('#output, .dim').hide();

function convertName() {
	var text = $('[name="name"]').val();
	var lookup = ['420', '360', 'Noscope', 'Fazeoptic', 'MLG', 'Trickshot', 'Swag', 'Yolo'];
	var replaceStr = [['A', '@'], ['a', '@'], ['E', '€'], ['e', '€'], ['I', '1'], ['i', '1'], ['O', '0'], ['o', '0'], ['K', 'Kz'], ['k', 'Kz'], ['N', 'Nz'], ['n', 'Nz'], ['S', '$'], ['s', '$'], [' ', '_'], ['ย', 'E'], ['ง', 'J'], ['เ', 'L'], ['อ', 'o'], ['ร', 's'], ['ข', 'v'], ['ล', 'z'], ['ต', 'm'], ['ท', 'n'], ['น', 'u'], ['ะ', '='], ['แ', 'll'], ['พ', 'w'], ['ห', 'x'], ['า', '7'], ['ค', 'A'], ['ก', 'π'], ['บ', 'U'], ['ม', 'μ'], ['ศ', 'Á'], ['ว', 'ɔ'], ['โ', 'Γ'], ['ส', 'ź']];

	for (var i = 0; i < replaceStr.length; i++) {
		var regex = new RegExp(replaceStr[i][0], 'g');
		text = text.replace(regex, replaceStr[i][1]);
	}

	$('body').addClass('rainbow');
	$('#output .result').text('xX' + lookup[Math.floor(Math.random() * lookup.length)] + '_' + text + '_' + lookup[Math.floor(Math.random() * lookup.length)] + 'Xx').addClass('rainbow-text');
	$('#output, .dim').fadeIn();
	playSound();
}

function playSound() {
	var audio = $('#sfx audio')[0];
	var filename = ['smoke_weed_everyday', 'wombo_combo', 'illuminati'];
	var rand = Math.floor(Math.random() * filename.length);
	var path = 'assets/sounds/' + filename[rand] + '.mp3';

	$('#sfx audio source').attr({
		src: path,
		type: 'audio/mp3'
	});

	audio.load();
	audio.play();
}

$(document).ready(function() {
	$('[name="name"]').focus();
	$('[name="name"]').keypress(function(event) {
		if (event.which == 13 && $(this).is(':focus')) {
			convertName();
		}
	});
	$(window).on('orientationchange', function(event) {
		MLGRandom();
	});
});