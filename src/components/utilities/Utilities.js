import style from 'styled-components'

export const ButtonStyle = style.button`
    margin: 0 10px;
    background: transparent;
    border: 3px solid #ccc;
    border-radius: 20px;
    padding: 10px;
    color: #ccc;
    font-size: 1.2em;
    cursor: pointer;

    &:hover {
        color: #fff;
        border:color: #fff;
    }
`;


export const CardDiv = style.div`
    padding: 8px 16px;
    background: #1b1b1b;
    margin: 16px 0;
    border-radius: 20px;

    & > h3 {
        margin: 10px 0;
        color: #ffff57;
    }

    & > p {
        margin: 6px 0;
        color: #999;
    }
`;
