// 모바일 로그인영역
const mobile_menu = document.getElementById('mobile_menu');
const mobilemenu_gnb_wrap = document.getElementById('mobilemenu_gnb_wrap');
const mobile_sub_wrap = document.querySelectorAll('.mobile_sub_wrap');
// mobile_menu.style.height = winH + 'px';
// mobilemenu_gnb_wrap.style.height = (winH - 134) + 'px';
mobileMenuClose();

function mobileMenuOpen(){
    mobile_menu.style.display = 'block';
}

// 모바일 아코디언 메뉴
function mobileLnbMenuClose(){
    $('.mobile_menu_lnb').each(function () { 
        $(this).slideUp();
    });
  }

//아코디언 서브닫기
function mobileLnbSubClose(){
  $('.mobile_sub_wrap').each(function(){
      $(this).slideUp();
  });
} 

// 아코디언 서브-서브 닫기
function mbSubsubclose(){
  $('.mobile_sub_sub_wrap').each(function(){
    $(this).slideUp();
  });
}
$(function(){
  // 처음 메뉴버튼
    $('.mobileMenu_Bt').on('click',function(e){
      e.preventDefault();
        
      if($(this).next().hasClass('mobileMenuShow')){
        $(this).next().slideUp();
        $(this).next().toggleClass('mobileMenuShow');
      }
      else{
        mobileLnbMenuClose();
        $(this).next().slideDown();
        $(this).next().toggleClass('mobileMenuShow');
      }
    });
    //아코디언 서브 
    $('.Mlnb_Bt').on('click',function(e){
      e.preventDefault();
      if($(this).next().hasClass('mobileSubShow')){
        $(this).next().hide();
        $(this).next().toggleClass('mobileSubShow');
      }
      else{
        mobileLnbSubClose();
        $(this).next().show();
        $(this).next().toggleClass('mobileSubShow');
      }

      //아코디언 서브-서브 뒤로가기
      $('.mb_backBt').on("click",function(){
        $(this).parent().parent().removeClass('mobileSubShow');
        $(this).parent().parent().hide();
        $('.mobile_sub_sub_wrap').removeClass('mobileSubSubShow'); 
        mbSubsubclose();
      });

      // 아코디언 서브 - 서브 열기
      $('.Msub_BT').off('click').on("click",function(e){ // off - 이벤트 중복방지
        e.preventDefault();
        if($(this).next().hasClass('mobileSubSubShow')){
          $(this).next().slideUp();
          $(this).next().toggleClass('mobileSubSubShow');
        }
        else{
          mbSubsubclose();
          $(this).next().slideDown();
          $(this).next().toggleClass('mobileSubSubShow');
        }
      });
    });
});

// 모바일 메뉴 닫기
function mobileMenuClose(){
  mobile_menu.style.display = 'none';
  MIconAllClose();
}

// 모바일 검색아이콘 클릭시 검색메뉴 활성화 
const mobile_iconMenuWrap = document.getElementById('mobile_iconMenuWrap');
const mobileSearchmenu = document.getElementById('mobileSearchmenu');
const MsearchBt = document.querySelectorAll('.MsearchBt');
function MsearchOpen(e){
  e.preventDefault();
  MIconAllClose();
  mobileMenuOpen();
  mobile_iconMenuWrap.style.display = "block";
  mobileSearchmenu.style.display = 'block';
}
for (let i = 0; i < MsearchBt.length; i++) {
  MsearchBt[i].addEventListener('click',MsearchOpen);  
}

// 모바일 로그인 버튼 클릭시 로그인 메뉴 활성화 
const mobileLoginMenu = document.getElementById("mobileLoginMenu");
const mLoginBt = document.getElementById("mLoginBt");
function MLogOpen(e){
  e.preventDefault();
  MIconAllClose();
  mobileMenuOpen();
  mobile_iconMenuWrap.style.display = "block";
  mobileLoginMenu.style.display = "block";
}
mLoginBt.addEventListener("click",MLogOpen);

// 모바일 위시리스트 클릭시 위시리스트 활성화 
const mobileWish = document.getElementById("mobileWish");
const mWishBt = document.getElementById("mWishBt");
function MWishOpen(e){
  e.preventDefault();
  MIconAllClose();
  mobileMenuOpen();
  mobile_iconMenuWrap.style.display = "block";
  mobileWish.style.display = "block";
}
mWishBt.addEventListener("click",MWishOpen);

// 모바일 장바구니 버튼 클릭시 장바구니 활성화
const mobileBag = document.getElementById("mobileBag");
const MbagBt = document.querySelectorAll('.MbagBt');
function MBagOpen(){
  MIconAllClose();
  mobileMenuOpen();
  mobile_iconMenuWrap.style.display = "block";
  mobileBag.style.display = "block";
}
for (let i = 0; i < MbagBt.length; i++) {
  MbagBt[i].addEventListener("click",MBagOpen); 
}

// 아이콘 메뉴 닫기 
function MIconAllClose(){
  const mobile_iconMenuWrap = document.getElementById('mobile_iconMenuWrap');
  const mobileSearchmenu = document.getElementById('mobileSearchmenu');
  const mobileLoginMenu = document.getElementById("mobileLoginMenu");
  const mobileWish = document.getElementById("mobileWish");
  const mobileBag = document.getElementById("mobileBag");
  mobile_iconMenuWrap.style.display = "none";
  mobileSearchmenu.style.display = 'none';
  mobileLoginMenu.style.display = "none";
  mobileWish.style.display = 'none';
  mobileBag.style.display = 'none';
}