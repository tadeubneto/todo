import { InputTaskContainer, TaskInput } from "./style";
import { CirclePlus } from 'lucide-react'

export function InputTask(){
    return(
        <InputTaskContainer>
        <TaskInput action="">
            <input type="text" name="task" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                Criar
                <CirclePlus size={16}/>
                
                </button>
        </TaskInput>
        </InputTaskContainer>
    )
}