import styled, { keyframes } from "styled-components";
import { IProps } from "../../types/theme.types";

export const bounceRepetition = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

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
  display: flex;
  flex-direction: row;
  font-weight: ${({ theme }: IProps) => theme.fontWeight.bold};
  height: 28px;
  line-height: 28px;
  margin: 0.25rem 0.25rem 0;
  padding: 0 0.5rem;

  button {
    background-color: transparent;
    border: 0 none;
    border-radius: 24px;
    box-shadow: none;
    display: none;
    font-size: ${({ theme }: IProps) => theme.fontSizes.lg};
    font-weight: ${({ theme }: IProps) => theme.fontWeight.thin};
    height: 24px;
    margin-right: -5px;
    margin-top: 3px;
    width: 24px;
  }

  span {
    background-color: ${({ theme }: IProps) => theme.bgColor.red};
    border-radius: 14px;
    color: ${({ theme }: IProps) => theme.fontColor.white};
    display: none;
    font-size: ${({ theme }: IProps) => theme.fontSizes.xxxs};
    text-align: center;
    height: 14px;
    line-height: 14px;
    margin: 7px 0 0 5px;
    width: 14px;
  }

  &:hover {
    background-color: ${({ theme }: IProps) => theme.bgColor.gray};
    cursor: default;

    button {
      cursor: pointer;
      display: block;
    }
  }

  &.invalid {
    background-color: ${({ theme }: IProps) => theme.bgColor.lightRed};

    span {
      display: inline-block;
    }
  }

  &.invalid:hover {
    background-color: ${({ theme }: IProps) => theme.bgColor.lightRed};

    span {
      display: none;
    }
  }

  &.repeated {
    animation: 350ms ${bounceRepetition} ease;
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
