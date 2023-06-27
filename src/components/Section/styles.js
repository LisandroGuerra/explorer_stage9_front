import styled from 'styled-components'


export const Container = styled.section`
    width: 100%;

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }

    > div {
        display: flex;
        padding: 14px;
        margin-top: 16px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
    }

`