## Comment.js
```js
/* 댓글 컴포넌트 */
function Comment(props) {

    // 스타일
    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "row",
            border: "1px solid gray",
            borderRadius: 16,
            padding: 8,
            margin: 8
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: 25
        },
        contentContainer: {
            marginLeft: 10,
            display: "flex",
            flexDirection: "column"
        },
        nameText: {
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5
        },
        commentText: {
            color: "black",
            fontSize: 16,
        }
    }

    // 리턴 함수
    return (
        <div style={styles.wrapper}>
            {/* 댓글 작성자의 이미지*/}
            <div>
                <img style={styles.image} src={props.picture} />
            </div>
            {/* 댓글 작성자의 이름과 댓글 내용 */}
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}({props.gender})</span>
                <span sytle={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;
```

<br>

## CommentList.js
```js
import Comment from "./Comment";

/* 데이터 ver 1 - 댓글 */
// const comments = [
//     {name: "홍길동", comment: "동쪽에 살아요.", picture: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-business-men-icon-png-image_4186858.jpg"},
//     {name: "홍길남", comment: "남쪽에 살아요.", picture: " https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-avatar-icon-png-image_4162757.jpg"},
//     {name: "고길동", comment: "둘리가 싫어요.", picture: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-male-worker-icon-graphic-png-image_3668949.jpg"},
// ]

/* 데이터 ver 2 - 댓글, 유저 */
const users = [
    { name: "홍길동", regno: "701010-1457934", picture: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-business-men-icon-png-image_4186858.jpg" },
    { name: "홍길남", regno: "201010-3457934", picture: "https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-avatar-icon-png-image_4162757.jpg" },
    { name: "고길동", regno: "211010-4157934", picture: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-male-worker-icon-graphic-png-image_3668949.jpg" }
];

const comments = [
    { name: "홍길동", comment: "동쪽에 살아요." },
    { name: "홍길남", comment: "남쪽에 살아요." },
    { name: "고길동", comment: "둘리가 싫어요." }
];

/* 분리된 데이터에서 댓글 유저에 맞는 프로필 사진을 구하는 함수 */
function getUserPicture(name) {
    return users.find(user => user.name === name).picture;
}

/* 성별을 구하는 함수 */
function getUserGender(name) {
    const regno = users.find(user => user.name === name).regno;
    return Number(regno[7])%2 == 0 ? "여" : "남";
}

/* 댓글 목록 컴포넌트 */
function CommentList() {
    return (
        <>
            {
                comments.map((comment, i) => 
                    <Comment key={i} name={comment.name} comment={comment.comment} gender={getUserGender(comment.name)} picture={getUserPicture(comment.name)} />
                )
            }
        </>
    );
}

export default CommentList;
```

<br>

## App.js
```js
import CommentList from "./comment/CommentList";

function App() {

  return (
    <>
      <CommentList />
    </>
  );
}

export default App;
```
