import http from "k6/http";

// vus는 가상 유저를 설정하는 항목
// duration은 몇 초동안 테스트를 진행할지 선택하는 옵션
export const options = { // 100명이 10초 동안 요청 로직 작성
  vus: 100,
  duration: "10s"
};

export default function(){ // 테스트에 사용할 요청 메서드,주소
  http.get("http://localhost:3002/students/login");
}