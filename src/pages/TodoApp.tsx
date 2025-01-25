import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

const TodoApp = () => {
  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  const [todoList, setTodoList] = useLocalStorage<Todo[]>("todo-list", []);

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const removeTodo = (id: number) => {
    const list: Todo[] = todoList.filter((f) => f.id !== id);
    setTodoList(list);
    toast.success("Todo Deleted !");
  };

  const addTodo = () => {
    let id: number;
    if (todoList.length < 1) {
      id = 1;
    } else {
      id = todoList[todoList.length - 1].id + 1;
    }
    const todo: Todo = {
      id: id,
      title: title,
      content: content,
    };
    setTodoList((prev) => [...prev, todo]);
    toast.success("Todo Created !");
    setContent("");
    setTitle("");
  };

  const editTodo = (id: number) => {
    const updatedList = todoList.map((t) => {
      if (t.id === id) {
        return { ...t, title: title, content: content };
      }
      return t;
    });
    setTodoList(updatedList);
    setContent("");
    setTitle("");
  };

  return (
    <div className="h-[90svh] bg-slate-50 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-semibold text-center mt-10">Todo App</h1>
      <div className="make-a-todo flex flex-col gap-4 md:w-[500px]  w-[300px]">
        <label htmlFor="todo" className="font-semibold">
          Make a todo
        </label>
        <input type="hidden" value={id} name="" id="" />
        <input
          type="text"
          className="p-2 rounded shadow-md border border-slate-300"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          name=""
          id="todo"
          rows={3}
          className="resize-none shadow-2xl rounded p-3 font-normal text-justify border border-slate-300"
          spellCheck="false"
          placeholder="Content"
        ></textarea>
        <button
          className="w-32 h-12 rounded bg-black text-white"
          onClick={() => {
            if (isClicked) {
              editTodo(id);
              setIsClicked(false);
            } else {
              addTodo();
            }
          }}
        >
          {!isClicked ? <span>Add Todo</span> : <span>Update Todo</span>}
        </button>
      </div>
      <div className="todo-list flex flex-col gap-6">
        {todoList.length > 0 ? (
          todoList.map((t) => (
            <div
              key={t.id}
              className="todo-card md:w-[500px]  w-[300px] h-32 shadow-md p-2 flex rounded gap-4"
            >
              <div className="content-section w-[80%] whitespace-pre-line rounded flex flex-col gap-4">
                <h1 className="text-lg font-semibold overflow-hidden line-clamp-1">
                  {t.title}
                </h1>
                <p className="line-clamp-2 overflow-hidden">{t.content}</p>
              </div>
              <div className="actions-section w-[20%] rounded flex flex-col gap-4 h-full justify-center">
                <button
                  onClick={() => {
                    setId(t.id);
                    setTitle(t.title);
                    setContent(t.content);
                    setIsClicked(true);
                  }}
                >
                  <span className="text-xl text-blue-600 ">&#9998;</span>
                </button>
                <button onClick={() => removeTodo(t.id)}>
                  <span className="text-md">&#10060;</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="text-lg font-semibold">No Todo's Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
