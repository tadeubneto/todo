import { ClipboardMinus } from "lucide-react";
import {
    TasksContainer,
     TaskHeader,
      CreatedTask,
       FinishedTask,
        TasksContent 
} from "./style";

export function Tasks() {
  return (
    <TasksContainer>
      <TaskHeader>
        <CreatedTask>
          <p>Tarefas criadas</p>
          <span>0</span>
        </CreatedTask>
        <FinishedTask>
          <p>Concluídas</p>
          <span>0</span>
        </FinishedTask>
      </TaskHeader>
      <TasksContent>
      <ClipboardMinus size={56} color="#333333" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </TasksContent>
    </TasksContainer>
  );
}
