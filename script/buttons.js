$(document).ready(function () {
    $('.button_main, .button_main_mobile').on('click', function() {
       $('.success').removeClass('success').addClass('decline');
       $('.custom-checkbox:checked').prop('checked', false);
       $('#third > input:first').prop('checked', true);
       $('#fourth > input:first').prop('checked', true);
       $('.button_first').attr('disabled', 'disabled');
       $('.button_second').attr('disabled', 'disabled');
       $('.button_third').addClass('success').removeAttr('disabled');
       $('.button_fourth').addClass('success').removeAttr('disabled');
       $(this).parent().parent().fadeOut(1, function() {
           $('.first_step').fadeIn(1);
       });
    });

    $('.logo_block').click(function() {
        document.location.reload();
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

    $('.button_prev').on('click', function() {
        let parent = $(this).parent().parent();
        let neighborhood = $(this).parent().parent().prev();
        parent.fadeOut(100, function() {
            neighborhood.fadeIn(100);
        })
    })

     $('.button_standard').on('click', function() {
        $(this).parent().parent().fadeOut(1, function() {
            $('.final_step').fadeIn(1);
        });
    });

    $('#first > .custom-checkbox, #second > .custom-checkbox').on('click', function() {
        $(this).is('checked') ? $(this).removeAttr('checked') : $(this).attr('checked', 'checked');
        let result = $(this).parent().children().is(':checked');
        if (result === true) {
            $(this).parent().parent().find('.decline').removeClass('decline').addClass('success').removeAttr('disabled');
        } else {
            $(this).parent().parent().find('.success').removeClass('success').addClass('decline').attr('disabled', 'disabled');
        }
    });

    let variants = "";

    $('.button_fourth').on('click', function() {
        $('.name').val("");
        $('.phone').val("");
        $('.fourth_step').fadeOut(100, function() {
            $('.fifth_step').fadeIn(100);
        })
    })


    $(".button_fourth").click(function () {
        let interValid = null;
        let id = 101;
        let math_result = 1;
        let percents = 1;

        let varName = function action () {

            $(`.item[id="${id}"]`).removeClass('item').addClass('item2');
            percents = (id - 100) * 3;

            if(percents < 97) {
                $(`.percents_count`).text(percents);
            } else {
                $(`.percents_count`).text("100");
                id = 101;
                percents = 1;
                $(".fifth_step").fadeOut(1000, function() {
                    $(".final_step").fadeIn(1000);
                })

                math_result = 1;
                const count = variants;
                const title = declination(count, [' вариант', ' варианта', ' вариантов']);
                const title2 = count + title;
                console.log(title, title2);
                $('.small_text_white').text(count);
                $('#variants').text(title2);
                $('#variants2').text(title2);

                function declination(number, titles) {
                    let cases = [2, 0, 1, 1, 1, 2];
                    return titles[ (number%100>4 && number%100<20)? 2:cases[(number%10<5)?number%10:5] ];
                }
                clearInterval(interValid);
            }

            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
            }

            if(percents === 27) {
                math_result = getRandomIntInclusive(5, 15);
                $('.small_text_white').text(math_result);
            }

            if(percents === 45 ) {
                math_result += getRandomIntInclusive(5, 15);
                $('.small_text_white').text(math_result);
            }

            if(percents === 69) {
                math_result += getRandomIntInclusive(5, 15);
                $('.small_text_white').text(math_result);
                $('.variants').text(math_result);
                $('.variants2').text(math_result);
                variants = math_result;
            }

            id++;
        }

        interValid = setInterval(varName, 60);

    })



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
                    $('#fifth_step').fadeOut(300, function() {
                        $('#last_step').fadeIn(300);
                        $('.phone').val("");
                        $('.name').val("");
                    });
                } else {
                    console.log(data);
                    $('.phone').text("");
                    $('#fifth_section').text(data);
                    $('#fifth_section').fadeOut(1000, function() {
                        $('#fifth_section').text("Введите ваши данные");
                        $('#fifth_section').fadeIn(1000);
                    });


                }
            })
        });
    });


});