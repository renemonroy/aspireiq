import * as React from "react";

import { ITagsInputProps, TInputValue, TTags } from "./UITagsInput.types";
import {
  UITagsInputStyled,
  UITagsListStyled,
  UITagStyled,
  UITagsLabelStyled,
  UIInputStyled,
} from "./UITagsInput.styles";

/**
 * UITagsInput
 * -------------------------------------------------------------------
 * @description - Enters multiple items from a single input field. Can be used for emails, tags, categories or anything similar.
 * @param {object} props - properties of the component
 * @param {Array<string>} props.value - list of tags as strings
 * @param {string} props.label - text that will appear before the list
 */
export default function UITagsInput(props: ITagsInputProps): JSX.Element {
  // Sets a state for the main UITagsInput component
  const [tags, setTags] = React.useState<TTags>(props.value || []);
  const [inputValue, setInputValue] = React.useState<TInputValue>("");

  const inputElRef = React.useRef<HTMLInputElement>(null);

  // Updates state.tags whenever props.value changes
  React.useEffect(() => {
    if (props.value !== tags) setTags(props.value || []);
  }, [props]);

  // Trigger onChange event whenever the tags are updated
  React.useEffect(() => {
    props.onChange && props.onChange(tags);
  }, [tags]);

  // Handles onChange event of text input element
  function handleInputChange(e: React.FormEvent<HTMLInputElement>): void {
    setInputValue(e.currentTarget.value);
  }

  // Handles keydown event of text input element
  function handleInputKeydown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (["Tab", "Enter", ","].includes(e.key) && inputValue !== "") {
      e.preventDefault();
      setInputValue("");
      setTags([...tags, inputValue.trim()]);
    }
  }

  // Remove a tag item from the component
  function removeTagItem(index: number): void {
    const items = [...tags];
    items.splice(index, 1);
    setTags(items);
  }

  // Focus input when clicking on container element
  function handleContainerClick(e: React.MouseEvent<HTMLDivElement>): void {
    e.stopPropagation();
    inputElRef?.current?.focus();
  }

  return (
    <UITagsInputStyled onClick={handleContainerClick}>
      {props.label && (
        <UITagsLabelStyled {...(props.id && { htmlFor: props.id })}>
          {props.label}
        </UITagsLabelStyled>
      )}
      <UITagsListStyled>
        {tags.map((tag, i) => (
          <React.Fragment key={`${tag}-${i}`}>
            <UITagStyled
              className={
                props.validation && props.validation(tag) ? "valid" : "invalid"
              }
            >
              {tag}
              <button onClick={() => removeTagItem(i)}>×</button>
              {props.name && (
                <input type="hidden" name={`${props.name}[${i}]`}></input>
              )}
            </UITagStyled>
          </React.Fragment>
        ))}
        <UIInputStyled
          ref={inputElRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeydown}
          {...(props.id && { id: props.id })}
        />
      </UITagsListStyled>
    </UITagsInputStyled>
  );
}
