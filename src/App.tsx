import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { InputTask } from "./components/InputTask";
// import { Tasks } from "./pages/Tasks/InitialTask";
import { CreatedTaskContainer } from "./pages/Tasks";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <InputTask />
      {/* <Tasks /> */}
      <CreatedTaskContainer />
    </ThemeProvider>
  )
}


