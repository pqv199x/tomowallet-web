import styled from "styled-components";
import { primaryColor } from "./variables";
// Style Component//

const ImporWalletStyler = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 1.5em 1.5em;
  position: relative;
  transition: 0.3s;
  text-align: center;
  ${({ isActive, theme }) =>
    isActive
      // ? `background-color: #2d344a;border: solid 1px #2d344a;border-top: 5px solid ${primaryColor};`
      // : "border: solid 1px #444b64;border-top: solid 5px #444b64;"}
      ? `background-color: ${theme.importItemActiveBackground};
        border: solid 2px ${theme.importItemActiveBorder};
        box-shadow: 0 -5px 0 0 ${theme.importItemActiveBorderTop};`
      : `border: solid 2px ${theme.importItemBorder};`
  }
  .text-end {
    margin-top: auto !important;
  }
  .card-img {
    width: 40px;
  }
  .card-body {
    .card-title {
      margin-bottom: 0px;
      font-size: 20px;
      ${({ isActive }) => isActive && "font-weight: bold;"}
    }
  }
`;
export { ImporWalletStyler };
