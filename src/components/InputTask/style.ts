import styled from "styled-components";


export const InputTaskContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1.5rem;

`


export const TaskInput = styled.form`

    display: flex;
    align-items: center;
    Width: 46rem;    
    gap: 1rem;    

    input {
        flex: 1;
        border-radius: 8px;
        border: 0;
        background: ${props => props.theme["gray-500"]};
        padding: 1rem;

        &::placeholder{
            color: ${props => props.theme["gray-300"]}
        }              
        
    }

    button {

        display: flex;
        align-items: center;

        border-radius: 8px;
        border: 0;
        padding: 1rem;
        gap: 0.5rem;
        font-weight: bold;

        background: ${props => props.theme["blue-dark"]};
        color: ${props => props.theme["gray-100"]};

        &:hover {
            background: ${props => props.theme.blue};
            transition: background-color 0.2s, color 0.2s;
        }

    }
    
`