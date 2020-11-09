import styled from 'styled-components';
import { motion } from "framer-motion";

export const DrawerContainer = styled(motion.div)`
    width : 260px;
    box-sizing: border-box;
    border-right: 1px solid rgba(0, 0, 0, 0.12);  
    height: 100%;
    overflow : scroll;
    overflow: overlay;
    color: #00000000;
    transition: color 0.3s;
    ::-webkit-scrollbar {
	        width: 9px;
            position: absolute;
    }
    ::-webkit-scrollbar-thumb {
        background-clip: content-box;
        border: 1px solid transparent;
        border-radius: 7px;
        box-shadow: inset 0 0 0 10px;
    }
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
        }
    ::-webkit-scrollbar-corner {
        background-color: transparent;
        }
           
        &:hover {
            color: #ccc;
        }
`

export const CompanyInfo = styled.div`
    width : 100%;
    height : 160px;
    display : flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
` 
export const AvatarContainer = styled.div`
     width: 70px;
     height: 70px;
     border-radius: 70px;
   img {
      width: 70px;
      height:70px;
      object-fit: cover;
      border-radius: 70px;
   }
`
export const Name = styled.div`
   width : 100%;
   display : flex;
   flex-direction : column;
   justify-content : flex-start;
   align-items : center;
`
export const NavigationContainer = styled.div`
   padding : 5px 16px;
`
export const Helper = styled.div`
   height : 70px;
   margin: 15px 20px 20px 20px;
   background : rgb(244, 246, 255);;
   box-sizing : border-box;
   padding:15px;
   border-radius : 5px;
`