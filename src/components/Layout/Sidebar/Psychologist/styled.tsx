import styled, { css } from "styled-components";
import {
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItem,
} from "@material-ui/core";

export const MENU_COLOR = "#594f4f";

export const StyledDrawer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "160px" : "55px")};
  transition: width 0.3s;
  border-right: 1px solid #ddd;
  background-color: var(--bg-primary);
  height: 100vh;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  color: var(--bg-dark);
`;

export const StyledIconButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledIcon = styled.span`
  color: var(--bg-dark);
  margin-right: 10px;
  svg {
    width: 20px;
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledListItem = styled(ListItem)<{ selected?: boolean }>`
  &:hover {
    border-left: 2px solid var(--bg-dark);
    background-color: #F3F3F3;
  }

  ${(props) =>
    props.selected &&
    css`
      border-left: 2px solid var(--bg-dark);
      background-color: #F3F3F3;
    `}
`;

export const StyledListItemText = styled(ListItemText)`
  && .MuiTypography-body1 {
    color: var(--bg-dark);
    font-size: 0.9rem;
  }
`;

export const StyledSubItemText = styled(StyledListItemText)`
  && .MuiTypography-body1 {
    font-size: 0.8rem;
  }
`;
