# Reelation

Reelation is a short-video-sharing platform where users can upload and view reels, similar to Instagram Reels or YouTube Shorts.

## Tech Stack
- **Next.js** - React framework for server-side rendering and static site generation.
- **DaisyUI** - Tailwind CSS component library for styling.
- **Lucide Icons** - Modern icons for UI elements.
- **ImageKit** - Image CDN and optimization.
- **MongoDB** - NoSQL database for storing user data and video details.

## Features
- Upload short videos.
- Watch and interact with reels.
- Responsive UI with Tailwind & DaisyUI.
- Fast media delivery using ImageKit.
- Database management with MongoDB.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/reelation.git
   cd reelation
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the required environment variables:
   ```sh
   NEXT_PUBLIC_IMAGEKIT_URL=your_imagekit_url
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing
Feel free to fork the project and open pull requests!

## License
This project is licensed under the MIT License.
