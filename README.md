<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=80ea6e&fontColor=363636&text=%EC%9E%90%EB%B0%94%20%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%EC%98%88%EC%A0%9C" alt="header"/>
</div>

<div align="center">
    자바 스크립트 예제 연습
</div>
<br>

## 🛠️ 기술 스택 🛠️
<div align="center">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
</div>

## 🧰 개발 도구 🧰

<div align="center">
    <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
    <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
</div>

## 객체 선언 및 사용

```javascript
var human = function (name, old, height) {
  this.name = name;
  this.old = old;
  this.height = height;
};

const kyoungmin = new human("kyoungmin", 23, 177);
```
결과 : kyongmin 이라는 객체 초기 선언

## 객체 내 함수 선언 및 사용

```javascript

const player = {
  calc: function (firstNumber, secondNumber, typeOfCalc) {
    if ((typeOfCalc = "+")) {
      console.log(firstNumber + secondNumber);
    }
  },
};

player.calc(15, 30, "+");

```
결과 : player 객체 내 calc function 선언 및 사용

```javascript
const calc = {
  calculateKrAge: function (ageOfForeigner) {
    return ageOfForeigner + 2;
  },
};
const krAge = calc.calculateKrAge(age);
console.log(krAge);
```
결과 : krage라는 변수 선언 및 calculateKrAge 계산결과 값 출력
