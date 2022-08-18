import KakaoLogin from "react-kakao-login";
import axios from "axios";

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
            console.log(message.response.access_token);
            // if (message.response.access_token) {
            //   axios
            //     .post("http://15.164.163.31:8002/users/kakaologin", {
            //       headers: {
            //         Authorization: message.response.access_toke,
            //       },
            //     })
            //     .then(res => {
            //       if (res.status === 200) {
            //         console.log("hi");
            //       }
            //     })
            //     .catch(e => console.log(e));
            // }
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
