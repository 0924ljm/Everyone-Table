// ================== 스와이퍼 =========================
console.log(location.href);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 3,  
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, 
    },
    speed: 500, 
    loop: true,
    direction: 'horizontal',
    effect: 'slide'
    
});
$(window).resize(function(){ 
    if (window.innerWidth > 500) {  // 다바이스 크기가 480이상일때 
    
    /* 스크립트내용*/ 
    
    } else {
    
    /* 스크립트내용*/ 
    
    }
    
    }).resize(); 
$(document).ready(function() {
    // ====================스크롤 이벤트==========================
    $(window).scroll(function(){
        let line = $(window).scrollTop() + $(window).height() - 300
        if($('.md_pick').offset().top <= line) {
            $('.md_pick').animate({
                    opacity: 1,
                }, 1000)
        }
        function scroll_event(el){
            if(el.offset().top <= line) {
                for(let i=0; i<el.find(".item_init").length; i++) {
                    setTimeout(function(){
                        el.find(".item_init").eq(i).addClass('item_init_active')
                    }, i*150)
                }
            }
        }
        scroll_event($(".best10"))
        scroll_event($(".our_recipe"))
        scroll_event($(".best_review"))
    })
    
    
    // =================== 추천레시피 슬라이드 버튼 ======================
    $(".item_video_box").children('video').eq(0).css({opacity: 1, zIndex: 9});
    $('.sub_title').eq(0).css({top: 0});
    $('.md_pick_title').eq(0).css({top: 0});
    $('.md_pick_info').eq(0).css({top: 0});
    $('.md_pick_coment').eq(0).css({opacity: 1});

    let curr_idx=0;
    let vb_count = $('.item_video_box').children('video').length;

    let timer = 1000;
    $('.next_btn').click(function(){
        btn_stop()
        $('.item_video_box').children('video').eq(curr_idx % vb_count).css({
            zIndex: 0
        }).animate({
            opacity: 0
        }, timer)
        $('.item_video_box').children('video').eq((curr_idx+1) % vb_count).css({
            opacity: 0,
            zIndex: 9
        }).animate({
            opacity: 1
        }, timer)
        
        function slide_up(el) {
        el.eq(curr_idx % 3).animate({
            top: '-100%'
        }, timer)
        el.eq((curr_idx+1) % 3).css({
            top: '100%'
        }).animate({
            top: 0
        }, timer)
        }
        slide_up($(".sub_title"))
        slide_up($(".md_pick_title"))
        slide_up($(".md_pick_info"))

        $(".md_pick_coment").eq(curr_idx % 3).animate({
            opacity: 0
        }, timer/3)
        $(".md_pick_coment").eq((curr_idx+1) % 3).css({
            opacity: 0
        }).animate({
            opacity: 1
        }, timer)

        curr_idx+=1;
    })

    $('.before_btn').click(function(){
        btn_stop()
        $('.item_video_box').children('video').eq(curr_idx % vb_count).css({
            zIndex: 0
        }).animate({
            opacity: 0
        }, timer)
        $('.item_video_box').children('video').eq((curr_idx-1) % vb_count).css({
            opacity: 0,
            zIndex: 9
        }).animate({
            opacity: 1
        }, timer)

        function slide_down(el) {
        el.eq(curr_idx % 3).animate({
            top: '100%'
        }, timer)
        el.eq((curr_idx-1) % 3).css({
            top: '-100%'
        }).animate({
            top: 0
        }, timer)
        }
        slide_down($(".sub_title"))
        slide_down($(".md_pick_title"))
        slide_down($(".md_pick_info"))

        $(".md_pick_coment").eq(curr_idx % 3).animate({
            opacity: 0
        }, timer/3)
        $(".md_pick_coment").eq((curr_idx-1) % 3).css({
            opacity: 0
        }).animate({
            opacity: 1
        }, timer)

        curr_idx-=1;
        
    })
    function btn_stop() {
        $('.md_pick_btn').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.md_pick_btn').css({pointerEvents:'auto'})
        }, timer)
    }
    
    
    // ======================== Best 10 ============================
    for(let i=0; i<10; i++) {
        let item = `<a href="999.portfolio_recipe.html?sec_no=1&cate_no=0&item_no=${i}">
                        <img src="./img/포폴/best10/item${ITEM_LIST[1][i].src}" alt="">
                        <div id="swiper_info">
                            <h3>${ITEM_LIST[1][i].title}</h3>
                            <p>${ITEM_LIST[1][i].txt}</p>
                        </div>
                    </a>`;
        $('.swiper-slide').eq(i).append(item)
    }
    
    
    // ====================== OUR RECIPE =======================
    $('.category').eq(0).addClass('category_click');
    let view_now = 0;
    $('.category').click(function(){
        $('.category').removeClass('category_click');
        $(this).addClass('category_click');
        $('#our_recipe_main').empty()
        let category_index = $(this).index();
        view_now = category_index;
        // console.log($(this).index());

        for(let i=0; i<8; i++) {
            let item = `<div class="our_recipe_item">
                            <a href="999.portfolio_recipe.html?sec_no=2&cate_no=${category_index}&item_no=${i}">
                                <div class="item_img_box">
                                    <img src="img/포폴/our/${ITEM_LIST[2][category_index][i].src}" alt="">
                                    <div class="pan"></div>
                                </div>
                                <div class="txt_box">
                                    <h3 class="title">${ITEM_LIST[2][category_index][i].title}</h3>
                                    <p>
                                        난이도: <span class="level">${ITEM_LIST[2][category_index][i].level}</span>
                                        조리시간: <span class="time">${ITEM_LIST[2][category_index][i].time}</span>
                                    </p>
                                </div>
                            </a>
                        </div>`;
            $('#our_recipe_main').append(item)
        }
    })
    for(let i=0; i<8; i++) {
        let item = `<div class="our_recipe_item">
                        <a href="999.portfolio_recipe.html?sec_no=2&cate_no=${0}&item_no=${i}">
                            <div class="item_img_box">
                                <img src="img/포폴/our/${ITEM_LIST[2][0][i].src}" alt="">
                                <div class="pan"></div>
                            </div>
                            <div class="txt_box">
                                <h3 class="title">${ITEM_LIST[2][0][i].title}</h3>
                                <p>
                                    난이도: <span class="level">${ITEM_LIST[2][0][i].level}</span>
                                    조리시간: <span class="time">${ITEM_LIST[2][0][i].time}</span>
                                </p>
                            </div>
                        </a>
                    </div>`;
        $('#our_recipe_main').append(item)
    }

    $('.our_recipe_more_btn').eq(0).click(function(){add_more(4)});
    let or_length = $('.our_recipe_item').length
    function add_more(num) {
        for(let i=or_length; i<(or_length+num); i++) {
            let item = `<div class="our_recipe_item">
                            <a href="999.portfolio_recipe.html?sec_no=2&cate_no=${view_now}&item_no=${i%8}">
                                <div class="item_img_box">
                                    <img src="img/포폴/our/${ITEM_LIST[2][view_now][i%8].src}" alt="">
                                    <div class="pan"></div>
                                </div>
                                <div class="txt_box">
                                    <h3 class="title">${ITEM_LIST[2][view_now][i%8].title}</h3>
                                    <p>
                                        난이도: <span class="level">${ITEM_LIST[2][view_now][i%8].level}</span>
                                        조리시간: <span class="time">${ITEM_LIST[2][view_now][i%8].time}</span>
                                    </p>
                                </div>
                            </a>
                        </div>`;
            $('#our_recipe_main').append(item)
        }
        or_length = $('.our_recipe_item').length
    }
    
    // =================== top btn ========================
    $(window).scroll(function(){
        let line = $(window).scrollTop() + $(window).height() - 300
        if($('.best10').offset().top <= line) {
            $('.top_btn').css({
                display: "flex"
            })
        }
        else{
            $('.top_btn').css({
                display: "none"
            })
        }
    })
    // =================== 로그인 =========================
    // $('.login').click(function(){
    //     var popupW = 500;
    //     var popupH = 400;
    //     var left = Math.ceil((window.screen.width - popupW)/2);
    //     var top = Math.ceil((window.screen.height - popupH)/2);
    //     window.open('./999.portfolio_login.html','','width='+popupW+',height='+popupH+',left='+left+',top='+top+',scrollbars=yes,resizable=no,toolbar=no,titlebar=no,menubar=no,location=no')
    // })
})