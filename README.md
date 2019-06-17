Apollo-server subscriptions 예제
===============================

# 참고 소스
1. Apollo-Server getting started <https://www.apollographql.com/docs/apollo-server/getting-started/>

2. subscriptions blog <https://www.apollographql.com/docs/apollo-server/getting-started/> 

# 테스트 방법
1. yarn install && yarn start

2. apollo playground 접속 (http://localhost:4000/)

3. subscripotion 실행
```
subscription {
  newBookList {
    title
    author
  }
}
```

4. query 실행(실행 후 subscription 탭 보면 데이터 받은거 보임)
```
query {
  books {
    title
    author
  }
}
```

5. mutation 실행(실행 후 subscription 탭 보면 추가된 데이터 보임)
```
mutation {
  addBook(title:"haha", author:"testAuthor") {
  	title
    author
  }
}
