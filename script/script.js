var searchbar = document.getElementById("search_bar");
var searchbtn = document.getElementById("search_btn");
var navheader = document.getElementById("nav");
var startbtn = document.getElementById("start");
var header_a_tag = document.getElementsByTagName("a");

var tomato_first = document.getElementById("an");
var tomato_second = document.getElementById("om");
var tomato_third = document.getElementById("am");

var cheezebtn = document.getElementById("findcheeze");
var sourcebtn = document.getElementById("findsource");

var plankton = document.getElementById("plankton");
var searchcnt = 0;
var plank_cnt = 0;
var headercnt;

var start_click = false;

var crap = false;
var bread = false;
var tomato = false;
var pickle = false;
var cheeze = false;
var source = false;

startbtn.onclick = function() {
  if(!start_click) {
    start_click = true;
    startbtn.innerText = "냐하하하하~ 게살버거 너무 졓아!!!";
    setTimeout(changetxt, 2000);
  }
};

// clean 펑션
function changetxt() {
  startbtn.innerHTML = "게살버거를 만들기 위해 6종류의 재료를 모아주세요!!<br>우선 게살을 구해봅시다.<br><br>좌측 상단의 검색창에 <b>'스폰지밥'</b>을 입력 후.<br>검색 버튼을 <b>'10번'</b>눌러주세요!!";
};

// search 기능
searchbtn.onclick = function() { 
  // "스폰지밥"이라는 텍스트 입력된 상태에서
  // searchbtn을 누르지 않으면 cnt가 추가되지 않음
  if((searchbar.value != "스폰지밥" && searchbtn.innerHTML == "검색") || start_click == false || searchbtn.value == "검색") {
    return;
  }
  else {
    searchcnt += 1;
   
    if(searchcnt >= 10 && crap == false) {
      searchbtn.innerHTML = "게살";
      startbtn.innerHTML = "버튼이 '게살'로 바뀌었나요?<br>게살을 획득하려면 '획득'을 INPUT 시켜주세요"
    }
  
    // 1. 게살
    if(searchbar.value == "획득" && searchbtn.innerHTML == "게살" && crap == false) {
      searchcnt = 0;
      complete_item("crap");
      searchbar.value = "";
      startbtn.innerHTML = "다음 재료는 '빵'입니다!<br>우리의 주인공, 스폰지밥 화면으로 넘어가봅시다.";
    }


    // 4. 피클
    if(searchcnt >= 10 && crap == true) {
      searchbtn.innerHTML = "피클";
    }

    if(searchbar.value == "획득" && searchbtn.innerHTML == "피클") {
      complete_item("pickle");
      searchbar.value = "";
      startbtn.innerHTML = "치즈는 츤데레 옆집 친구 깐깐징어(징징이)가 가지고 있다네요?!<br>클라리넷 연주 중이 아니길 빌어봅시다.";
    }
  }
}

// 2. 빵
var findbread = document.getElementById("findbread");
var sponge_info = document.querySelector(".sponge_info");
var bread_game = document.querySelector(".sponge_body");
var sponge_fin = document.getElementById("sponge_review");
var sponge_title = document.getElementById("sponge_title");
findbread.onclick = function() {
  if(crap == false) { alert("게살을 구한 뒤에 시작해주세요!!"); return; }

  // 숨은 버튼 찾기
  if(bread_game.style.display == "none") {
    sponge_info.style.display = "none";
    bread_game.style.display = "block";
  }
  // 게임 설명
  else {
    sponge_info.style.display = "block";
    bread_game.style.display = "none";
  }
}

document.getElementById("sponge_img").onclick = function() {
  if(sponge_title.innerHTML == "3회 성공!!") {
    bread = true;
    complete_item("bread");
    sponge_fin.innerHTML = "다음 재료는 뚱이가 키우는 토마토입니다. 얼른 가봅시다!!"
  }
}


// 3. 토마토
var findtomato = document.getElementById("findtomato");
var patrick_info = document.querySelector(".patrick_info");
var toamto_table = document.querySelector(".patrick_body");
var patrick_fin = document.getElementById("patrick_review");
findtomato.onclick = function() {
  if(crap == false) { alert("게살을 구한 뒤에 시작해주세요!!"); return; } 
  if(bread == false) { alert("빵을 구한 뒤에 시작해주세요!!"); return; }

  // 숨은 버튼 찾기
  if(toamto_table.style.display == "none") {
    patrick_info.style.display = "none";
    toamto_table.style.display = "block";
  }
  // 게임 설명
  else {
    patrick_info.style.display = "block";
    toamto_table.style.display = "none";
  }
}

var first = false;
var second = false;

// 토마토 1번째 발견
tomato_first.onclick = function() {
  // console.log("A");
  if(bread != true) {
    return;
  }
  tomato_first.style.backgroundColor = "red";
  first = true;
}

// 토마토 3번째 발견
tomato_second.onclick = function() {
  if(first == true) {
    tomato_second.style.backgroundColor = "green";
    second = true;
  }
}

// 토마토 3번째 발견
tomato_third.onclick = function() {
  if(second == true) {
    tomato_third.style.backgroundColor = "blue";
    complete_item("tomato");
    patrick_fin.innerHTML = "다음 재료는 '피클'입니다.<br><b>집돌이 뚱이답게 <b>'Home'</b>에 숨겨져 있다고 하더군요..";
    patrick_info.style.display = "block";
    toamto_table.style.display = "none";
    
    startbtn.innerHTML = "<b>'토마토'</b>까지 구하셨군요. 훌륭합니다!!<br>다음 재료인 '피클'</b>은<br>게살을 구하실 때와 같은 방식으로 구할 수 있습니다!!";
  }
}


