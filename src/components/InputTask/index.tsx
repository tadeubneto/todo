import { FormEvent } from "react";
import { InputTaskContainer, TaskInput } from "./style";
import { CirclePlus } from "lucide-react";


export interface Task {
  id: number;
  description: string;
}

interface InputTaskProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    tasks: Task[];
}

export function InputTask({tasks, setTasks}: InputTaskProps) {
 

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const taskInput = (e.target as HTMLFormElement).elements.namedItem(
      "task"
    ) as HTMLInputElement;
    const newTask: Task = {
      id: tasks.length + 1,
      description: taskInput.value,
    };
    setTasks([...tasks, newTask]);
    taskInput.value = "";

 }
  return (
    <InputTaskContainer>
      <TaskInput onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <CirclePlus size={16} />
        </button>
      </TaskInput>
      
    </InputTaskContainer>
  );
}
