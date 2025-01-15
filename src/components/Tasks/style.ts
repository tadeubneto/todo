import styled from "styled-components";

export const TasksContainer = styled.main`

display: flex;
flex-direction: column;
margin: 0 auto;

`

export const TaskHeader = styled.header`

display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
max-width: 46rem;
margin: 4rem auto 0;

    span{
        color: ${props => props.theme.blue};
        font-weight: bold;
    }

    strong{
        color: ${props => props.theme.purple};
    }

`
export const CreatedTask = styled.div`

    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
        color: ${props => props.theme.blue};
        font-weight: bold;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 19px;
        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["gray-200"]};
        border-radius: 10px;
        font-size: 0.75rem;

    }

`

export const FinishedTask = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
        color: ${props => props.theme.purple};
        font-weight: bold;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 19px;
        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["gray-200"]};
        border-radius: 10px;
        font-size: 0.75rem;


    }

`
export const TasksContent = styled.section`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-top: 1px solid ${props => props.theme["gray-300"]};
border-radius: 16px;
width: 100%;
max-width: 46rem;
min-height: 244px;
margin: 1.5rem auto 0;

    svg {
        margin-bottom: 1rem;
    }

    span {
        color: ${props => props.theme["gray-300"]};
        font-weight: bold;
    }

    p {
        color: ${props => props.theme["gray-300"]};
    }

`