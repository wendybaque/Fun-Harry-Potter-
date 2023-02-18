import { css } from "styled-components";

export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 600px) {
      ${props}
    }
  `;
};
