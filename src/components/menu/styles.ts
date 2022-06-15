import styled from 'styled-components';

interface Props {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:flex-start;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 10px;
  height: 100%;
  flex:1;
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  padding: 40px 10px 10px 40px;
  z-index: 6;

`;
export const Option = styled.div<Props>`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.foreground)};
    margin: 10px 0;
    border-radius: 6px;
    box-shadow: 0 2px 4px ${(props) => props.theme.colors.shadow};
    padding: 0 15px;
    cursor: pointer;
  `;

export const OptionText = styled.h2<Props>`
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: -5px;
  margin-left: 15px;
  font-weight: ${(props) => props.theme.font.regular};
  color:${(props) => (props.active ? props.theme.colors.background : props.theme.colors.title)};
`;
export const Title = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  font-weight: ${(props) => props.theme.font.regular};
  color:${(props) => props.theme.colors.title};
`;
export const SubTitle = styled.h1`
margin-top: 40px;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: ${(props) => props.theme.font.regular};
  color:${(props) => props.theme.colors.title};
`;
export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.colors.background};
  object-fit: cover;
`;
export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const ContentColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
