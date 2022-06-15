import styled from 'styled-components';

interface Props {
  type?: number;
  column?: string;
}
export const Container = styled.div<Props>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 130px;
  width: 100%;
  padding: 5px 10px;
  background-color: ${(props) => (props.column === 'CONCLUÍDO' ? `${props.theme.colors.primary}50` : props.theme.colors.primary)};
  box-shadow: 0 2px 8px ${(props) => props.theme.colors.shadow};
  border-radius: 6px;
  margin: 10px 0;
  cursor: pointer;
`;

export const TitleCard = styled.h1`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: ${(props) => props.theme.font.semiBold};
  color:${(props) => props.theme.colors.title};
`;
export const SubTitle = styled.h1`
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: ${(props) => props.theme.font.regular};
  color:${(props) => props.theme.colors.title};
`;
export const Priority = styled.h1<Props>`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: ${(props) => props.theme.font.regular};
  color:${(props) => props.theme.colors.black};
  background-color: ${(props) => (props.type === 0 ? props.theme.colors.cyan : props.type === 2 ? props.theme.colors.red : props.theme.colors.orange)};
  border-radius: 20px;
  padding: 0 10px;
  margin: 10px;
  margin-left: 10px;
`;

export const Diviser = styled.div`
  margin: 5px 0;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
`;
export const InfoView = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border: 2px solid ${(props) => props.theme.colors.background};
`;
