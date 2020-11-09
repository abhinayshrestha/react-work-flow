import styled from 'styled-components';
import { List } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
 
export const StyledList = styled(List)`
  ${({ theme }) => `
   &&& {
       color: #546e7a;
       padding-left : 0px;
       padding-right : 0px;
       .MuiListItem-root {
           padding-top : 5px;
           padding-bottom : 5px;
           &:hover {
               background : rgba(42, 82, 152, .2);
           }
       }
       .MuiListItemIcon-root {
           min-width : 0px;
           margin-right: 8px;
       }
       .MuiButtonBase-root {
           border-radius : 3px;
       }
       .MuiTypography-root{
           font-size: 0.915rem;
           font-weight : 500;
       }
   }
  `}
  
`
export const StyledNavLink = styled(NavLink)`
    ${({ theme }) => `
      &&& {
            color: #546e7a;
            text-decoration: none;
            &.activeNav {
                  color : ${theme.palette.primary.main};
                }
            }
            &.activeNav .MuiSvgIcon-root{
                color : ${theme.palette.primary.main};
            }
    `}
`