import "./index.css";
function LoginModal() {
  return (
    <>
      <div class="content">
        <button class="login-btn">login</button>
      </div>
      <div class="cowrapper"></div>
      <div class="co">
        <div class="login_container">
          <i class="fas fa-times"></i>
          <div class="login">로그인 또는 회원 가입</div>
        </div>
        <div class="login_airbnb">
          <h3>에어비앤비에 오신 것을 환영합니다.</h3>
        </div>
        <div class="login_number">
          <div class="login_nation">국가/지역</div>
          <div class="login_nation2">한국(+82)</div>
        </div>
        <div class="number">
          <div>전화번호</div>
        </div>
        <div class="login_number2">
          전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
          데이터 요금이 부과됩니다.
        </div>
        <div class="login_u">개인정보 처리방침</div>
        <div class="login_b">
          <button class="login_button">계속</button>
        </div>
        <div class="login_or">
          <div>또는</div>
        </div>
        <div class="login_sns">
          <div>
            <img
              class="login_sns2"
              src="../images/login_facebook.svg"
              alt="facebook"
            />
          </div>
          <div class="login_sns3">페이스북으로 로그인하기</div>
        </div>
        <div class="login_sns">
          <div>
            <img
              class="login_sns2"
              src="../images/login_google.svg"
              alt="google"
            />
          </div>
          <div class="login_sns3">구글로 로그인하기</div>
        </div>
        <div class="login_sns">
          <div>
            <img class="login_sns2" src="../images/login_ios.svg" alt="ios" />
          </div>
          <div class="login_sns3">Apple 계정으로 계속하기</div>
        </div>
        <div class="login_sns">
          <div>
            <img
              class="login_sns2"
              src="../images/login_email.svg"
              alt="email"
            />
          </div>
          <div class="login_sns3">이메일로 로그인하기</div>
        </div>
      </div>
    </>
  );
}
export default LoginModal;
