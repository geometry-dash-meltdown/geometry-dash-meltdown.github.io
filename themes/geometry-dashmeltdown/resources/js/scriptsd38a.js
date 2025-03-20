function slide_banner() {

}

function slide_js() {
    /*var swiperBannerTopPicksVer = new Swiper('#game-suggestions', {
        direction: 'vertical', spaceBetween: 10, speed: 5500, slidesPerView: 2.3, loop: true, autoplay: {
            delay: 1000, reverseDirection: true, disableOnInteraction: false,
        }, draggable: true

    });
    swiperBannerTopPicksVer.on('slideChange', function () {
        lazyLoad();

    });
    var swiperBannerTopPicksHor = new Swiper('#game-most-played', {
        spaceBetween: 10, speed: 4000, slidesPerView: 1, loop: true, autoplay: {
            delay: 3333, reverseDirection: true, disableOnInteraction: false,
        }, draggable: true
    });
    swiperBannerTopPicksHor.on('slideChange', function () {
        lazyLoad();
    });
    var swiperHot = new Swiper('#game_hot_slider', {
        spaceBetween: 10, speed: 1000, slidesPerView: 7, slidesToScroll: 3, loop: false,

        navigation: {
            nextEl: '#game_hot_slider .js-carousel-next', prevEl: '#game_hot_slider .js-carousel-prev'
        }, draggable: true, breakpoints: {
            1386: {
                slidesPerView: 6

            }, 1199: {
                slidesPerView: 5

            }, 991: {
                slidesPerView: 4

            }, 768: {

                slidesPerView: 3
            }, 500: {

                slidesPerView: 2
            }
        }
    });
    swiperHot.on('slideChange', function () {
        lazyLoad();
    });
    var swiperPopular = new Swiper('#game_popular_slider', {
        spaceBetween: 10, speed: 1000, slidesPerView: 7, slidesToScroll: 3, loop: false,

        navigation: {
            nextEl: '#game_popular_slider .js-carousel-next', prevEl: '#game_popular_slider .js-carousel-prev'
        }, draggable: true, breakpoints: {
            1386: {
                slidesPerView: 6

            }, 1199: {
                slidesPerView: 5

            }, 991: {
                slidesPerView: 4

            }, 768: {

                slidesPerView: 3
            }, 500: {

                slidesPerView: 2
            }
        }
    });
    swiperPopular.on('slideChange', function () {
        lazyLoad();
    });

    /!*   var swiperCategoryAction = new Swiper('.category-action .swiper-container', {
           spaceBetween: 10,
           speed: 1000,
           slidesPerView: 7,
           slidesToScroll: 3,
           loop: false,
           navigation: {
               nextEl: '#game_category_slider .js-carousel-next',
               prevEl: '#game_category_slider .js-carousel-prev'
           },
           draggable: true,
           breakpoints: {
               1386: {
                   slidesPerView: 6

               },
               1199: {
                   slidesPerView: 5

               },
               991: {
                   slidesPerView: 4

               },
               768: {

                   slidesPerView: 3
               },
               500: {

                   slidesPerView: 2
               }
           }
       });
       swiperCategory.on('slideChange', function () {
           lazyLoad();
       });*!/
    var swiperListCategory = new Swiper('#category_list .swiper-container', {
        spaceBetween: 10, speed: 1000, slidesPerView: "auto", loop: false, freeMode: true, navigation: {
            nextEl: '#category_list .right-icon', prevEl: '#category_list .left-icon'
        }, draggable: true

    });
    swiperListCategory.on('slideChange', function () {
        lazyLoad();
    });*/
}

