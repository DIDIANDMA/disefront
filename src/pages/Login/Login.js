import KakaoLogin from "react-kakao-login";

const Login = () => {
  return (
    <section className=" flex items-center justify-between    rounded-lg  w-2/4  bg-backGoround  ">
      <div className="h-1/2 w-1/2  ">
        <img
          className="rounded-l-lg"
          alt="로그인창 이미지"
          src="/images/Login/1.jpg"
        />
      </div>
      <div className=" flex items-center justify-between mx-auto ">
        <KakaoLogin
          token={process.env.REACT_APP_KAKAO_KEY}
          onSuccess={message => {
            if (message) {
              localStorage.setItem(
                "kakao_token",
                message.response.access_token
              );
            }
          }}
          onFail={err => console.log(err)}
        >
          <button id="custom-login-btn">
            <img
              src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
              width="222"
              alt="카카오 로그인 버튼"
            />
          </button>
        </KakaoLogin>
      </div>
    </section>
  );
};

export default Login;
