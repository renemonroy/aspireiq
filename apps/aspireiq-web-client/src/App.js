import React from "react";
import { UIProvider, UITagsInput } from "@aspireiq-renemn/ui-web-library";

import { emailValidation } from "./utils/validations";
import "./App.css";

function App() {
  return (
    <UIProvider>
      <div className="app">
        <h3>
          <code>UIInputTags</code> component
        </h3>
        <p>
          This component enters multiple items from a single input field. Can be
          used for emails (as in this case), tags, categories or anything
          similar.
        </p>
        <UITagsInput
          label="To:"
          id="emails"
          name="emails"
          validation={emailValidation}
          preventRepetition={true}
        />
        <p>
          These are the <code>props</code> available for the component:
        </p>
        <pre>
          {`interface ITagsInputProps {
  id?: string | undefined;
  name?: string;
  label?: string;
  value?: Array<string>;
  onChange?: (tags: TTags) => void;
  validation?: (item: string) => boolean;
  preventRepetition?: boolean;
}`}
        </pre>
      </div>
    </UIProvider>
  );
}

export default App;