function hide_show_content() {
    let e = $(".content-inner .game-description").outerHeight();
    e <= 719 ? ($(".show_content").css({display: "none"}), $(".content-inner").attr("style", "height:" + e + "px")) : ($(".content-inner").attr("style", "height:720px;overflow:hidden"), $(".show_content").css({display: "flex"}), $(".game-content-page").css({"padding-bottom": "60px"}), $(".game-description").css({"padding-bottom": "0px"})), $(".ShowMore_button").click((function () {
        $(".ShowMore_button").hasClass("more") ? ($(".ShowMore_button").removeClass("more"), $(".content-inner").animate({
            height: e + "px", overflow: "hidden", animation: "height 1000ms ease 0ms"
        }, {
            easing: "swing", complete: function () {
                $(".content-inner").attr("style", "height:auto"), $(".ShowMore_button").html('Show less  <span class="svg-icon" aria-hidden="true">\n                        <svg class="svg-icon__link"><use xlink:href="#icon-keyboard_arrow_up"></use></svg>\n                    </span>'), $(".ShowMore_button").addClass("less")
            }
        })) : ($(".ShowMore_button").removeClass("less"), $(".content-inner").animate({
            height: "720px", overflow: "hidden", animation: "height 1000ms ease 0ms"
        }, {
            easing: "swing", complete: function () {
                $(".content-inner").attr("style", "height:720px;overflow:hidden"), $(".ShowMore_button").html('Show more  <span class="svg-icon" aria-hidden="true">\n                        <svg class="svg-icon__link"><use xlink:href="#icon-keyboard_arrow_down"></use></svg>\n                    </span>'), $(".ShowMore_button").addClass("more")
            }
        }))
    }))
}

function copyToClipboard(e, t) {
    var s = $("<input>");
    $("body").append(s), $(e).select(), document.execCommand("copy"), $(t).html("COPIED!!"), setTimeout((function () {
        $(t).html("Copy link")
    }), 3e3), s.remove()
}

function search_mobile() {
    $("#txtSearch").each((function () {

        0 == $(this).val().length && $("#btnDoSearch").attr("disabled", "disabled")
    })), $("#txtSearch").on("keyup", (function (e) {

        let t = !1;
        $("#txtSearch").each((function () {
            t = 0 == $(this).val().length
        })), t ? $("#btnDoSearch").attr("disabled", "disabled") : ($("#btnDoSearch").attr("disabled", !1), 13 === e.keyCode && window.location.replace("/search?q=" + $("#txtSearch").val()), $("#btnDoSearch").on("click", (function () {
            window.location.replace("/search?q=" + $("#txtSearch").val())
        })))
    }))
}



function search_complete_delay() {
    $("#search").keyup(delay(function (e) {
        $(document).on("click", function (e) {
            if ($(e.target).is("#search") === false) {
                $('.search-fixed').hide();
                $('.search-complete').hide();
            }
        })
        var keyword = $(this).val();
        if (keyword.trim().length >= 3) {
            search_complete(keyword);
            $('.search-fixed').show();
        } else {
            $('.search-fixed').hide();
            $('.search-complete').hide();
        }
    }, 500))

    function search_complete(s) {
        var metadataload = {};
        metadataload.keyword = s;
        jQuery.ajax({
            url: "/game-complete-search-ajax.ajax", data: metadataload, type: "GET", success: function (data) {
                if (data) {
                    $(".search-complete").show();
                    $(".search-complete").html(data);
                    // result_slide()
                    // $('.menu-icon').click(function () {
                    //     $('.search-results').attr('style', "display: none !important")
                    // })
                }
            }
        })
    }
}

function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, arg);
        }, ms || 0)
    };
}


function search_complete() {
    $("#search_txt").keyup(delay((function (e) {
        var t, s = $("#search_txt").val();
        s.length >= 3 && ((t = {}).keywords = s, jQuery.ajax({
            url: "game-results-search.ajax", data: t, type: "GET", success: function (e) {
                if (e) {
                    $(".search-result__body").html(e);
                    var t = document.getElementById("search_txt");
                    t.addEventListener("focus", (function () {
                        document.getElementsByClassName("autocomplete-suggestions")[0].style.display = "block"
                    })), t.addEventListener("focusout", (function () {
                        setTimeout((function () {
                            document.getElementsByClassName("autocomplete-suggestions")[0].style.display = "none"
                        }), 500)
                    })), $("#search_txt").keyup(delay((function (e) {
                        $("#search_txt").val().length < 3 && $(".autocomplete-suggestions").css("display", "none")
                    }), 700))
                }
            }
        }))
    }), 700)), $("#search_txt").on("keyup", (function (e) {
        let t = !1;
        $("input#search_txt").each((function () {
            t = 0 == $(this).val().length
        })), t ? $("#search_button").attr("disabled", "disabled") : ($("#search_button").attr("disabled", !1), 13 === e.keyCode && window.location.replace("/search?q=" + $("#search_txt").val()), $("#search_button").on("click", (function () {
            window.location.replace("/search?q=" + $("#search_txt").val())
        })))
    })), $("input#search_txt").each((function () {
        0 == $(this).val().length && $("#search_button").attr("disabled", "disabled")
    }))
}

