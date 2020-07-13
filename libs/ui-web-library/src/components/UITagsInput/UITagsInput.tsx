import * as React from "react";

import {
  ITagsInputProps,
  TInputValue,
  TTags,
  TRepeated,
} from "./UITagsInput.types";
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
 * @param {string | undefined} props.id - dom identifier
 * @param {string} props.name - text attr used for forms
 * @param {function} onChange - event to listen changes on tags list
 * @param {function} validation - used to test each item entered
 * @param {boolean} preventRepetition - prevents to add repeated tags
 */
export default function UITagsInput(props: ITagsInputProps): JSX.Element {
  // Sets a state for the main UITagsInput component
  const [tags, setTags] = React.useState<TTags>(props.value || []);
  const [inputValue, setInputValue] = React.useState<TInputValue>("");
  const [repeated, setRepeated] = React.useState<TRepeated>("");

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
    const tag = inputValue.trim();
    if (["Tab", "Enter", ","].includes(e.key) && inputValue !== "") {
      if (isRepeated(tag)) {
        setRepeated(tag);
        // @TODO: Async/await with delay would be better
        setTimeout(() => {
          setRepeated("");
          inputElRef?.current?.focus();
        }, 350);
        return;
      }
      e.preventDefault();
      setRepeated("");
      setInputValue("");
      setTags([...tags, tag]);
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

  // Checks whether a validation exists and validates
  function isValid(tag: string): boolean {
    return !props.validation || (props.validation && props.validation(tag));
  }

  // Validates wheter a tag exists already
  function isRepeated(tag: string): boolean {
    return props.preventRepetition === true ? tags.includes(tag) : false;
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
              className={`${isValid(tag) ? "valid" : "invalid"}${
                repeated === tag ? " repeated" : ""
              }`}
            >
              {tag}
              <span>!</span>
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
