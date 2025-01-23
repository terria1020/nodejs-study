import * as express from 'express';

/*
Q:  인증 가드에서 인증이 완료되면 쿠키에 있는 데이터를 해석 한 user_id를 서비스에서 가지고 올 방법이 없는거야?

A: 객체의 body나 headers를 직접 조작하는 대신, NestJS의 Request 객체에 사용자 정의 속성을 추가하여 인증된 사용자 정보를 전달할 수 있습니다. 이를 위해 TypeScript의 인터페이스 확장을 사용하여 Request 객체에 사용자 정의 속성을 추가하고, 서비스에서 해당 속성을 접근할 수 있습니다.

먼저, express 모듈의 타입을 확장하여 Request 객체에 사용자 정의 속성을 추가합니다. 프로젝트의 루트 디렉토리에 types 디렉토리를 만들고, express 모듈의 타입을 확장하는 파일을 추가합니다
*/

declare global {
  namespace Express {
    interface Request {
      user_id?: number;
    }
  }
}
