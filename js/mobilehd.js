var winH = window.innerHeight;
// 모바일 로그인영역
const mobile_menu = document.getElementById('mobile_menu');
const mobilemenu_gnb_wrap = document.getElementById('mobilemenu_gnb_wrap');
const mobileSearchmenu = document.getElementById('mobileSearchmenu');
const MsearchBt = document.getElementsByClassName('MsearchBt');
const mobile_sub_wrap = document.querySelectorAll('.mobile_sub_wrap');
mobile_menu.style.height = winH + 'px';
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
function mobileMenuClose(){
    mobile_menu.style.display = 'none';
}

// 모바일 검색아이콘 클릭시 검색메뉴 활성화 
function MsearchClick(e){
  e.preventDefault();
  mobileSearchmenu.style.display = 'block';
}
MsearchBt[0].addEventListener('click',MsearchClick);