# GradProj_Server
UAV 온디바이스 재난영역 검출 소프트웨어 back-end repository.
Jetson Nano 보드에서 작동하는 서버입니다.
local front-end에 하드웨어 및 모듈 결과를 전달하고 있습니다.

## Dependency
- NodeJS 
- ExpressJS v.4.18.2
- cors v.2.8.5

## How to run
1. Root 폴더로 진입 후 `npm install` 실행하기.
2. `npm run start:prod` 실행.

## API
- Get : /hardware - 클라이언트에서 요청 시 하드웨어 정보를 받아오는 shell 스크립트를 실행해서 데이터를 받아와서 반환해주는 API. </br>
Request: x, </br>
Response: </br>
  {CPU: string[4],</br>
  GPU: string,</br>
  MEM: string[2],</br>
  S_MEM: string[2],</br>
  PLL_T: string,</br>
  CPU_T: string,</br>
  PMIC_T: string,</br>
  GPU_T: string[],</br>
  AO_T: string,</br>
  Therm_T: string,</br>
  DISK: string[]}
- Get : /ai_module/result - 모듈을 실행한 결과 이미지를 불러오는 API.</br> request: x,</br> response: { result: string, img_name: string } 
- Get : /ai_module/list - 현재 보드에 있는 모듈의 리스트를 가져온다.</br> request: x,</br> response:{ list: string[], now: string }
- Patch : /ai_module/now - 현재 보드에서 적용하고 있는 모듈을 다른 요청받은 모듈로 변경 후 해당 모듈로 실행한 결과를 반환해준다.</br> request: {module_name:string}, </br>response:{ result: string, img_name: string }
