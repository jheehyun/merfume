var winH = window.innerHeight;


// 메인 상품 너비,높이 설정

const mainProductPart = document.getElementById('mainProductPart');
mainProductPartWidth = mainProductPart.clientWidth;
const mainProductLi = document.getElementsByClassName('mainProductLi');
let mainProductLiWidth = mainProductLi[0].clientWidth;


mainProductLiHeight();
function mainProductLiHeight(){
    for (i = 0; i < mainProductLi.length; i++) {
        let mainProductLiWidth = mainProductLi[0].clientWidth;
        mainProductLi[i].style.height = mainProductLiWidth  + 'px';
    }
}

window.addEventListener('resize',mainProductLiHeight);
// 베스트 셀러 영역
const bsLi = document.getElementsByClassName('bsLi');
const bsImg = document.getElementsByClassName('bsImg');
let bsImginWidth = bsImg[0].querySelector('a>img').clientWidth;

function setBsImg(){
    for (let i = 0; i < bsImg.length; i++) {
        // 변수를 다시 할당해줘야 resize시 width의 값이 바뀌는걸 출력할수 있음
        let bsImginWidth = bsImg[i].querySelector('a>img').clientWidth;
        bsImg[i].style.height = (bsImginWidth*1) + 'px';    
    }
}
setBsImg(); // 함수 선언먼저 

// 베스트 셀러 영역 슬라이드, 태블릿 사이즈 부터 구현 
// 태블릿 사이즈 미만 일 때만 작동
sl =1;
window.addEventListener('resize',setBsImg);
window.addEventListener('resize',bsResize);

function bsResize(){
    bestsellSlide(sl);
}
bestsellSlide(sl);
function bestsellSlide(n){
    if(window.innerWidth>1024){    
        for (let i = 0; i < bsLi.length; i++) {
            bsLi[i].style.display = 'block';
        }
    }
    else{
        
        for (let i = 0; i < bsLi.length; i++) {
            bsLi[i].style.display = 'none';
        }
        if(n<1){
            sl = bsLi.length;
        }
        if(n>bsLi.length){
            sl = 1;
        }
        bsLi[sl-1].style.display = 'block';
    }
    setBsImg();    
}
function PrevNext(n){
    bestsellSlide(sl+=n);
}




