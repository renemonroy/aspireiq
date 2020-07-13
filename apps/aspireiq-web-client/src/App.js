import React from "react";
import { UIProvider, UITagsInput } from "@aspireiq-renemn/ui-web-library";

import { emailValidation } from "./utils/validations";

function App() {
  return (
    <UIProvider>
      <div className="app">
        <p>Then next input handles multiple emails through tags approach:</p>
        <UITagsInput
          label="To:"
          id="emails_05"
          name="emails_05"
          validation={emailValidation}
          preventRepetition={true}
        />
      </div>
    </UIProvider>
  );
}

export default App;