// 5. 치즈
cheezebtn.onclick = function() {
  if(crap == false) { alert("게살을 구한 뒤에 시작해주세요!!"); return; } 
  if(bread == false) { alert("빵을 구한 뒤에 시작해주세요!!"); return; }
  if(tomato == false) { alert("토마토를 구한 뒤에 시작해주세요!!"); return; }
  if(pickle == false) { alert("피클을 구한 뒤에 시작해주세요!!"); return; }

  if(pickle == true && tag5_chk == true) {
    complete_item("cheeze");
    come_plankton();
  }
}

const tag1=1, tag2=2, tag3=4, tag4=0, tag5=3;
var tag1_chk=false, tag2_chk=false, tag3_chk=false, tag4_chk=false, tag5_chk=false, tag6_chk=false;
header_a_tag[tag1].onclick = function() {
  tag1_chk = true;
}
header_a_tag[tag2].onclick = function() {
  if(tag1_chk == true) tag2_chk = true;
  else tag1_chk = false;
}
header_a_tag[tag3].onclick = function() {
  if(tag2_chk == true) tag3_chk = true;
  else { tag1_chk = false; tag2_chk = false; }
}
header_a_tag[tag4].onclick = function() {
  if(tag3_chk == true) tag4_chk = true;
  else { tag1_chk = false; tag2_chk = false; tag3_chk = false; }
}
header_a_tag[tag5].onclick = function() {
  if(tag4_chk == true) {
    tag5_chk = true;
    document.getElementById("cheeze_answer").innerHTML = "징징이를 따돌렸습니다.<br>'CLICK HERE을 눌러 cheeze를 획득해주세요.'"
  }
  else { tag1_chk = false; tag2_chk = false; tag3_chk = false; tag4_chk = false; }
}

// console.log(tag1_chk, tag2_chk, tag3_chk, tag4_chk, tag5_chk, tag6_chk);
// 플랑크톤이 재료를 훔쳤다!!!
function come_plankton() {
  alert("이런!!!\n플랑크톤이 지금까지 모았던 재료를 모두 훔쳐갔습니다!!\n되찾으려면 'P'를 찾아 연타하세요!!!!")
  cheezebtn.innerHTML = "Hint. Come back 'HOME'<br>Square'P'ants"
}

plankton.onclick = function() {
  if(cheeze == true)
    plank_cnt += 1;
  
  if(plank_cnt >= 20) {
    alert("플랑크톤을 물리쳤습니다!!\n재료를 되찾았습니다!!");
    plankton.style.color = "black";
    startbtn.innerHTML = "마지막 재료이자 게살버거의 비법!!<br>소스는 '집게사장(게걸사장)'님만 알고 계십니다.<br>그를 만나러 가봅시다."
  }
}

// 6. 소스 획득
var crap_info = document.querySelector(".crap_info");
var source_body = document.querySelector(".crap_body");
var crap_fin = document.getElementById("crap_review");
var crap_fin2 = document.getElementById("crap_source");
var crap_answer = document.getElementById("source_answer");
var crap_btn = false;
var ansewr = "참깨빵 위에 게살 패티 두 장, 특별한 소스, 토마토, 치즈, 피클, 양파까지";
sourcebtn.onclick = function() {
  if(crap == false) { alert("게살을 구한 뒤에 시작해주세요!!"); return; } 
  if(bread == false) { alert("빵을 구한 뒤에 시작해주세요!!"); return; }
  if(tomato == false) { alert("토마토를 구한 뒤에 시작해주세요!!"); return; }
  if(pickle == false) { alert("피클을 구한 뒤에 시작해주세요!!"); return; }
  if(cheeze == false) { alert("치즈를 구한 뒤에 시작해주세요!!"); return; }

  // 숨은 버튼 찾기
  if(crap_btn == false && cheeze == true) {
    console.log("Answer");
    console.log(ansewr);
    crap_info.style.display = "none";
    source_body.style.display = "block";
    crap_btn = true;
  }
  else {
    if(crap_answer.value == ansewr) {
      crap_fin2.innerHTML = "모든 재료를 모두 모았습니다!!!<br>'HOME'으로 이동해주세요.";
      complete_item("source");
      document.getElementById("start").style.display = "none";
      document.getElementById("info_text").style.display = "none";
      document.getElementById("burger").style.display = "block";
    }
    else {
      alert("잘못된 값을 입력했습니다.")
    }
  }
}

// 각 재료 획득 시 표출되는 이미지
function complete_item(txt) {
  if(txt == "crap") { crap = true; alert("1. 게살 획득!!!"); }
  if(txt == "bread") { bread = true; alert("2. 빵 획득!!!"); }
  if(txt == "tomato") { tomato = true; alert("3. 토마토 획득!!!"); }
  if(txt == "pickle") { pickle = true; alert("4. 피클 획득!!!"); }
  if(txt == "cheeze") { cheeze = true; alert("5. 치즈 획득!!!"); }
  if(txt == "source") { source = true; alert("6. 소스 획득!!!"); }
}

////////////////////////////////////////////////////////////////////
///////////////////////  하단 걸어다니는 스폰지밥  ///////////////////////
////////////////////////////////////////////////////////////////////
// setInterval 을 이용해서 계속 실행
setInterval(function(){
    $('.dog_land').css({ 'background-position' : '-=5' }); // 개판, 스폰지밥 ver
    // $('.dog_land').css({ 'background-position' : '+=0.2' }); // 핑핑이 ver
    // $('.dog_land').css({ 'background-position' : '+=5' }); // 기타 ver
}, 20);