function favorite(e) {
    var image = $(e).data('image');
    var id = $(e).data('id');
    var slug = $(e).data("slug");
    var name = $(e).data("name");
    var favorited;
    if ($(e).hasClass('favorited')) {
        remove_wishlist_cookies(id);
        favorited = true;
        $(e).removeClass('favorited');
    } else {
        save_wishlish_cookies(id, slug, image, name);
        $(e).addClass('favorited');
        favorited = false;
    }
    notifical_show(id, name, image, slug, favorited, e);
}

function notifical_show(id, name, image, slug, favorited, e) {
    let str = '';
    // str += '<span class="svg-icon svg-icon--heart btn__icon" aria-hidden="true"> <svg class="svg-icon__link"> <use xlink:href="#icon-heart"></use> </svg> </span><span class="btn__text add-favorites-label">' + (favorited == true ? "Add" : "Remove") + ' to Favorites</span>';
    str += '<span class="svg-icon svg-icon--heart btn__icon" aria-hidden="true"> <svg class="svg-icon__link"> <use xlink:href="#icon-heart"></use> </svg> </span>';
    $(e).html(str);
    let html = '';
    html += '<div class="notification-success"> <div class="toastt"> <div class="content"> <div class="icon"><img width="50" height="50" src="' + image + '" class="img-fluid" /></div> <div class="details"> <span>' + (favorited == true ? "Remove" : "Add") + ' Success</span> <p>' + name + '</p> </div> </div> </div> </div>'
    $('body').one("click", e, function () {
        notification(html, 1000)
    })
}

function notification(s, time) {
    $(s).appendTo('body').fadeTo(time, 1, function () {
        $(this).fadeTo(1000, 0, function () {
            $(this).addClass('hide');
            $(this).remove();
        });
    });
}

function remove_wishlist_cookies(_id) {
    if (!!jQuery.cookie('favorite_game') && _id !== '') {
        var favorite_array = JSON.parse(jQuery.cookie("favorite_game"));
        jQuery.each(favorite_array, function (key, value) {
            favorite_array = favorite_array.filter(function (element) {
                return element !== undefined;
            });
            if (value.id === _id && key > -1) {

                favorite_array.splice(key, 1);
            }
        });
        jQuery.cookie('favorite_game', JSON.stringify(favorite_array), {expires: 30, path: '/'});
        $(".favorites-add-" + _id).removeClass('favorited');
        $(".favorites-add-" + _id).html('<span class="svg-icon svg-icon--heart btn__icon" aria-hidden="true"> <svg class="svg-icon__link"> <use xlink:href="#icon-heart"></use> </svg> </span> ')
        load_wishlist_cookies();
    }
}

function save_wishlish_cookies(_id, _slug, _image, _name) {
    var favorites_count = 10;
    if (!!jQuery.cookie('favorite_game') && _slug !== '' && _image !== '' && _id !== '' && _name != '') {
        var favorite_array = JSON.parse(jQuery.cookie("favorite_game"));
        let circle_html = '';
        jQuery.each(favorite_array, function (key, value) {
            if (value !== undefined && value.slug === _slug && key > -1) {
                favorite_array.splice(key, 1);
            }
        });
        favorite_array.push({
            "id": _id, "slug": _slug, "image": _image, "name": _name
        });
        if (favorite_array.length > favorites_count) {
            favorite_array.shift();
        }
        jQuery.cookie('favorite_game', JSON.stringify(favorite_array), {expires: 30, path: '/'});
    } else {
        var data = [];
        data.push({
            "id": _id, "slug": _slug, "image": _image, "name": _name
        });
        jQuery.cookie('favorite_game', JSON.stringify(data), {expires: 30, path: '/'});
    }
    load_wishlist_cookies();
}

