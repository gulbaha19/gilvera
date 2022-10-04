import React, { forwardRef } from "react";
import styled from "@emotion/styled";

import { ReactComponent as logo } from "./logo.svg";
import { ReactComponent as key } from "./key.svg";
import { ReactComponent as cube } from "./cube.svg";
import { ReactComponent as customer } from "./customer.svg";
import { ReactComponent as help } from "./help.svg";
import { ReactComponent as percent } from "./percent.svg";
import { ReactComponent as wallet } from "./wallet.svg";
import { ReactComponent as rightArrow } from "./rightArrow.svg";
import { ReactComponent as line } from "./line.svg";
import { ReactComponent as search } from "./search.svg";
import { ReactComponent as lines } from "./lines.svg";
import { ReactComponent as white } from "./white.svg";

export const iconMap = {
  line,
  logo,
  key,
  cube,
  customer,
  help,
  percent,
  wallet,
  rightArrow,
  search,
  lines,
  white,
};

const Container = styled("svg")`
  display: inline-block;
  height: 39px;
  width: 195px;
  line-height: 1;

  color: ${({ color }) => color ?? "inherit"};
  vertical-align: -0.125em;
`;
const ContainerMedium = styled("svg")`
  display: inline-block;
  height: 24px;
  width: 24px;
`;

const ContaineArrow = styled("svg")`
  display: inline-block;
`;
export const Icon = forwardRef(({ type, ...svgProps }, ref) => (
  <Container as={iconMap[type]} {...svgProps} ref={ref} />
));
export const IconMedium = forwardRef(({ type, ...svgProps }, ref) => (
  <ContainerMedium as={iconMap[type]} {...svgProps} ref={ref} />
));
export const IconArrow = forwardRef(({ type, ...svgProps }, ref) => (
  <ContaineArrow as={iconMap[type]} {...svgProps} ref={ref} />
));

export const IconLine = forwardRef(({ type, ...svgProps }, ref) => (
  <ContaineArrow as={iconMap[type]} {...svgProps} ref={ref} />
));
