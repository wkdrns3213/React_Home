# 기본 세팅 명령어 (순차적으로 실행)

<hr/>

## 1. 프로젝트 초기화 (package.json 생성)
`
npm init -y
`
##### ※ 마지막 -y는  설정값을 전부 기본값으로 셋팅

<hr/>

### 2.react 관련 패키지 설치
`
npm install react react-dom
`

<hr/>

### 3. webpack 관련 패키지 설치
`
npm install -D webpack webpack-cli webpack-dev-server
`

<hr/>

### 4. webpack 플러그인
`
npm install -D babel-loader html-webpack-plugin clean-webpack-plugin css-loader style-loader cross-env dotenv dotenv-webpack
`

<hr/>

### 5. 바벨 패키지 설치
`
npm install -D @babel/core @babel/preset-env @babel/preset-react
`
<hr/>