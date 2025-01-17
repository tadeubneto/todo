import styled from "styled-components";

export const CreatedTaskCont = styled.div`

    display: flex;
    align-items: center;


`

export const CreatedTaskContent = styled.div`

    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    height: 4.5rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 12px;
    border: 1px solid ${props => props.theme["gray-400"]};
    background: ${props => props.theme["gray-500"]};


    p {
        flex: 1;
    }
    

`