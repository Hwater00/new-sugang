# new-sugang
2022년 덕성여대 제1회 IT 연합 해커톤 넘버원삼김 : 새로운 수강신청 방식을 제안하다. 

### 팀원소개 ###

|김혜수|김시연|원종은|
|---|---|---|
|[Hwater00](https://github.com/Hwater00)|[siyeon9302](https://github.com/siyeon9302)|[jongeun2](https://github.com/jongeun2)
|프론트, 백엔드|디자인|프론트|

### 프로젝트 설명 ###

### API 명세서 ###
로그인 
[GET] /student

학생의 학과에 대한 개설과목을 조회합니다.
[GET] /subjects/:department

교과목코드로 과거 수강 내역을 조회합니다.
[GET] /subjects/past/:subjectCode

개설과목 중 강의계획서를 조회합니다.
[GET] /subjects/syllabus/:syllabus

개설과목 중 장바구니로 저장한 내역을 조회합니다.
[GET] /students/wishlist?studentNumber={studentNumber}

장바구니 중 희망과목으로 저장합니다.
[POST]  /students/wishlist/

수강 성공한 과목을 조회합니다.
[GET] /students/subscription?studentNumber={studentNumber}

수강 실패한 과목을 조회합니다.
[GET] /students/subscription?studentNumber={studentNumber}

과목 정보 중 강좌설명 url을 반환합니다.
[GET] /subjects/url/:lectureDescription

특정 과목을 교환할 과목으로 신청합니다.
[POST] /exchanges

교환 게시판에 있는 과목을 조회합니다.
[GET]  /exchanges

교환 게시판에 있는 과목 중 특정 과목에 교환 신청을 진행합니다.
[POST] /exchanges/request/

교환 신청 받은 과목을 조회합니다.
[GET] ]/exchanges/request/

교환 신청 받은 과목에 대해 승인 신청을 합니다.
[POST] ]/exchanges/request/status
