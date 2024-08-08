$(function () {
  $("#registerForm").submit(function (e) {
    let user_name = $("#user_name").val().trim();
    let user_mail = $("#user_mail").val().trim();
    let user_pw = $("#user_pw").val().trim();
    let user_pw2 = $("#user_pw2").val().trim();
    let gender = $('input[name="gender"]:checked').val();

    if (user_name === "") {
      $("#name_al").text("사용자 이름을 입력해주세요.");
      $("#user_name").val("");
    } else if (user_name !== "") {
      $("#name_al").text("");
    }
    if (user_mail === "") {
      $("#mail_al").text("사용자 메일을 입력해주세요.");
      $("#user_mail").val("");
    } else if (user_mail !== "") {
      $("#mail_al").text("");
    }
    if (user_pw === "") {
      $("#pw_al").text("비밀번호를 입력해주세요.");
      $("#user_pw").val("");
    } else if (user_pw !== "") {
      $("#pw_al").text("");
    }
    if (user_pw !== user_pw2) {
      $("#pw2_al").text("비밀번호가 일치하지 않습니다.");
      $("#user_pw2").val("");
    } else if (user_pw === user_pw2) {
      $("#pw2_al").text("");
    }
    if (user_name !== "" && user_mail !== "" && user_pw !== "" && user_pw === user_pw2) {
      $("#result").html(`사용자 이름 : ${user_name}<br />이메일 : ${user_mail}<br />비밀번호 : ${user_pw}<br />성별 : ${gender}`);
      $("#user_name").val("");
      $("#user_mail").val("");
      $("#user_pw").val("");
      $("#user_pw2").val("");
    }
    event.preventDefault();
  });
  $("#terms").click(function () {
    $("#termsText").toggle(); // 클릭 시 div의 보이기/숨기기 토글
  });
});
