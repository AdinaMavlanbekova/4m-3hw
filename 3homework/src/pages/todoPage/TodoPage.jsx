import Todo from "../../components/todo/Todo";
import style from './todoPage.module.css'


const array = ["todo 1", "todo 2", "todo 3"]


function TodoPage() {
    return (
        <div className={style.color}>
            {array.map((el, index) => <div key={index}><Todo number={el}/></div>)}
        </div>
    );
}

export default TodoPage;
