import { CreatedTask, FinishedTask, TaskHeader } from "./style";

export function CountTask() {
  return (
    <TaskHeader>
      <CreatedTask>
        <p>Tarefas criadas</p>
        <span>0</span>
      </CreatedTask>
      <FinishedTask>
        <p>Concluídas</p>
        <span>2</span>
      </FinishedTask>
    </TaskHeader>
  );
}
