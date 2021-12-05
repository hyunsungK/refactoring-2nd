# Typescript


## 설치 방법
```
# on mac
$ sudo npm install -g typescript
```

## 프로젝트 생성
```
# package.json으로 node 프로젝트 실행
npm init
```

## typescript 설정
```
# typescript 설정 파일 생성
tsc --init 

# tsconfig.json 설정
"resolveJsonModule": true,   <- 주석 해제  
"outDir": "./dist", <- 주석 해제 및  dist 폴더 생성   
"sourceRoot": "./src",  <-  소스 코드 루트 생성
"sourceMap": true,    <- 소스 코드
```

## node project 설정
```
# package.json 변경
"test": "echo \"Error: no test specified\" && exit 1",
"build": "tsc",
"start": "node ./dist/app.js"
```

## 컴파일
```
npm run build
```

## 실행
```
npm run start
```


