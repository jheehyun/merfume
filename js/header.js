var winH = window.innerHeight;
var winW = window.innerWidth;
lnbWrap = document.getElementById('header_lnb');
lnbWrap.style.display = 'none';
lnbMenu = document.getElementsByClassName('header_lnb_menu');
lnbMenu[0].style.display = 'none';
lnb_sub_Wrap = document.getElementById('hdlnb_sub_ul-wrap');
lnb_sub_Wrap.style.display = 'none';
lnb_sub = document.getElementsByClassName('hdlnb_sub_ul');
lnb_sub_Menus = lnb_sub_Wrap.children;
lnb_sub_MenusLe = lnb_sub_Wrap.children.length;
gnbWrap = document.getElementById('header_gnb_right_lnb');
gnbWrap.style.display = 'none';
gnbWrap.style.height = (winH - 100) + 'px';
gnbSe = document.getElementById('hd_gnb_rightSearch');
gnbSe.style.height = (winH * 0.5) + 'px';
gnbSe.style.display = 'none';
modalWrap = document.getElementById('header_modal_wrap');
modalWrap.style.height = winH + 'px';
modalWrap.style.display = 'none';
gnbLog = document.getElementById('hd_gnb_login');
gnbLog.style.display = 'none';
gnbLog.style.height = winH + 'px';
logJoinBt = document.getElementsByClassName('Logbts');
gnbWish = document.getElementById('hd_gnb_wish');
gnbWish.style.display = 'none';
gnbWish.style.height = winH + 'px';
gnbBag = document.getElementById('hd_gnb_bag');
gnbBag.style.display = 'none';
gnbBag.style.height = winH + 'px';

// 쇼핑하기 메뉴열기
function subMenuopen(n){
    lnbWrap.style.display = 'block';
    lnbMenu[0].style.display = 'flex';
    lnb_sub_Wrap.style.display = 'block';
    modalWrap.style.display = 'none';
    for(i=0; i<lnb_sub_MenusLe; i++){
        lnb_sub_Menus[i].style.display = 'none'
    }
    lnb_sub_Menus[n].style.display = 'block';
    lnb_sub[n].style.height = (winH * 0.7) + 'px';
}

// 선물하기
function sub2Menuopen(){
    lnbWrap.style.display = 'block';
    lnbMenu[0].style.display = 'none';
    modalWrap.style.display = 'none';
    for(i=0; i<lnb_sub_MenusLe; i++){
        lnb_sub_Menus[i].style.display = 'none';
    }
    lnb_sub_Menus[lnb_sub_MenusLe-3].style.display = 'block';
    lnb_sub[lnb_sub_MenusLe-3].style.height = (winH * 0.7) + 'px';
}
// 스토어
function sub3Menuopen(){
    lnbWrap.style.display = 'block';
    lnbMenu[0].style.display = 'none';
    modalWrap.style.display = 'none';
    for(i=0; i<lnb_sub_MenusLe; i++){
        lnb_sub_Menus[i].style.display = 'none';
    }
    lnb_sub_Menus[lnb_sub_MenusLe-2].style.display = 'block';
    lnb_sub[lnb_sub_MenusLe-2].style.height = (winH * 0.7) + 'px';
}
// 머퓸하우스
function sub4Menuopen(){
    lnbWrap.style.display = 'block';
    lnbMenu[0].style.display = 'none';
    modalWrap.style.display = 'none';
    for(i=0; i<lnb_sub_MenusLe; i++){
        lnb_sub_Menus[i].style.display = 'none';
    }
    lnb_sub_Menus[lnb_sub_MenusLe-1].style.display = 'block';
    lnb_sub[lnb_sub_MenusLe-1].style.height = (winH * 0.7) + 'px';
}
function menuout(){
    lnbWrap.style.display = 'none';
}

// 검색영역
function searchBt(){
    lnbWrap.style.display = 'block';
    gnbWrap.style.display = 'block';
    gnbSe.style.display = 'block';
    lnbMenu[0].style.display = 'none';
    modalWrap.style.display = 'none';
    for(i=0; i<lnb_sub_MenusLe; i++){
        lnb_sub_Menus[i].style.display = 'none';
    }
}
// 로그인
function loginBt(){
    lnbWrap.style.display = 'block';
    gnbSe.style.display = 'none';
    gnbWrap.style.display = 'none';
    gnbWish.style.display = 'none';
    gnbBag.style.display = 'none';
    modalWrap.style.display = 'block';
    gnbLog.style.display = 'block';
    logJoinBt[0].classList.add('btLine');
}
// 위시리스트
function wishListBt(){
    lnbWrap.style.display = 'block';
    gnbSe.style.display = 'none';
    gnbWrap.style.display = 'none';
    gnbWish.style.display = 'block';
    gnbBag.style.display = 'none';
    modalWrap.style.display = 'block';
    modalWrap.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
    gnbLog.style.display = 'none';
}
// 장바구니
function bagBt(){
    lnbWrap.style.display = 'block';
    gnbSe.style.display = 'none';
    gnbWrap.style.display = 'none';
    gnbWish.style.display = 'none';
    gnbBag.style.display = 'block';
    modalWrap.style.display = 'block';
    modalWrap.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
    gnbLog.style.display = 'none';
}

function LogbtLine(n){
    for (i = 0; i <logJoinBt.length; i++) {
        logJoinBt[i].classList.remove('btLine');
        
    }
    logJoinBt[n].classList.add('btLine');
}


