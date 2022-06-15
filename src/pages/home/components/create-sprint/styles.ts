import styled from 'styled-components';

interface Props {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  z-index: 6;
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 55%;
  padding: 20px;
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
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;
export const Title = styled.h1`
  font-size: 1rem;
  line-height: 1rem;
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
  line-height: 1rem;
  margin-bottom: -5px;
  margin-left: 15px;
  font-weight: ${(props) => props.theme.font.regular};
  color:${(props) => props.theme.colors.black};
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
