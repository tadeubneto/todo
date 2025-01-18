import styled from "styled-components";

export const TasksContainer = styled.main`

display: flex;
flex-direction: column;
margin: 0 auto;

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