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

    let url = location.href.split("?")[1].split('&');
    let sec_no = url[0].split('=')[1];
    let cate_no = url[1].split('=')[1];
    let item_no = url[2].split('=')[1];
    if(sec_no == 1){
        let ing_length = ITEM_LIST[sec_no][item_no].ingredient.length
        for(i=0; i<ing_length; i++){
            let item = `<div class="item_box">
                            <div class="checkmark chkActive">✓</div>
                            <div class="box1">
                                <div class="item_name">${ITEM_LIST[sec_no][item_no].ingredient[i].name}</div>
                                <div class="item_price">가격 : ${ITEM_LIST[sec_no][item_no].ingredient[i].cost}원</div>
                            </div>
                            <div class="box2">
                                <div class="count_box">
                                    <div class="item_count_btn btn_minus">-</div>
                                    <input type="number" min="1" value="1" class="item_count">
                                    <div class="item_count_btn btn_plus">+</div>
                                </div>
                                <div class="item_total_price">합계 : ${ITEM_LIST[sec_no][item_no].ingredient[i].cost}원</div>
                            </div>
                        </div>`
            $('.cart_item_list_container').append(item)
        }
    }
    else if(sec_no == 2){
        let ing_length = ITEM_LIST[sec_no][cate_no][item_no].ingredient.length
        for(i=0; i<ing_length; i++){
            let item = `<div class="item_box">
                            <div class="checkmark chkActive">✓</div>
                            <div class="box1">
                                <div class="item_name">${ITEM_LIST[sec_no][cate_no][item_no].ingredient[i].name}</div>
                                <div class="item_price">가격 : ${ITEM_LIST[sec_no][cate_no][item_no].ingredient[i].cost}원</div>
                            </div>
                            <div class="box2">
                                <div class="count_box">
                                    <div class="item_count_btn btn_minus">-</div>
                                    <input type="number" min="1" value="1" class="item_count">
                                    <div class="item_count_btn btn_plus">+</div>
                                </div>
                                <div class="item_total_price">합계 : ${ITEM_LIST[sec_no][cate_no][item_no].ingredient[i].cost}원</div>
                            </div>
                        </div>`
            $('.cart_item_list_container').append(item)
        }
    }
    $('.btn_minus').click(function(){
        if(+$(this).next('.item_count').val()  - 1  >= 0) {
            let tmp_qty = +$(this).next('.item_count').val()  - 1;
            $(this).next('.item_count').val(tmp_qty)
            
            let total_price = $(this).parent('.count_box').next('.item_total_price')
            let price = $(this).parent('.count_box').parent('.box2').prev('.box1').children('.item_price').text().split(':')[1].split('원')[0]
            total_price.text(`합계 : ${$(this).next('.item_count').val()*price}원`)

            price_info()
        }
    })
    $('.btn_plus').click(function(){
        let tmp_qty = +$(this).prev('.item_count').val()  + 1  
        $(this).prev('.item_count').val(tmp_qty)
        
        let total_price = $(this).parent('.count_box').next('.item_total_price')
        let price = $(this).parent('.count_box').parent('.box2').prev('.box1').children('.item_price').text().split(':')[1].split('원')[0]
        total_price.text(`합계 : ${$(this).prev('.item_count').val()*price}원`)

        price_info()
    })
    $('.checkmark, .all_checkmark').click(function(){
        $(this).toggleClass('chkActive');
        price_info()
    })
    $('.all_checkmark').click(function(){
        if($(this).hasClass('chkActive')){
            $('.checkmark').addClass('chkActive')
        }
        else if($(this).hasClass('chkActive') == false){
            $('.checkmark').removeClass('chkActive')
        }
        price_info()
    })
    
    function price_info(){
        let all_price_total = 0;
        for(i=0; i<$('.item_box').length; i++){
            if($('.item_box').eq(i).find('.checkmark').hasClass('chkActive')) {
                let each_price = Number($('.item_total_price').eq(i).text().split(':')[1].split("원")[0])
                all_price_total +=  each_price
            }
        }
        $('.item_total_price .price_num').text(all_price_total.toLocaleString("ko")+"원")
        if(all_price_total >= 50000){
            $('.delivery_charge .price_num').text('0원')
        }
        else if(all_price_total == 0){
            $('.delivery_charge .price_num').text('0원')
        }
        else{
            $('.delivery_charge .price_num').text('5,000원')
        }
        let delivery_charge = Number($('.delivery_charge .price_num').text().split('원')[0].replace(',',""));
        $('.final_price .price_num').text((all_price_total + delivery_charge).toLocaleString("ko")+"원")
    }
    price_info();

    
    let cc_o_top = $('.cart_container').offset().top;
    // let cc_bot = cc_o_top + $('.cart_container').height();
    $(window).resize(function(){ 
        if (window.innerWidth > 600) { 
            $(window).scroll(function(){
                let s_top = $(window).scrollTop() + 50;
                // let tib_top = $('.total_info_box').offset().top;
                // let tib_bot = tib_top + $('.total_info_box').height();
                if(s_top >= cc_o_top) {
                    // if(tib_bot >= cc_bot){
                    //     $('.total_info_box').css({
                    //         top: `100% - ${$('.total_info_box').height()}`,
                    //     })
                    // }
                    $('.total_info_box').css({
                        top: $(window).scrollTop() - cc_o_top + 50,
                    })
                }
            })
        }
        }).resize(); 


})