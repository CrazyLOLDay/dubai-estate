$(document).ready(function () {
    $('.main_btn').on('click', function() {
       $('.success').removeClass('success').addClass('decline');
       $('.custom-checkbox:checked').prop('checked', false);
       $(this).parent().parent().fadeOut(1, function() {
           $('.custom-checkbox:checked').prop('checked', false);
           $(this).parent().parent().next().fadeIn(1);
       });
    });
});