function load_wishlist_cookies() {
    if (!!jQuery.cookie('favorite_game')) {
        var favorites = JSON.parse(jQuery.cookie("favorite_game"));
        let circle_html = '';
        if (favorites.length > 0) {

//Load checked compare
            var str_wishlist = '';
            let str = '';
            var $leng = favorites.length;
            var slug_array = [];
            let label_game = '';
            for (var i = $leng - 1; i >= 0; i--) {
                var value = favorites[i];
                slug_array.push(value.slug + "_" + value.kind);
                //str_wishlist += '<a href="/' + value.slug + '" class="card"> <picture> <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="' + value.image + '" alt="' + value.name + '" class="lazy img-fluid"> </picture> <div class="card-body"> <h3>' + value.name + '</h3> </div> </a>'
                str_wishlist += '<div class="games-grid__item"><div class="card"><div class="card__inner"><div class="card__thumb"><!--<div className="card__overlay c-overlay"><div className="c-overlay__icon"></div><div className="c-overlay__title">Play now</div></div>--><div class="card__rating"><span class="svg-icon star-icon" aria-hidden="true"><svg class="svg-icon__link"><use xlink:href="#icon-star-full"></use></svg></span><span>5</span></div><img width="200" height="130" src="' + value.image + '" class="img-fluid wp-post-image" alt="' + value.name + '" decoding="async" fetchpriority="high"></div><div class="card__heading"><a class="card__title" href="/' + value.slug + '">' + value.name + '</a></div></div></div></div>'
                if (value.slug === current_slug && !$(".favorites-add-" + value.id).hasClass('favorited')) {
                    $(".favorites-add-" + value.id).addClass("favorited");
                }
            }
            str += '<span class="svg-icon svg-icon--heart btn__icon" aria-hidden="true"> <svg class="svg-icon__link"> <use xlink:href="#icon-heart"></use> </svg> </span>';
            $(".favorites_btn").html(str);
            if ($leng > 0) {
                $('.badge_number').show();
                circle_html += '<span class="nav-badge favourites_qty">' + $leng + '</span>';
            }

            if ($('.badge_number').find('.favourites_qty').length > 0) {

                $('.badge_number').find('.favourites_qty').remove();
                $('.badge_number').append(circle_html);
            }
            let html = '';
            if (str_wishlist != "") {
                jQuery("#sectionFavorites").html(str_wishlist);

            }
            $(".empty_favorite").hide();
        } else {
            circle_html += '';
            $(".empty_favorite").show();
            $(".empty_favorite").html('<center>No favorite game</center>');
            $('.badge_number').hide();
        }

        jQuery(".favorite-link .count_num").html(circle_html);

    } else {
        $(".empty_favorite").show();
        $(".empty_favorite").html('<center>No favorite game</center>')
        jQuery("#favoriteGames").html('');
    }

}


function lazyLoad() {
    $('.lazy').Lazy({
        effect: "fadeIn", effectTime: 300,
    });
}


function hoverBorder() {
    $(".box .ia > a.thumb").on("mouseenter mouseleave", ch)
};

var ch = function (a) {
    var c = $(this)
        , e = c.parent()
        , l = e.outerWidth()
        , p = e.outerHeight();
    c = fh(a.offsetX, parseInt(a.pageY - c.offset().top), l, p);
    e.removeClass("top right bottom left").addClass(c);
    "mouseenter" === a.handleObj.origType ? setTimeout(function () {
        e.addClass("animate")
    }, 10) : setTimeout(function () {
        e.removeClass("animate");
        setTimeout(function () {
            e.removeClass("top right bottom left")
        }, 200)
    }, 10)
}
var fh = function (a, c, e, l) {
    var p = Vb(a, c, e / 2, 0)
        , x = Vb(a, c, e / 2, l)
        , A = Vb(a, c, 0, l / 2);
    a = Vb(a, c, e, l / 2);
    switch (Math.min(p, x, A, a)) {
        case A:
            var G = "left";
            break;
        case a:
            G = "right";
            break;
        case p:
            G = "top";
            break;
        case x:
            G = "bottom"
    }
    return G
}, Vb = function (a, c, e, l) {
    a -= e;
    c -= l;
    return a * a + c * c
}

function category_slide() {
    var slider_categories_class = document.querySelectorAll(".game-home-slider");
    slider_categories_class.forEach((userItem) => {
        let id_category = $(userItem).attr("data-id");
        let data_speed = $(userItem).attr("data-speed");
        let data_action = $(userItem).attr("data-action");
        category_slider(id_category, data_speed, data_action);
    });
}

