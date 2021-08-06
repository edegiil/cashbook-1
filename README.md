# cashbook-1

<h6 align="center">

  <img alt="banner" src="https://user-images.githubusercontent.com/35324795/128445932-08c3b83c-2bbb-49e2-856e-a598837efa3f.png">

![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-1.1.0-green)

</h6>

<p align="center">우아한 테크캠프 세번째 프로젝트 - 우아한 가계부</p>

---

## Contributors

- 박기덕

  > 시간을 두고 리팩토링을 해서 코드를 다시 한번 살펴보는 귀중한 시간을 가질 수 있었고, 토큰 기반의 인증방식에 대해 깊게 고민할 수 있었던 시간도 좋았습니다.

- 송하영

  > 리팩토링과 에러처리에 집중해서 완성도를 높이는 작업이 재밌었습니다.

## Tech Stacks

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Project Structure

<h4 align="center">

![structure](https://user-images.githubusercontent.com/35324795/128448835-d6b68c0c-9e9f-4f87-b476-826cf879c5ed.png)

</h3>

```
client
├─src
│ ├─api
│ ├─component
│ ├─configs
│ ├─constant
│ ├─lib
│ ├─pages
│ ├─store
│ ├─style
│ ├─type
│ ├─utils
│ └─App
├─package.json
├─index.ts
├─tsconfig.json
├─jest.config.js
├─babel.config.js
├─webpack.common.js
├─webpack.dev.js
└─webpack.prod.js
server
├─public
│ ├─bundle.js
│ └─index.html
├─bin
│ └─www
├─app.js
└─package.json
api
├─configs
├─middlewares
├─models
├─routes
├─services
├─types
├─utils
├─app.ts
├─package.json
└─tsconfig.json
```

## Getting Started

### 웹 어플리케이션

```bash
# Development
## client
$ cd client && npm run dev
## web server
$ cd server && npm start

# Production
## client
$ cd client && npm run deploy
## web server
$ cd server && npm start
```

### API 서버

```bash
# Development
$ cd api && npm run dev

# Production
$ cd api && npm run deploy
```

## See also

### [백엔드 리팩토링 기록](https://github.com/woowa-techcamp-2021/cashbook-1/wiki/%EB%B0%B1%EC%97%94%EB%93%9C-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81)

### [프론트엔드 리팩토링 기록](https://github.com/woowa-techcamp-2021/cashbook-1/wiki/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81)

### [피플 룰](https://github.com/woowa-techcamp-2021/cashbook-1/wiki/%ED%94%BC%ED%94%8C-%EB%A3%B0)

### [WiKi](https://github.com/woowa-techcamp-2021/cashbook-1/wiki)

### [ERD](https://github.com/woowa-techcamp-2021/cashbook-1/wiki/ERD)
