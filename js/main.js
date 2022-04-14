$(document).ready(function() {

	'use strict';

    $.validator.addMethod('nofreeemail', function (value) {
        //return /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!mail\.ru)(?!ptc\.com)(?!mail\.com)([\w-]+.)+[\w-]{2,4})?$/.test(value);

        return /^([\w-.]+@(?!123\.com)(?!126\.com)(?!139\.com)(?!163\.com)(?!189\.com)(?!qq\.com)(?!sharklasers\.com)(?!prowerl\.com)(?!tashjw\.com)(?!yopmail\.com)(?!lerwfv\.com)(?!dfb55\.com)(?!protonmail\.com)(?!thefmail\.com)(?!free\.net)(?!qortu\.com)(?!ximtyl\.com)(?!tempr\.email)(?!tutanota\.com)(?!lywenw\.com)(?!yandex\.com)(?!rediffmail\.com)(?!inbox\.ru)(?!gmail\.com)(?!icloud\.com)(?!10MinuteMail\.com)(?!urhen\.com)(?!fyii\.de)(?!comcast\.net)(?!hotmail\.com)(?!outlook\.com)(?!mail\.com)(?!mail\.ru)(?!live\.at)(?!live\.be)(?!live\.ca)(?!live\.cl)(?!live\.cn)(?!live\.co.uk)(?!live\.co.za)(?!live\.com)(?!live\.com.ar)(?!live\.com.au)(?!live\.com.mx)(?!live\.com.pt)(?!live\.com.sg)(?!live\.)(?!msn\.com)(?!aol\.com)(?!yahoo\.)(?!ymail\.)(?!rocketmail\.)(?!freemail\.)(?!fastmail\.)(?!email\.)(?!zzz\.)(?!webmail\.)(?!inbox\.com)(?!inbox\.net)(?!inbox\.ru)(?!inbox\.si)(?!gmx\.com)(?!me\.com)(?!gmail\.)(?!yahoo\.com)(?!hotmail\.com)(?!mail\.ru)(?!mail\.com)(?!innovatia\.net)(?!poka\.io)(?!teamviewer\.com)(?!onshape\.com)(?!webalo\.com)(?!innovapptive\.com)(?!upskill\.io)(?!ubimax\.com)(?!ptc\.com)(?!scopear\.com)(?!atheerair\.com)(?!re-flekt\.com)(?!helplightning\.com)(?!blitzz\.co)(?!fieldbit\.net)(?!librestream\.com)(?!intoware\.com)(?!scout\.systems)(?!tulip\.co)(?!parsable\.com)(?!vksapp\.com)(?!dozuki\.com)(?!getmaintainx\.com)(?!canvass\.io)(?!apprenticefs\.com)(?!gulumaa\.com)(?!shopvue\.com)(?!seedaten\.com)(?!ra.rockwell\.com)(?!rockwellautomation\.com)(?!aveva\.com)(?!thingworx\.com)(?!sightcall\.com)(?!vital\.enterprises)(?!visualfactory\.net)(?!swipeguide\.com)(?!stepshot\.net)(?!logistiview\.com)(?!lightguidesys\.com)(?!eflexsystems\.com)(?!okit\.io)(?!kit-ar\.com)(?!assemblyxsoftware\.com)([\w-]+.)+[\w-]{2,4})?$/.test(value);

    }, 'Free email addresses are not allowed.');

	// Form

	var acForm = function() {

		if ($('#acForm').length > 0 ) {
			$( "#acForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true,
                        nofreeemail: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					email: "Please enter a valid business email address",
					message: "Please enter a message"
				}
				/* submit via ajax */
                /*
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "https://www.augmentir.com/wp-content/themes/enfold-child/includes/submit-form.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#acForm').fadeOut();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		}
                  */
				
			} );
		}
	};
	acForm();

});