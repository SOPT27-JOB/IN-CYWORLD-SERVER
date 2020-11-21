<h1> </h1>


![KakaoTalk_20201122_010300152_01](https://user-images.githubusercontent.com/37949197/99885070-c1412580-2c75-11eb-8ec8-4214faab2acf.png)


- <b> SOPT 27th 솝커톤
- 프로젝트 기간: 2020.11.21 ~ 22  



#
  
## **💁 프로젝트 설명**

- 코로나보다 무서운 Z세대 밈에 중독된 2020년...
  90년대생들은 순살 당했다는게 무슨 소리인지도 
  모른 채 무시무시한 Z세대 드립에 조롱당하고 있다...

Z세대들, 그대들은 90년대생에 대해 얼마나 알고 있는가?!
지금 당장 인-싸이월드 테스트로 그대의 세대 감수성을 시험하라



#
  
## **📑 API 명세서**

- **[API 명세서 ](https://github.com/SOPT27-JOB/JOB-SERVER/wiki/Cyworld-Server)**  


#

  
## ✔ **models/index.js**

```jsx
db.User = require("./user")(sequelize, Sequelize);
db.Result = require("./result")(sequelize, Sequelize);

db.User.belongsTo(db.Result);
db.Result.hasMany(db.User, { onDelete: "cascade" });
```


#

  
## **📙 DB ERD**


![Snipaste_2020-11-22_03-46-48](https://user-images.githubusercontent.com/37949197/99885098-e3d33e80-2c75-11eb-909c-8ae1a3db6caa.png)

#


  
## **🏃‍♂️ 기능 소개**

-
-
-



#
  
## **🌎 Team Role**

### **🙋‍♀️ 김민지**

- ERD 설계
- level별 result 조회
- user 상위 % 알고리즘 구현
- 배포

### **🙋‍♂️ 강준우**

- ERD 설계
- 프로젝트 구조 setting
- user 정보 DB 저장
- user 점수 알고리즘 구현



#
  
## **📘 Package**

사용 패키지(모듈)은 다음과 같습니다.

```
"dependencies": {
		"aws-sdk": "^2.753.0",
		"axios": "^0.21.0",
		"cookie-parser": "~1.4.5",
		"debug": "~4.1.1",
		"ejs": "^3.1.5",
		"express": "~4.17.1",
		"firebase-admin": "^9.2.0",
		"googleapis": "^59.0.0",
		"hangul-js": "^0.2.6",
		"http-errors": "~1.8.0",
		"jade": "~1.11.0",
		"jsonwebtoken": "^8.5.1",
		"moment": "^2.28.0",
		"morgan": "~1.10.0",
		"multer": "^1.4.2",
		"multer-s3": "^2.9.0",
		"nodemailer": "^6.4.11",
		"promise-mysql": "^4.1.3",
		"rand-token": "^1.0.1",
		"request": "^2.88.2",
		"socket.io": "2.3.0",
		"unique-names-generator": "^4.3.1",
		"winston": "^3.3.3",
		"winston-daily-rotate-file": "^4.5.0"
	}
```
