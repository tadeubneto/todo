import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { InputTask } from "./components/InputTask";
// import { Tasks } from "./pages/InitialTask";
import { Task } from "./components/InputTask";
import { CreatedTaskContainer } from "./pages/TodoList";
import { useState } from "react";


export function App() {

   const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <InputTask setTasks={setTasks} tasks={tasks} />
      <CreatedTaskContainer tasks={tasks} />
      {/* <Tasks /> */}
     
    </ThemeProvider>
  )
}


