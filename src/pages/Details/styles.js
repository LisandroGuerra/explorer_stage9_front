import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;



    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 24px 64px;
    }
`

export const Content = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > div {
        height: 48px;
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 12px;
    }

    > a {
            color: ${({ theme }) => theme.COLORS.ROSE};
            display: flex;
            align-items: center;
            gap: 8px;
        }

    > h1 {
        padding-top: 64px;
        font-size: 36px;
        font-weight: 500;
    }

    img {
        width: 18px;
        height: 18px;
    }

    strong {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .clock {
        margin-left: 12px;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    > p {
        margin-top: 16px;
        font-size: 16px;
        text-align: justify;
    }

`