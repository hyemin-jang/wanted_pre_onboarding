# 원티드 프리온보딩 프론트엔드 코스 사전과제

## 🕹 실행방법
```
$ git clone https://github.com/hyemin-jang/wanted_pre_onboarding.git
```
```
$ cd wanted_pre_onboarding
```
```
$ yarn install
```
```
$ yarn start
```

## ❣ 구현 기능
### ✅ Modal
- 모달을 사용하려는 페이지에서 `useState`로 모달창 열렸는지 여부를 나타내는 상태값 isModalOpened 정의 (초기값 false)
- 모달 여는 버튼 클릭하면 isModalOpened의 상태값을 true로 변경 => `삼항연산자`를 사용한 `조건부 렌더링`으로 true일 때 모달창 나타남
- 사용자 편의를 위해 모달 닫기 버튼 클릭시 뿐만 아니라, 모달 바깥쪽 어두운 영역을 클릭해도 모달이 닫힐 수 있도록 함
  - 화면 전체 크기를 차지하는 ModalWrapper(div) 요소로 모달 요소를 감싸줌
  - 클릭 이벤트의 대상이 ModalWrapper라면 모달창 닫기 함수 실행 (모달창 내 영역을 클릭했을 때는 닫기 함수 실행 X)
  - isModalOpened를 모달 컴포넌트의 `props`로 전달해 모달 컴포넌트 내에서 ModalWrapper의 `display` 속성을 `block`(모달 열 때) 또는 `none`(모달 닫을 때)으로 변경

<br> 

### ✅ Toggle
- `useState`로 토글 스위치 on/off 여부를 나타내는 상태값 isToggleOn 정의 (초기값 false)
- 토글을 클릭하여 isToggleOn 값이 true로 바뀌면 토글박스와 토글스위치에 'toggle-on' className 추가 (삼항연산자 사용)
- 'toggle-on' className이 있는 경우 css 속성 변경되도록 함
  - 토글스위치의 `left` 값 변경하여 토글스위치가 토글박스 우측 끝으로 가도록 함
  - 토글박스의 `background-color`, `background-position` 속성을 변경하여 토글박스 색상 변경
  - `transition : 1s` 설정하여 스위치가 켜지는 것처럼 이동하게 함
#### 💥 Error Handling
- 토글박스가 스위치의 움직임에 따라 색깔이 바뀌는 효과 주기
  - 초기에는 토글박스의 css 속성에 `background-position : right`로 두고 isToggleOn 값이 true로 바뀌면 `background-position: left`, `transition: 1s`를 줘서 구현하려고 했으나 원하는 결과를 얻지 못함
  - `background-size: 200%`로 두고 `background-color` 속성에 `linear-gradient`를 활용하여 켜졌을때, 꺼졌을때 색깔을 각각 좌우 50%씩 셋팅해놓음으로써 해결

### ✅ Tab
- className이 'tab-menu'인 `<label>` 요소 안에 `<input type='radio'>`와 `<span>` 요소를 둠 : 한 번에 한개 메뉴만 선택하기 위해 라디오버튼 활용
- css를 사용해 라디오버튼은 `display : none`으로 하고, `.tab-menu input[type='radio']:checked+span` 선택자를 통해 체크된 라디오버튼과 묶여 있는 span 요소의 색깔이 변화하도록 하여 클릭된 탭 구현
#### 💥 Error Handling
- 라디오버튼을 사용했음에도 여러 개 메뉴가 동시에 선택되는 현상 발생
  - 라디오버튼의 name 속성을 모두 같게 해야 동일 name을 가진 라디오버튼 중 1개만 선택할 수 있음

<br>

### ✅ Tag
- `useState`로 생성된 태그들을 담을 tagList 상태값 정의, 초기값은 빈 배열로 설정
- input 박스에 `onKeyPress` 이벤트를 통해 엔터 키 입력시 setTagList() 함수로 tagList의 상태값 변경
  - `spread 연산자` 사용해 input의 value 값 추가
  - 태그 삭제 시 id값 활용하기 위해 `{id: 1, text: 'hi'}` 형태의 객체로 추가
