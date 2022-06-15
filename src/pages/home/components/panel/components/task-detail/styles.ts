import styled from 'styled-components';

interface Props {
  active?: boolean;
  type?: string;
}
export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items:center;
  justify-content: center;
  margin-top: -70px;
  position: fixed;
  background-color: ${(props) => props.theme.colors.black}99;
  z-index: 12;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width:700px;
  padding: 20px;
  position: relative;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: 10px;
  box-shadow: 0 2px 8px ${(props) => props.theme.colors.shadow};

`;
export const ContentDetail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 80vh;
  width: 43%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: 10px;
  box-shadow: 0 2px 8px ${(props) => props.theme.colors.shadow};

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
export const Title = styled.h1`
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: ${(props) => props.theme.font.semiBold};
  color:${(props) => props.theme.colors.title};
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
  width: 100%;
  text-align: left;
  padding-bottom: 5px;
`;
export const SubTitle = styled.h1`
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: ${(props) => props.theme.font.semiBold};
  color:${(props) => props.theme.colors.title};
  width: 100%;
  text-align: left;
  margin-top: 20px;
`;
export const Option = styled.div<Props>`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.white)};
    margin: 10px 0;
    border-radius: 6px;
    box-shadow: 0 2px 4px ${(props) => props.theme.colors.shadow};
    padding: 0 1px;
    cursor: pointer;
  `;

export const OptionText = styled.h2<Props>`
  font-size: 1rem;
  line-height: 1.4rem;
  margin-bottom: -5px;
  margin-left: 15px;
  font-weight: ${(props) => props.theme.font.regular};
  color:${(props) => props.theme.colors.white};
`;
export const TextArea = styled.textarea`
  background-color: #d9d9d920;
  font-size: 1rem;
  line-height: 1em;
  border-radius: 7px;
  padding: 5px 20px;
  padding-bottom: 0px;
  min-height: 150px;
  max-height: 250px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-weight: 400;
  margin: 10px 0;
  vertical-align:  top;
`;
export const OptionButton = styled.div<Props>`
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => (props.type === 'baixa' ? props.theme.colors.cyan : props.type === 'alta' ? props.theme.colors.red : props.theme.colors.orange)};
    background-color: ${(props) => (props.active ? props.type === 'baixa' ? props.theme.colors.cyan : props.type === 'alta' ? props.theme.colors.red : props.type === 'média' ? props.theme.colors.orange : props.theme.colors.background : props.theme.colors.background)};
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 6px;
    box-shadow: 0 2px 4px ${(props) => props.theme.colors.shadow};
    padding: 0 1px;
    cursor: pointer;
  `;
export const OptionButtonText = styled.h2<Props>`
font-size: 1rem;
line-height: 1rem;
font-weight: ${(props) => props.theme.font.regular};
color:${(props) => (props.active ? props.theme.colors.black : props.theme.colors.white)};
`;
export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border: 2px solid ${(props) => props.theme.colors.background};
  object-fit: cover;
`;
