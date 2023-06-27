import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;


    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > main {
        overflow-y: auto;
        padding: 24px 64px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    .tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 16px;
    }

`

export const Form = styled.form`
    width: 100%;
    margin: 38px auto;

    > header {
        display: flex;
        flex-direction: column;
        

        margin-bottom: 24px;

        a {
            color: ${({ theme }) => theme.COLORS.ROSE};
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }

    > div {
        display: flex;
        gap: 24px;
        margin-bottom: 24px;
    }

    .del {
        color: ${({ theme }) => theme.COLORS.ROSE};
        background-color: ${({ theme }) => theme.COLORS.BLACK};
    }
`