let name = document.querySelector('.name');
let regex = /[^А-Яа-яA-Za-z]/g;

$('.phone').mask("+7(999) 999-9999").keyup(function(){
    console.log("ok");
    $('.input_block').css('height', "117px")
    $('.name').show(1);
    $('.submit_final').removeClass('decline').addClass('success').removeAttr('disabled', 'disabled');
});

name.oninput = function(){
    this.value = this.value.replace(regex, '');
}