$(document).ready(function () {
    $('.button_main, .button_main_mobile').on('click', function() {
       $('.success').removeClass('success').addClass('decline');
       $('.custom-checkbox:checked').prop('checked', false);
       $(this).parent().parent().fadeOut(1, function() {
           $('.first_step').fadeIn(1);
       });
    });

    $('.button_first').on('click', function() {
        $(this).parent().parent().fadeOut(1, function() {
            $('.second_step').fadeIn(1);
        });
    });

    $('.button_second').on('click', function() {
        $(this).parent().parent().fadeOut(1, function() {
            $('.third_step').fadeIn(1);
        });
    });

    $('.button_third').on('click', function() {
        $(this).parent().parent().fadeOut(1, function() {
            $('.fourth_step').fadeIn(1);
        });
    });

    $('.button_fourth').on('click', function() {
        $(this).parent().parent().fadeOut(1, function() {
            $('.fifth_step').fadeIn(1);
        });
    });

    $('.button_standard').on('click', function() {
        $(this).parent().parent().fadeOut(1, function() {
            $('.final_step').fadeIn(1);
        });
    });


});