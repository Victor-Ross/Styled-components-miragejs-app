import styled from "styled-components";



export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div:not(:last-child) {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;

const colors = {
  green: '#33CC95',
  red: '#E52e54'
}
interface TotalProps {
  hasResultColor: boolean;
  resultColor: 'green' | 'red';
}

export const Total = styled.div<TotalProps>`
  background: ${(props) => props.hasResultColor && colors[props.resultColor]};
  color: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
`;