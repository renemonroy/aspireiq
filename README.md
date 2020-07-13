# AspireIQ - `UITagsInput` Component

> Enters multiple items from a single input field. Can be used for emails, tags, categories or anything similar.

## Usage

```jsx
import { UITagsInput } from "@aspireiq-renemn/ui-web-library";

function App() {
  return (
    <form>
      <UITagsInput
        label="To:"
        id="emails"
        name="emails"
        validation={emailValidation}
        preventRepetition={true}
      />
    </form>
  );
}
```

## Features

- Not limited to emails
- Prevents repetition of items
- Supports backspace deletion
- Can be used with common Form libraries
- Responsive to some level
- Supports tabbing to move between form elements
- Handles id/for attributs for automatic focus

## Project Organization

I created a monorepo to set up different web services for AspireIQ. In this case I added an UI Web Library folder to create components.

```
- apps/
  - aspireiq-web-client/
- libs/
  - ui-web-library/
    - src/
      - components/
        - UITagsInput/
```

### Benefits

- Isolated environments for libs and apps (clients)
- Runs Typescript to enforce type safety
- Uses Storybook as dev server and for documentations
- Bundler ready for production with tree shaking
- Handles styles with Emotion
- `ui-web-library/` ready for more components

### Some Possible Improvements

- Max/min tags limitation
- Copy/paste multiple tags
- Left/right addons instead label
- Icons as props
- Improve responsiveness or even make it adaptive
