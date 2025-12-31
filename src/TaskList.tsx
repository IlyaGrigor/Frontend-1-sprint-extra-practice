import {Students, Task} from "./App.tsx";


type TaskListPropsType = {
    data: {
        title: string,
        tasks: Task[],
        students: Students,
    }
}

export const TaskList = ( {data: {title, tasks, students} }: TaskListPropsType) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {tasks.map(task => {
                    return (
                        <li>
                            <span>{task.taskId}</span>
                            <span>{task.title}</span>
                            <span>{task.isDone}</span>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {students.map(el => {
                    return <li>{el}</li>
                })}
            </ul>
        </div>
    )
}