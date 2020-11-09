import styled from 'styled-components';
import { AppBar, IconButton } from '@material-ui/core'

export const StyledAppBar = styled(AppBar)`
     &&& {
         border-bottom : 1px solid rgba(0, 0, 0, 0.12);  
         ${({ theme }) => `background : ${theme.palette.background.paper};`}
     }
`

export const StyledIconButton = styled(IconButton)`
     &&& {
        padding : 10px;
     }
`