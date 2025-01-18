import { Trash } from "lucide-react";
import { CreatedTaskCont, CreatedTaskContent } from "./style";
import { CountTask } from "../../components/CountTask";
import { Task } from "../../components/InputTask";

interface CreatedTaskContainerProps {
  tasks: Task[];
}

export function CreatedTaskContainer({ tasks }: CreatedTaskContainerProps) {
  return (
    <CreatedTaskCont>
      <CountTask />
      {tasks.map(task => (
        <CreatedTaskContent key={task.id}>
          <input id={`checkbox-${task.id}`} type="checkbox" />
          <label htmlFor={`checkbox-${task.id}`} />
          <p>{task.description}</p>
          <Trash size={20} color="#808080" />
        </CreatedTaskContent>
      ))}
    </CreatedTaskCont>
  );
}
