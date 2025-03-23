# ReactProject

practice some react concepts.

Facing 2 console errors -

1. Parcel Error: Cannot find module '@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js'

Reason: facing isssue with parcel 2.14.1 version, That's why I've installed the parcel's 2.13.3 version. It is working completely fine.

steps to degrade the version: Uninstall the current version ---> npm uninstall parcel
Install the desired version ---> npm install -D parcel@2.13.3

solution - 
follow this github repo -- https://github.com/parcel-bundler/parcel/issues/10115

prompts for AI - Visit the GitHub repository or documentation for @parcel/transformer-react-refresh-wrap to check for any reported issues or updates that might be relevant to your case.

2. The error message Uncaught TypeError: (0 , \_reactDomDefault.default).createRoot is not a function

Steps to Fix:

1. Check React Version: Ensure you are using the latest version of React (18 or above). You can check the version by running npm ls react
2. Ensure you are importing ReactDOM properly in your App.js or wherever you are using createRoot. It should look like this:
   import { createRoot } from 'react-dom/client';
   import ReactDOM from "react-dom/client";
