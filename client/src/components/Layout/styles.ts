import styled from "styled-components";

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';
  grid-template-columns: 72px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  height: 100vh;
`;