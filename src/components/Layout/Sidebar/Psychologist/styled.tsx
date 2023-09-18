import styled, { css } from "styled-components";
import {
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItem,
} from "@material-ui/core";

export const MENU_COLOR = "#594f4f";

export const StyledDrawer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "200px" : "55px")};
  transition: width 0.3s;
  border-right: 1px solid #ddd;
  background-color: var(--bg-primary);
  height: 100%; 
  overflow-x: hidden;
  position: relative; 
  top: 0;
  left: 0;
`;

export const StyledContainer = styled.div`
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: var(--bg-primary);
  color: var(--bg-dark);
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3000; 
  height: 60px;
  width: 53px;

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
    background-color: #f3f3f3;
  }

  ${(props) =>
    props.selected &&
    css`
      border-left: 2px solid var(--bg-dark);
      background-color: #f3f3f3;
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
