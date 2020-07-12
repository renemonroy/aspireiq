import styled from "styled-components";
import { IProps } from "../../types/theme.types";

export const UITagsInputStyled = styled.div`
  background-color: ${({ theme }: IProps) => theme.bgColor.white};
  cursor: text;
  display: flex;
  flex-direction: row;
  font-size: ${({ theme }: IProps) => theme.fontSizes.sm};
  min-height: 42px;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
`;

export const UITagsListStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: start;
  padding-bottom: 0.25rem;
`;

export const UITagsLabelStyled = styled.label`
  color: ${({ theme }: IProps) => theme.fontColor.gray};
  font-family: ${({ theme }: IProps) => theme.fontFamily.proximaNova};
  font-style: normal;
  font-weight: ${({ theme }: IProps) => theme.fontWeight.light};
  line-height: 28px;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
`;

export const UITagStyled = styled.span`
  background-color: ${({ theme }: IProps) => theme.bgColor.transparent};
  border-radius: 6px;
  display: inline-block;
  font-weight: ${({ theme }: IProps) => theme.fontWeight.bold};
  height: 28px;
  line-height: 28px;
  margin: 0.25rem 0.25rem 0;
  padding: 0 0.5rem;

  &:hover {
    background-color: ${({ theme }: IProps) => theme.bgColor.gray};
    cursor: default;
  }

  &.invalid,
  &.invalid:hover {
    background-color: ${({ theme }: IProps) => theme.bgColor.red};
  }
`;

export const UIInputStyled = styled.input`
  border: 0 none;
  font-size: ${({ theme }: IProps) => theme.fontSizes.sm};
  padding: 0.25rem;
  margin: 0.25rem 0.25rem 0;

  &:focus {
    outline: none;
  }
`;
