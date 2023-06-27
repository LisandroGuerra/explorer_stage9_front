import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 24px 64px;
    }
`

export const NewMovie = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 48px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 64px;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`