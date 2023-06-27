import styled from 'styled-components'


export const Container = styled.div`
    
    display: flex;
    align-items: center;

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    > input {
        padding: 12px;
        border: none;

        background: transparent;
        
        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`   