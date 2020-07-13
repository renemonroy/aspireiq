export type TInputValue = string;
export type TTags = Array<string>;
export type TRepeated = string;

export interface ITagsInputProps {
  id?: string | undefined;
  name?: string;
  label?: string;
  value?: Array<string>;
  onChange?: (tags: TTags) => void;
  validation?: (item: string) => boolean;
  preventRepetition?: boolean;
}
