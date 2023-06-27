import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.header`
    width: 100%;
    height: 105px;
    
    padding: 0 64px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    justify-content: space-between;
    
    
`
export const Brand = styled.div`
   
    display: flex;
    justify-content: center;
    align-items: center;

    

    > h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
`

export const Search = styled.div`
    width: 100%;
    padding: 24px 64px;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 9px;

  
    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div{
        width: 124px;
        display: flex;
        flex-direction: column;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            text-align: end;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

`

export const Logout = styled.button`
    text-align: end;
    border: none;
    background: none;
`