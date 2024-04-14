## Problem Statement
Create a Review Screen page using React

## Functional Requirements

In the project directory, you can run:

### `Right Sidebar`

- Displays all fields present in image from `sections.json` file 
- Checking/un-checking the checkbox corresponding to each field will reflect the selection on the image
- Deleting a field will remove it from the state level

### `Document Previewer`

- Displays the full image highlighting all the sidebar items

### `Field Highlighting`

- Fields on the image get highlighted as the sidebar items get selected or deselected

### `Review Actions`

- Select All button will select all the sidebar items
- Confirm button will be active only if atleast one sidebar item is checked
- Clicking the confirm button will render a modal to confirm the selection which will render another modal on clicking save

## Non-Functional Requirements

- Toggle functionality added for light/dark theme change

## General Notes

- App created using CRA
- Apart from react packages, `use-local-storage` library used to store the theme in the local storage to persist after page reload

## Deployment

The application is hosted on Netlify. [Go to App!](https://phenomenal-gingersnap-35492a.netlify.app/)

