import React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';


const ContainButton = styled(Button)`
    &.MuiButton-root {
        padding: 8px 16px;
        text-transform: none;
        line-height: 1;
        font-weight: 400;
        font-family: 'Roboto', 'Noto Sans TC', 'Noto Sans SC';
        font-size: 14px;
        border-radius: 2px;
    }
    &.MuiButton-contained {
        background-color: #00adef;
        color: #ffffff;
        &:hover {
            background-color: #00b5f9;
        }
        &:focus {
            background-color: #56d0ff;
        }
        &:active {
            background-color: #8adfff;
        }
    }
`;




export default function ContainedButton(props){
    return <ContainButton variant="contained" {...props}>{props.children}</ContainButton>;
}