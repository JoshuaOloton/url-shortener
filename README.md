# URL Shortener

A modern, responsive URL shortening application built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This application allows users to shorten long URLs quickly and efficiently using the CleanURI API.

![URL Shortener](public/assets/illustration-working.svg)

## Features

- 🔗 **URL Shortening**: Convert long URLs into short, shareable links
- 📱 **Responsive Design**: Fully responsive interface that works on all devices
- ⚡ **Fast Performance**: Built with Next.js 16 for optimal performance
- 🎨 **Modern UI**: Clean and intuitive user interface with Tailwind CSS
- 📊 **Statistics Display**: View key metrics and statistics
- 🔄 **Real-time Processing**: Instant URL shortening with API integration
- ♿ **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: [Next.js 16.0.10](https://nextjs.org/)
- **UI Library**: [React 19.2.0](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API**: [CleanURI API](https://cleanuri.com/api)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd url-shortener
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

```
url-shortener/
├── app/
│   ├── api/
│   │   └── shorten/
│   │       └── route.ts          # API endpoint for URL shortening
│   ├── data.js                   # Application data and constants
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Home page
├── components/
│   ├── Action.tsx                # Call-to-action component
│   ├── Button.tsx                # Reusable button component
│   ├── Footer.tsx                # Footer component
│   ├── Header.tsx                # Header component
│   ├── Hero.tsx                  # Hero section component
│   ├── ShortenForm.tsx           # URL shortening form
│   ├── SocialIcon.tsx            # Social media icon component
│   ├── StatisticCard.tsx         # Statistics card component
│   ├── Statistics.tsx            # Statistics section
│   └── UrlBox.tsx                # URL display component
├── public/
│   └── assets/                   # Static assets (images, icons, SVGs)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## API Endpoints

### POST `/api/shorten`

Shortens a long URL using the CleanURI API.

**Request Body:**
```json
{
  "longUrl": "https://example.com/very/long/url"
}
```

**Success Response:**
```json
{
  "shortenedUrl": "https://cleanuri.com/abc123"
}
```

**Error Response:**
```json
{
  "error": "Invalid URL"
}
```

## Components

### Core Components

- **Hero**: Landing section with main heading and illustration
- **ShortenForm**: Form for entering and shortening URLs
- **UrlBox**: Displays the shortened URL with copy functionality
- **Statistics**: Shows application statistics and features
- **StatisticCard**: Individual statistic display card
- **Action**: Call-to-action section
- **Footer**: Footer with social links and information
- **Header**: Navigation header
- **Button**: Reusable button component
- **SocialIcon**: Social media icon component

## Styling

This project uses Tailwind CSS 4 for styling with a custom configuration. The design is fully responsive and follows modern UI/UX principles.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- URL shortening powered by [CleanURI API](https://cleanuri.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Next.js](https://nextjs.org/)

## Contact

For questions or feedback, please open an issue on the repository.

---

Built with ❤️ using Next.js and React
