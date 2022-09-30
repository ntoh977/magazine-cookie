// $(document).ready(function () {

//     // $(".slick-next").click(function(e){
//     //     // e.preventDefault();
//     //     $(".slick-next").not($(this)).removeClass("active_slick");
//     //     $(this).toggleClass("active_slick");
//     //   });

//     $('.slider__main').slick({
//         slidesToShow: 3,
//         arrows: true,
//         prevArrow: "<div class='visible-lg slick-prev'><img src='./img/Vector__l.png' ></div>",
//         nextArrow: "<div class='visible-lg slick-next'><img src='./img/Vector__r.png' class='rotate'></div>",
//         responsive: [
//             {
//                 breakpoint: 836,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 580,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ],
//     });
//     $('.post__slide').slick({
//         slidesToShow: 3,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 836,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 580,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ],
//         prevArrow: "<div class='visible-lg slick-prev'><img src='./img/Vector__l.png' ></div>",
//         nextArrow: "<div class='visible-lg slick-next'><img src='./img/Vector__r.png' class='rotate'></div>",
//     });

//     // $('.slider__one').slick({
//     //     cssEase: 'linear',
//     //     arrows: true,
//     //     autoplay: true,
//     //     autoplaySpeed: 2000,
//     //     prevArrow: "<div class='visible-lg slick-prev'><img src='./img/Vector_4.png'></div>",
//     //     nextArrow: "<div class='visible-lg slick-next'><img src='./img/Vector_4.png' class='rotate'></div>",
//     // });
// });

$(document).ready(function () {
    $("#top").hide();
    $(function toTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1300) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });

        $('#top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });


   
});


