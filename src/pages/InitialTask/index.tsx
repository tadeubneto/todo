import { ClipboardMinus } from "lucide-react";
import { TasksContainer, TasksContent } from "./style";
import { CountTask } from "../../components/CountTask";

export function Tasks() {
  return (
    <TasksContainer>
      <CountTask />
      <TasksContent>
        <ClipboardMinus size={56} color="#333333" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </TasksContent>
    </TasksContainer>
  );
}
