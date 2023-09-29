# StarNavi Test Task
 [DEMO](https://igor-kashchenko.github.io/starnavi-test-task/)
## Features

The test app is designed to fulfill the following criteria:

1. **Error-Free Operation:** The app must work without errors.
2. **Fetch Presets:** It should fetch presets for app modes from an external API endpoint. These presets are an array of objects containing a `field` attribute, which specifies the size of the app field in square form.
3. **User Interaction:**
   - Users can set the app mode.
   - Users can press the "START" button to begin interaction.
   - When the user hovers over a square, it turns blue.
   - When the user hovers over a blue square, it turns white.
   - Hover squares are displayed to indicate the current state.
## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone <repository_url>
2. Navigate to the project directory.
    ```bash
   cd test-app
3. Install the required dependencies.
    ```bash
   npm install
    
## Running the App.
To run the test app, follow these steps:
1. Start the development server.

   ```bash
   npm start
2. Open a web browser and navigate to `http://localhost:3000` to access the app.
3. Use the app to set the mode, press "START," and interact with the squares as described in the features section.

## Additional Information
- The app is built using React, Material-UI, and TypeScript.
- The presets for app modes are fetched from the following API endpoint: https://60816d9073292b0017cdd833.mockapi.io/modes.
