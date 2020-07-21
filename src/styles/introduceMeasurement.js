import styled from 'styled-components';

const Circle = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  border: 4px solid #45a8ed;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  font-size: 40px;
  color: #b3bac7;
  padding-top: 75px;
  
`;

const Space = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  color: #b3bac7;
`;

const Button = styled.div`
  width: 100%;
  height: 50px;
  background-color: #9cee95;
  color: white;
  text-align: center;  
`;

const Space2 = styled.div`
  padding-top: 20px;
`;

export {
  Circle,
  Space,
  Button,
  Space2,
};
