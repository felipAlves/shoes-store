import styled from 'styled-components'

export const StyledHome = styled.main`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > header {
        width: 100%;
        max-width: 1100px;

        padding: 15px 0px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    } 

    > header > nav.nav-list ul {
        display: flex;
    }

    > header > nav.nav-list ul li {
        margin: 10px;

        font-weight: 600;
    }

    > header > nav.nav-list ul li a {
        padding: 15px;
    }

    header > button.cart-button {
        padding: 10px 15px;
        background: white;
        border: none;
        box-shadow: 0px 0px 6px rgba(0,0,0,.3);
        border-radius: 10px;

    }

    > main {
        width: 100%;
        max-width: 1100px;

        padding: 10px;
    }

    > footer {
        width: 100%;
        max-width: 1100px;
    }
`