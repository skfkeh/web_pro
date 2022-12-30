var count = 0;
var random_num = Math.trunc(Math.random()*100)+1;
var input_tag = document.getElementById("try");
var number_tag = document.getElementById("number");
var counter_tag = document.getElementById("counter");
var display_tag = document.getElementById("display");
var win_cnt = 0;
var sponge_title = document.getElementById("sponge_title");
var answer_chk = false;

function answer() {
    if(answer_chk == true) {
        display_tag.innerHTML = "게임을 재시작 해주세요!";
        return;
    }
    if(input_tag.value == "") {
        display_tag.innerHTML = "입력은 혀야지~!";
        display_tag.style.color = "blue";
        count-=1;
    }
    else {
        if(random_num === Number(input_tag.value)) {
            win_cnt += 1;
            display_tag.innerHTML = `맞췄습니다!<br>맞춘 횟수 : ${win_cnt}`;
            answer_chk = true;
            display_tag.style.color = "red";
            if(win_cnt >= 3) {
                sponge_title.innerHTML = "3회 성공!!";
                document.getElementById("sponge_review").innerHTML = "스폰지밥 이미지를 클릭해 빵을 획득해주세요."
                document.querySelector(".sponge_info").style.display = "block";
                document.querySelector(".sponge_body").style.display = "none";
            }
        }
        else if(random_num > Number(input_tag.value)) {
            display_tag.innerHTML = "인심을 조금만 더 쓰시죠.. UP!!";
            display_tag.style.color = "black";
        }
        else if(random_num < Number(input_tag.value)) {
            display_tag.innerHTML = "아이고, 너무 쓰셨네.. DOWN!!";
            display_tag.style.color = "black";
        }
    }
}

document.getElementById("check").onclick = function() {
    count += 1;
    answer();
    number_tag.innerHTML = `방금 입력한 숫자 : ${input_tag.value}`;
    counter_tag.innerHTML = `시도 횟수 : ${count}회`;
}

document.getElementById("reset").onclick = function() {
    random_num = Math.floor(Math.random()*100)+1;
    count = 0;
    answer_chk = false;
    number_tag.innerHTML = "초기화 됐습니다!!";
    counter_tag.innerHTML = "처음부터 다쉬~";
    display_tag.innerHTML = `${win_cnt}회 성공!`;
}