function category_slider(id_category, data_speed, data_action) {
    var swiperCategory = new Swiper('#' + id_category, {
        speed: parseInt(data_speed),
        slidesPerView: 9, slidesPerColumn: 2, spaceBetween: 0, slidesPerGroup: 9, loop: false,
        navigation: {
            nextEl: '.' + data_action + '.btn-arrow-right2',
            prevEl: '.' + data_action + '.btn-arrow-left'
        },
        draggable: true,
        breakpoints: {
            360: {
                slidesPerView: 2, spaceBetween: 0
            }, // when window width is >= 380
            480: {
                slidesPerView: 2, spaceBetween: 0
            }, 680: {
                slidesPerView: 3, spaceBetween: 0
            }, // when window width is >= 860
            860: {
                slidesPerView: 4, spaceBetween: 0

            }, 1000: {
                slidesPerView: 5, spaceBetween: 0

            }, // when window width is >= 1200
            1200: {
                slidesPerView: 7, spaceBetween: 0
            }
        }
    });
    swiperCategory.on('slideChange', function () {
        lazyLoad();
    });

}

window.addEventListener("DOMContentLoaded", (function () {
    $('.btn-menu-panel').on('click', function () {
        $('.panel').removeClass('btn-hidden');
        $('.bg-cover').removeClass('btn-hidden');
    })
    $('.paned__header--close').on('click', function () {
        $('.panel').addClass('btn-hidden');
        $('.bg-cover').addClass('btn-hidden');
    })
    $('.bg-cover').on('click', function () {
        $('.panel').addClass('btn-hidden');
        $('.bg-cover').addClass('btn-hidden');
        $('.box-description-cover').addClass('btn-hidden')
    })

    $('.categories .links a').on('hover', function () {
        let dataImg = $(this).attr('data-img');
        let dataText = $(this).html();
        let dataLink = $(this).attr('href');
        let parent = $(this).closest('.box-alt').find('.grid .top .thumb img').attr('src', dataImg);
        let parentText = $(this).closest('.box-alt').find('.grid .top .thumb .title').html(dataText);
        let parentLink = $(this).closest('.box-alt').find('.grid .top .thumb').attr('href', dataLink);
    });

    $('.game-play a').on('hover', function () {
        let dataImg = $(this).attr('data-img');
        let dataText = $(this).html();
        let dataLink = $(this).attr('href');
        let parent = $(this).closest('.ia').find('.box-cat-play .thumb-s img').attr('src', dataImg);
        let parentText = $(this).closest('.ia').find('.box-cat-play .thumb-s span').html(dataText);
        let parentLink = $(this).closest('.ia').find('.box-cat-play .thumb-s').attr('href', dataLink);
    });

    $('.box-description-more').on('click', function () {
        $('.box-description-cover').removeClass('btn-hidden')
        $('.bg-cover').removeClass('btn-hidden')
    });



    $('.hamburger-box').on('click', function () {
        $(this).toggleClass('active');
        $('.nav__section').toggleClass('active');
    })
    $('.mobile__search--icon').on('click', function () {
        $(this).toggleClass('active');
        $('.search').toggleClass('active');
    })

    let swiper_hot_right = new Swiper('.swiper-category', {
        direction: 'vertical', loop: true, slidesPerView: 9, speed: 2000, spaceBetween: 0, autoplay: {
            delay: 0
        }, breakpoints: {
            360: {
                slidesPerView: 2, spaceBetween: 20
            }, // when window width is >= 380
            480: {
                slidesPerView: 3, spaceBetween: 30
            }, 680: {
                slidesPerView: 4, spaceBetween: 20
            }, // when window width is >= 860
            860: {
                slidesPerView: 5,
            }, 1000: {
                slidesPerView: 6, spaceBetween: 20

            }, // when window width is >= 1200
            1200: {
                slidesPerView: 7, spaceBetween: 20

            }
        }
    });

    let swiper_top_cat = new Swiper('.slide-cat', {
        speed: 500,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        loop: true,
        coverflowEffect: {
            rotate: 0, stretch: 280, depth: 80, modifier: 1.7, slideShadows: true,
        },
        on: {
            // slideChangeTransitionEnd: (swiper_top_cat) => {
            //     $('.swiper-slide-active .box-cat-title').addClass('box-add')
            //     $('.swiper-slide-prev .box-cat-title').removeClass('box-add')
            // }, slidePrevTransitionEnd: (swiper_top_cat) => {
            //     $('.swiper-slide-active .box-cat-title').addClass('box-add')
            //     $('.swiper-slide-next .box-cat-title').removeClass('box-add')
            // },
            slideChange: function () {
                $('.slide-cat .swiper-slide-next .box-cat-play span').addClass('toggle-btn')
                $('.slide-cat .swiper-slide-active .box-cat-play span').removeClass('toggle-btn')
            },
        },
        navigation: {
            nextEl: '.slide-cat-container .btn-slide-right', prevEl: '.slide-cat-container .btn-slide-left',
        },
    });
    var previousIndex = 2;
    $('.swiper-slide-active .box-cat-title').addClass('box-add')
    swiper_top_cat.on('slideChange', function () {
        var currentIndex = swiper_top_cat.activeIndex; // Chỉ số của slide hiện tại
        console.log(currentIndex)
        if (currentIndex > previousIndex) {
            $('.swiper-slide-next .box-cat-title').addClass('box-add')
            $('.swiper-slide-active .box-cat-title').removeClass('box-add')
        } else if (currentIndex < previousIndex) {
            $('.swiper-slide-prev .box-cat-title').addClass('box-add')
            $('.swiper-slide-active .box-cat-title').removeClass('box-add')
        }
        previousIndex = currentIndex; // Cập nhật chỉ số của slide trước đó
    })

    let swiper_top_games_cat = new Swiper('.slide-top-cat', {
        loop: true, slidesPerView: 9, speed: 500, spaceBetween: 0, slidesPerGroup: 9, breakpoints: {
            360: {
                slidesPerView: 2, spaceBetween: 0
            }, // when window width is >= 380
            480: {
                slidesPerView: 2, spaceBetween: 0
            }, 680: {
                slidesPerView: 2, spaceBetween: 0
            }, // when window width is >= 860
            860: {
                slidesPerView: 3, spaceBetween: 0

            }, 1000: {
                slidesPerView: 3, spaceBetween: 0

            }, // when window width is >= 1200
            1200: {
                slidesPerView: 3, spaceBetween: 0

            }
        }, navigation: {
            nextEl: '.slide-top-cat-container .btn-slide-right', prevEl: '.slide-top-cat-container .btn-slide-left',
        },
    });


    let swiper_top_rate_month = new Swiper('.top-view-rate', {
        loop: true, slidesPerView: 5, speed: 1200, spaceBetween: 10, breakpoints: {
            360: {
                slidesPerView: 2, spaceBetween: 10
            }, // when window width is >= 380
            480: {
                slidesPerView: 2, spaceBetween: 10
            }, 680: {
                slidesPerView: 2, spaceBetween: 10
            }, // when window width is >= 860
            860: {
                slidesPerView: 3, spaceBetween: 10

            }, 1000: {
                slidesPerView: 3, spaceBetween: 10

            }, // when window width is >= 1200
            1200: {
                slidesPerView: 3, spaceBetween: 10

            }
        }, navigation: {
            nextEl: '.top-view-rate-container .btn-slide-right', prevEl: '.top-view-rate-container .btn-slide-left',
        },
    });


    $('.my-favorite--games').on('click', function () {
        $('.popup-favorite').show();
    })
    $('.popup-close').on('click', function () {
        $('.popup-favorite').hide();
    })


     search_complete_delay(), search_complete(), search_mobile(), load_wishlist_cookies(), $(".scrollTo").on("click", (function (e) {
        e.preventDefault();
        var t = $(this).attr("data-target");
        let s = $("#" + t);
        $("html, body").animate({scrollTop: s.offset().top}, 500, "swing")
    }));
    slide_js(),game_share(), hide_show_content(), category_slide(), lazyLoad(),hoverBorder()

}));
function game_share() {
    close_popup();
    $("._share_btn").click(function () {
        open_popup();
    })
    $(".popup-close").click(function () {
        close_popup();
    })
    $(".popup-bg").click(function () {
        close_popup();
    })
}

function open_popup() {
    $(".popup-bg").show();
    $(".popup-share").show();
    $("html").css("overflow", "hidden")
}

function close_popup() {
    $(".popup-bg").hide();
    $(".popup-share").hide();
    $("html").css("overflow", "");
}

function open_fullscreen() {
    let e = document.getElementById("game-area") || document.documentElement;
    document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
}

