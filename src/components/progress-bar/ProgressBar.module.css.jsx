import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 0.313rem;
  background: rgba(0, 0, 0, 0.25);
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 0.313rem;
  background: var(--gainsboro);
  border-radius: 0px 0px 5px;
`;
