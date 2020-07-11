# AspireIQ - UITagsInput Component

> Enters multiple items from a single input field. Can be used for emails, tags, categories or anything similar.

## Usage

```jsx
import { UITagsInput } from "@aspireiq-renemn/ui-web-library";

function App() {
  return (
    <form>
      <UITagsInput
        name="whatever"
        tags={["hello@world.com", "sup@gmail.com"]}
        validation={emailValidator}
      />
    </form>
  );
}
```

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
