import styled from "styled-components";

export const CreatedTaskCont = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.75rem;
`;

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

    input[type="checkbox"] {
        display: none;
    }

    label {
        width: 17px;
        height: 17px;
        border: 2px solid ${props => props.theme.blue};
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        
        
    }
    
    label::after {
        content: '';
        width: 17px;
        height: 17px;
        background-color: ${props => props.theme.blue};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
       
        
    }

    input[type="checkbox"]:checked + label::after {
        opacity: 1;
        
    }

    p {
        flex: 1;
        color: ${props => props.theme["gray-100"]};
    }

    svg:hover {
        cursor: pointer;
        stroke: ${props => props.theme.danger};
    }
`;
