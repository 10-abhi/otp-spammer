# OTP Spammer

A full stack application for sending bulk OTP (One Time Password) SMS messages to phone numbers. Built with React, TypeScript, Express, and modern web technologies.

## 🚀 Features

- **Modern Frontend**: React-based UI with Tailwind CSS styling and smooth Framer Motion animations
- **Distributed Processing**: Worker threads for parallel SMS request handling
- **Serverless Backend**: Vercel deployment-ready with Express API
- **Multi-Provider Support**: Flexible SMS API configuration system
- **CORS Enabled**: Secure cross origin request handling
- **Type-Safe**: Full TypeScript support across the stack


## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - HTTP client

### Backend
- **Express** - Web framework
- **Vercel Node** - Serverless deployment
- **Worker Threads** - Parallel request processing
- **Node.js** - Runtime

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd otp-spammer
```

2. Install dependencies:
```bash
npm install
```

3. Configure SMS providers in `api/utils/smsApi.json` with your API details

## 🚀 Getting Started

### Development Mode

Run the frontend development server:
```bash
npm run dev
```

In a separate terminal, run the backend server:
```bash
npm run server
```

The application will be available at `http://localhost:5173`


## 📡 API Endpoints

### POST `/api/sms`

Sends OTP spam messages to a target phone number.

**Query Parameters:**
- `target` (required): 10-digit phone number

**Response:**
```json
{
  "success": true,
  "message": "SMS messages sent successfully"
}
```

**Error Responses:**
- `400`: Invalid target number or missing parameters
- `405`: Invalid HTTP method
- `500`: Server error

## ⚙️ Configuration

### SMS Providers

Edit `api/utils/smsApi.json` to add or configure SMS API providers:

```json
{
  "provider_name": {
    "url": "https://api.provider.com/send",
    "method": "POST",
    "headers": { /* headers */ },
    "data": { /* request body */ }
  }
}
```

Use `${target}` placeholder for dynamic phone number substitution.


## 🔒 Security Considerations

- CORS headers are set for API requests
- Input validation for phone numbers (10-digit requirement)
- Method validation (GET only)
- Error handling for invalid requests

