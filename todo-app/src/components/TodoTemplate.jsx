import "./TodoTemplate.css";

const TodoTemplate = (props) => {
    return (
        <>
            <div className="TodoTemplate">
                <div className="appTitle">
                    일정 관리
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default TodoTemplate;