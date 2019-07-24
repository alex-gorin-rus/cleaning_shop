import styled from 'styled-components';

export const ButtonPrice = styled.button`
font-size:0.9rem;
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
border-color:${props =>
props.cart ? "var(--lightBlue)" : "var(--lightPink)"};
margin-left:20px;
background:white;
transition:0.6s;
&:hover{
  background:var(--forButton);
  transition:0.6s;

}

`;
