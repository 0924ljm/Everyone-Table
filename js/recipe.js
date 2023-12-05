$(document).ready(function() {
    let nav_top = $('.nav').offset().top
    $(window).scroll(function(){
        if(nav_top <= $(window).scrollTop() ) {
            $('main').css({
                marginTop: "50px"
            })
        }
        else {
            $('main').css({
                marginTop: "0"
            })
        }
    })
    // console.log(location.href.split("?")[1].split('&'));
    let url = location.href.split("?")[1].split('&');
    // console.log("sec_no=" + url[0].split('=')[1]);
    // console.log("cate_no=" + url[1].split('=')[1]);
    // console.log("item_no=" + url[2].split('=')[1]);
    let sec_no = url[0].split('=')[1];
    let cate_no = url[1].split('=')[1];
    let item_no = url[2].split('=')[1];
    
    if(sec_no == 1){
        let item = `<div class="img_box">
                        <img src="img/포폴/best10/item${ITEM_LIST[sec_no][item_no].src}" alt="">
                    </div>
                    <div class="txt_box">
                        <div class="sub_title">${ITEM_LIST[sec_no][item_no].sub_title}</div>
                        <div class="title">${ITEM_LIST[sec_no][item_no].title}</div>
                        <div class="recipe_info">
                            <div class="level">난이도: ${ITEM_LIST[sec_no][item_no].level}</div>
                            <div class="lead_time">소요시간: ${ITEM_LIST[sec_no][item_no].time}</div>
                            <div class="view_note">노트보기(64)</div>
                        </div>
                        <div class="coment">
                            ${ITEM_LIST[sec_no][item_no].coment}
                        </div>
                    </div>`
        $('.sec_L').append(item)
        
        let ing_length = ITEM_LIST[sec_no][item_no].ingredient.length;
        
        for(i=0; i<ing_length; i++){
            let item2 =`<div class="ingredient">
                        <div class="ingredient_name">
                            ${ITEM_LIST[sec_no][item_no].ingredient[i].name}
                        </div>
                        <div class="ingredient_count">
                            ${ITEM_LIST[sec_no][item_no].ingredient[i].count}
                        </div>
                    </div>`
            $('.ingredient_box').append(item2)
        }
        let item3 = `<a href="999.portfolio_cart.html?sec_no=${sec_no}&cate_no=0&item_no=${item_no}">재료 구매하기</a>`
        $('.cart_link').append(item3)
    }
    else if(sec_no == 2){
        let item = `<div class="img_box">
                        <img src="img/포폴/our/${ITEM_LIST[sec_no][cate_no][item_no].src}" alt="">
                    </div>
                    <div class="txt_box">
                        <div class="sub_title">${ITEM_LIST[sec_no][cate_no][item_no].sub_title}</div>
                        <div class="title">${ITEM_LIST[sec_no][cate_no][item_no].title}</div>
                        <div class="recipe_info">
                            <div class="level">난이도: ${ITEM_LIST[sec_no][cate_no][item_no].level}</div>
                            <div class="lead_time">소요시간: ${ITEM_LIST[sec_no][cate_no][item_no].time}</div>
                            <div class="view_note">노트보기(64)</div>
                        </div>
                        <div class="coment">
                            ${ITEM_LIST[sec_no][cate_no][item_no].coment}
                        </div>
                    </div>`
        $('.sec_L').append(item)
        
        let ing_length = ITEM_LIST[sec_no][cate_no][item_no].ingredient.length;
        
        for(i=0; i<ing_length; i++){
            let item2 =`<div class="ingredient">
                        <div class="ingredient_name">
                            ${ITEM_LIST[sec_no][cate_no][item_no].ingredient[i].name}
                        </div>
                        <div class="ingredient_count">
                            ${ITEM_LIST[sec_no][cate_no][item_no].ingredient[i].count}
                        </div>
                    </div>`
            $('.ingredient_box').append(item2)
        }
        let item3 = `<a href="999.portfolio_cart.html?sec_no=${sec_no}&cate_no=${cate_no}&item_no=${item_no}">재료 구매하기</a>`
        $('.cart_link').append(item3)
    }
    // =================top btn==============================
    
    $(window).scroll(function(){
        let line = $(window).scrollTop() + $(window).height() - 300
        if($('.recipe_main').offset().top <= line) {
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
})
// a href="999.portfolio_cart.html?sec_no=2&cate_no=${view_now}&item_no=${i}