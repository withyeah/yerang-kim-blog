---
title: "[Python] 파이썬 변수, 객체와 참조 (variable, object and reference)"
date: 2019-09-14 17:35:59
category: Python
---

###### * [파이썬 변수퀴즈](https://realpython.com/quizzes/python-variables/viewer/) 중 객체와 참조에 관한 문제와 해설을 옮겨 온 것입니다.

## 문제
``` 
n = 300
m = n
```
### 위 코드를 실행했을 때 파이썬은 몇 개의 object와 reference를 생성하는가?
( Following execution of these statements, Python has created how many objects and how many references? )

---

## 해설
```
1 object, 2 references
```
#### `n = 300` → 300을 값으로 가지는 정수 object와 이를 가리키는 n(참조)가 생성됨, `m = n` → 300을 가리키는 두 번째 참조 m이 생성됨
( The first statement creates an integer object with value 300, and n is a reference to it. The second statement creates a second reference to the already existing object. )


##### 출처 : https://realpython.com/quizzes/python-variables/viewer/