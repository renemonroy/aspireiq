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

### Features

- Not limited to emails
- Prevents repetition of items
- Supports backspace deletion
- Can be used with common Form libraries
- Supports tabbing to move between form elements
- Handles id/for attributs for automatic focus

### Some Possible Improvements

- Max/min tags limitation
- Copy/paste multiple tags
- Left/right addons instead label
- Icons as props
- Improve responsiveness or even make it adaptive

## Project Organization

I created a monorepo to set up different web services for AspireIQ, to simulate a real scenario where we could have UI and other custom libraries used in the main web app. In this case I created the UI Web Library folder to create the component.

```
- apps/
  - aspireiq-web-client/
    - src/
      ...
- libs/
  - ui-web-library/
    - src/
      - components/
        - UITagsInput/
          - UITagsInput.tsx
          - UITagsInput.stories.mdx
          - UITagsInput.styles.ts
          - UITagsInput.types.ts
      ...
```

### Installation

To install just run `yarn install` from the root of the project.

To run the dev server of the simulated web app, you just need to run it with generic `react-scripts` package:

```
  yarn start
    Starts the development server.
```

It will load the UI Library automatically.

If you want you can also run Storybook, to test the library isolated, by going to `/libs/ui-web-library` and run `yarn start` there. It should show a playground similar to this:

![alt text](https://user-images.githubusercontent.com/106011/87277303-a5e43380-c4a7-11ea-8737-699d6b37295f.png "Storybook")

### Features

- Isolated environments for libs and apps (clients)
- Runs Typescript to enforce type safety
- Uses Storybook as dev server and for documentations
- Bundler ready for production with tree shaking
- Create styles with CSS-in-JS (styled-components) for smart styles
- `ui-web-library/` ready for more components

### Some Possible Improvements

- Tests on different levels
- Make use of Storybook Knobs
- Automatic deployments to NPM registry and storage service
- Automatic versioning
- Dockerize servers
