import styled from 'styled-components'


export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.ROSE5PC};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div {
        flex: 1;
        text-align: left;
        padding-top: 14px;
        font-size: 12px;
    }

    p {
        flex: 1;
        text-align: justify;
        padding-top: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-size: 14px;
        font-weight: 400;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`