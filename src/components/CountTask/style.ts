import styled from "styled-components";

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
        min-width: 25px;
        height: 19px;
        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["gray-200"]};
        border-radius: 10px;
        font-size: 0.75rem;
        padding: 0 0.5rem;


    }

`