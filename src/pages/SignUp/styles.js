import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'


export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 124px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 48px;
        color: ${({ theme }) => theme.COLORS.ROSE};
        display: flex;
        align-items: center;
        gap: 8px;
    }

    svg {
            font-size: 24px;
        }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`