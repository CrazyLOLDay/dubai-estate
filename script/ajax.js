$('.submit_final').click(function() {

    let selected_checks = Array.from($("input:checked").next().text());
    let phone = $('.phone').val();
    let name = $('.name').val();

    $.ajax({
        type: "POST",
        url: "ajax/response.php",
        cache: false,
        data: {
            'selected_checks': selected_checks,
            'name': name,
            'phone': phone
        },
        dataType: 'html',
        success: (function(data) {
            if (data === "success") {
                $('.final_step').fadeOut(300, function() {
                    $('.farewell').fadeIn(300);
                    $('.phone').val("");
                    $('.name').val("");
                });
            } else {
                console.log(data);
                $('.phone').text("");
                $('.submit_final').text(data);
                $('.submit_final').fadeOut(1000, function() {
                    $('.submit_final').text("Введите ваши данные");
                    $('.submit_final').fadeIn(1000);
                });


            }
        })
    });
});