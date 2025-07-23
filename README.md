# Random GIFs

A fun and interactive React web app to generate random GIFs or search for custom GIFs by tag, powered by the Giphy API.

## Features

- **Random GIF Generator:** Instantly fetch a random GIF with a single click.
- **Custom Tag Search:** Enter any keyword/tag to get a random GIF related to your search.
- **Modern UI:** Stylish, responsive design using Tailwind CSS with glassmorphism effects.
- **Loading Spinner:** Smooth loading experience while fetching GIFs.
- **Reusable Components:** Clean, modular React component structure.

## Demo

*Add a screenshot of your app UI here if desired.*

## Tech Stack

- **React** (with Hooks)
- **Tailwind CSS** (customized with glassmorphism and color palette)
- **Axios** (for API requests)
- **Giphy API** (for GIF data)
- **React Icons** (for UI icons)

## How It Works

- The app uses a custom React hook (`useGif`) to fetch GIFs from the Giphy API.
- The **Random** component fetches a truly random GIF.
- The **Tag** component allows users to enter a keyword and fetch a related GIF.
- All API requests are handled asynchronously with loading states for smooth UX.

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repo-url>
   cd 25 - Random GIFs
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up Giphy API Key:**
   - Create a `.env` file in the root directory.
   - Add your Giphy API key:
     ```
     REACT_APP_GIPHY_API_KEY=your_giphy_api_key_here
     ```

4. **Start the development server:**
   ```
   npm start
   ```

5. **Open in your browser:**
   - Visit `http://localhost:3000`

## Folder Structure

- `src/components/` – React components (`Random`, `Tag`, `Spinner`)
- `src/hooks/` – Custom hook for GIF fetching (`useGif.js`)
- `src/index.css` – Tailwind CSS styles
- `public/` – Static assets and HTML

## Customization

- Tailwind CSS is configured in `tailwind.config.js` with custom colors and fonts.
- Easily extend or restyle components as needed.

## License

MIT