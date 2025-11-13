# Test Vercel Project

This is a test project for connecting with Vercel. It demonstrates a simple Next.js application that can be deployed to Vercel's platform.

## Features

- ✅ Next.js 14 App Router
- ✅ React 18
- ✅ API Routes (Serverless Functions)
- ✅ Vercel deployment configuration
- ✅ ESLint configuration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/santoshhashicorp/Test_Vercel.git
cd Test_Vercel
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

Build the application for production:

```bash
npm run build
```

### Testing API Endpoint

Once the development server is running, you can test the API endpoint:

```bash
curl http://localhost:3000/api/hello
```

## Deploying to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Vercel will automatically detect that this is a Next.js project and configure the build settings.

## Project Structure

```
Test_Vercel/
├── app/
│   ├── layout.js       # Root layout component
│   └── page.js         # Home page
├── pages/
│   └── api/
│       └── hello.js    # API endpoint
├── public/             # Static files
├── .gitignore         # Git ignore file
├── .eslintrc.js       # ESLint configuration
├── package.json       # Project dependencies
├── vercel.json        # Vercel configuration
└── README.md          # This file
```

## API Routes

- `GET /api/hello` - Returns a JSON response with a greeting message and timestamp

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Deploy Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