- `map` 함수 사용해 tagList의 원소들 화면에 표시
  - 태그 삭제 시 활용하기 위해 태그 요소의 id값을 tagList 원소의 id 속성으로 설정
- 태그 삭제 버튼 클릭시 setTagList() 함수로 tagList의 상태값 변경
  - `filter` 함수 사용해 클릭한 태그의 id와 tagList 원소의 id 속성이 같은 것은 제외
  - tagList state가 변하면서 화면 리렌더링되며 태그 삭제됨
#### 💥 Error Handling
- 태그의 id와 tagList의 id를 `!==` 연산자로 비교하여 filtering 하려 했으나 원하는 결과가 나오지 않음
  - `typeof`를 통해 확인 결과 태그 element의 id값은 `string` 타입이었다는 것을 확인 => `Number()` 함수로 타입변환하여 해결

<br> 

### ✅ Auto Complete
- input 박스의 value값을 `useState`로 관리
- `useState`로 자동완성에 제공할 단어 리스트인 matchedWords 변수 선언, 초기값은 빈 배열로 설정
- input 박스에 `onChange` 이벤트를 통해 값이 변화하면 setMatchedWords() 함수로 matchedWords의 상태 변경
  - 전체 단어 리스트에 `filter` 함수를 통해 입력된 value값을 포함하고 있는 단어들만 필터링 후 `spread 연산자`를 통해 깊은복사
  - matchedWords 상태가 바뀌면서 리렌더링 발생하여 `map` 함수를 사용해 화면에 표시한 자동완성 단어 리스트가 바뀜
- 자동완성 리스트를 클릭하면 setValue() 함수를 통해 input 박스 값이 해당 단어로 바뀌도록 함
- input 박스를 감싸고 있는 div의 `onBlur` 이벤트를 통해 포커스 상실하면 matchedWords 상태값을 빈 배열로 바꾸어 자동완성 리스트 사라지도록 함
#### 💥 Error Handling
- input value를 포함하고 있는 단어를 자동완성에 띄우기 위해 `includes()` 함수를 사용하려 했으나, 단어의 첫 글자가 아닌 중간부터 포함된 단어도 다 찾아지는 문제 발생
  - includes 함수 대신 `substring()` 사용해 단어를 첫글자부터 입력된 value 길이만큼 잘라서 비교하는 식으로 수정
- div 요소에 `onBlur` 이벤트를 주자, 자식 노드인 li 요소의 `onClick` 이벤트가 작동하지 않아 자동완성된 단어를 클릭할 수 없는 문제 발생
  - `onMouseDown` -> `onBlur` -> `onClick` 순으로 이벤트가 발생함에 따라 onClick 이벤트를 `onMouseDown`으로 대체

<br> 

### ✅ Click to Edit
- `useState`로 수정모드인지 아닌지를 나타내는 isEditMode 상태값 정의
- isEditMode 상태값에 따라 `삼항연산자`를 사용한 `조건부 렌더링` : true일 때는 `<input type='text'>`, false일 때는 `<div>` 요소 렌더링
- input 박스의 value값을 `useState`로 관리
- `useRef`를 통해 input 박스에 ref 설정
- div 요소의 `onClick` 이벤트를 통해 클릭시 isEditMode의 값을 true로 바꿔서 input 박스가 화면에 나타나도록 함
  - 이 때 useRef 객체의 `.current` 값인 input박스에 `focus()` 함수를 통해 포커스가 가도록 함
- input 박스의 `onKeyPress`, `onBlur` 이벤트를 통해 엔터키 입력했을 때 또는 포커스 상실했을 때 useState 상태값을 input value값으로 바꾸고, isEditMode의 값을 false로 바꿔 value값을 화면에 나타냄
