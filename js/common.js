// =================== 로그인 팝업창 ================
let alert_count = 0;
function login() {
    let log_result = true;

    let username = $('.user_ID').val();
    let password = $('.user_PW').val();
    
    if(alert_count >= 5){
        alert("5회이상 잘못 입력하였습니다.(5분후 재시도 해주시기 바랍니다.)");
        $('.alert_box').text('❗5회이상 잘못 입력하였습니다.(5분후 재시도 해주시기 바랍니다.)')
        log_result= false;
    }
    else if(username == ""){
        $('.alert_box').text('❗아이디를 입력해주세요.')
        log_result= false;
    }
    else if(password == ""){
        $('.alert_box').text('❗비밀번호를 입력해주세요.')
        log_result= false;
    }
    else if(username.match('@')){
        if(username == "1234@naver.com"){
            if(password == 1234){
                $('.alert_box').text('')
                $(".popup_pan, .login_popup").hide();
                window.open(""+location.href+"?@login", "_self");
                // log_result= true;
                log_result= false;
            }
            else{
                alert('로그인 실패')
                $('.alert_box').text('❗비밀번호가 일치하지 않습니다.')
                alert_count++;
                log_result= false;
            }
        }
        else{
            alert('로그인 실패')
            $('.alert_box').text('❗존재하지 않는 아이디 입니다.')
            alert_count++;
            log_result= false;
        }
    }
    else{
        alert('로그인 실패')
        $('.alert_box').text('❗잘못된 아이디 형식입니다.')
        alert_count++
        log_result= false;
    }

    return log_result;
}
$(document).ready(function() {
    // =================== 로그인 팝업창 =====================
    $('.login .open_popup').click(function(){
        $(".popup_pan, .login_popup").show();

        $('.login_popup .popup_close_btn').click(function(){
            $(".popup_pan, .login_popup").hide();
            $('body').css({
                overflow:"auto"
            })
        })
    })
    
    if(location.href.split("@")[1] == "login"){
        $('.login .open_popup').hide();
        $('.login .success_login').show();
    }
    else if(location.href.split("@")[1] == ""){
        $('.login .open_popup').show();
        $('.login .success_login').hide();
    }
    
    $('.login .success_login').click(function(){
        $('.success_login .my_page').toggle();
    })
    $('.logout_btn').click(function(){
        window.open("./999.portfolio_main.html", "_self");
    })
    // =======================메뉴 언더바 이동==============================
    $('.nav_menu').eq(0).addClass('hover_color, click_color');
    $('.nav_li_bar').css({
        width: $('.nav_menu').eq(0).outerWidth(),
        left: $('.nav_menu').eq(0).position().left
    })
    $('.nav_menu').mouseenter(function(){ 
        $('.nav_li_bar').css({
            left: $(this).position().left, 
            width: $(this).innerWidth() 
        })
        $('.nav_menu').removeClass("hover_color");
        $(this).addClass("hover_color");
    })
    $('.nav_menu').mouseleave(function(){ 
        $('.nav_menu').removeClass("hover_color");
    })
    $('.nav_menu').click(function(){ 
        $('.nav_menu').removeClass("click_color");
        $(this).addClass("click_color");
    })

    
    // =============================메뉴바 스크롤===========================
    let nav_top = $('.nav').offset().top
    $(window).scroll(function(){

        if(nav_top <= $(window).scrollTop() ) {
            $('.nav').css({
                position: 'fixed',
                top: 0,
                left: 0,
                background: '#26292e',
                zIndex: 999
            })
        }
        else {
            $('.nav').css({
                position: 'relative',
                backgroundColor: "transparent"
            })
        }
    })
    
    
    // =============================top btn==============================
    $('.top_btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })
})