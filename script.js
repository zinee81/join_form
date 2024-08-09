$(function () {
  $("#registerForm").submit(function (e) {
    // 입력받은 값 가져오기
    let user_name = $("#user_name").val().trim();
    let user_mail = $("#user_mail").val().trim();
    let user_pw = $("#user_pw").val().trim();
    let user_pw2 = $("#user_pw2").val().trim();
    let gender = $('input[name="gender"]:checked').val(); // 체크된 성별 값을 가져옴

    // 이름을 입력하지 않았을때 경고메시지 출력
    if (user_name === "") {
      $("#name_al").text("사용자 이름을 입력해주세요.");
      $("#user_name").val("");
    } else if (user_name !== "") {
      $("#name_al").text(""); // 이름을 입력했다면 경고 메시지 삭제
    }
    // 이메일을 입력하지 않았을때 경고메시지 출력
    if (user_mail === "") {
      $("#mail_al").text("사용자 메일을 입력해주세요.");
      $("#user_mail").val("");
    } else if (user_mail !== "") {
      $("#mail_al").text(""); // 이메일을 입력했다면 경고 메시지 삭제
    }
    // 비밀번호를 입력하지 않았을때 경고메시지 출력
    if (user_pw === "") {
      $("#pw_al").text("비밀번호를 입력해주세요.");
      $("#user_pw").val("");
    } else if (user_pw !== "") {
      $("#pw_al").text(""); // 비밀번호를 입력했다면 경고 메시지 삭제
    }
    // 입력한 비밀번호와 비밀번호 확인이 같지 않다면 경고메시지 출력
    if (user_pw !== user_pw2) {
      $("#pw2_al").text("비밀번호가 일치하지 않습니다.");
      $("#user_pw2").val("");
    } else if (user_pw === user_pw2) {
      $("#pw2_al").text(""); // 비밀번호가 일치한다면 경고메시지 삭제
    }
    // 이름, 이메일, 비밀번호가 빈칸이 아니고 비밀번호가 확인과 일치할때 정보 확인 출력
    if (user_name !== "" && user_mail !== "" && user_pw !== "" && user_pw === user_pw2) {
      $("#result_tit").html("회원가입 정보 확인");
      $("#result").html(`사용자 이름 : ${user_name}<br />이메일 : ${user_mail}<br />비밀번호 : ${user_pw}<br />성별 : ${gender}`);
      // 정보 확인 출력 후 입력란을 비움
      $("#user_name").val("");
      $("#user_mail").val("");
      $("#user_pw").val("");
      $("#user_pw2").val("");
    }
    // submit 이벤트를 실행해도 페이지가 새로고침 되지않음
    e.preventDefault();
  });
  // 약관 확인 >을 눌렀을 때 약관 내용을 보이고 숨기게 하는 이벤트
  $("#terms").click(function () {
    $("#termsText").toggle(); // 클릭 시 div의 보이기/숨기기 토글
  });
});
