# PayTM Client Application

A modern, elegant money transfer application built with React, TypeScript, and Tailwind CSS. This application provides a seamless user experience for managing accounts, viewing balances, and transferring money between users.

## ✨ Features

### 🎨 **Modern UI/UX**

- **Glass Morphism Design** - Beautiful backdrop blur effects and transparency
- **Smooth Animations** - Elegant transitions and hover effects
- **Responsive Layout** - Works perfectly on all device sizes
- **Tailwind CSS** - Utility-first CSS framework for rapid development

### 🔐 **Authentication & Security**

- **JWT Token Authentication** - Secure user sessions
- **Protected Routes** - Secure access to dashboard and transfer features
- **Local Storage Management** - Persistent user sessions

### 💰 **Core Functionality**

- **User Dashboard** - Overview of account balance and user list
- **Money Transfer** - Secure peer-to-peer money transfers
- **User Management** - View all registered users
- **Real-time Balance** - Live account balance display

### 🚀 **Technical Features**

- **TypeScript** - Full type safety and better development experience
- **React Router** - Client-side routing with navigation state
- **Axios** - HTTP client for API communication
- **Component Architecture** - Reusable, modular components

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **State Management:** React Hooks (useState, useEffect)
- **Package Manager:** npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppBar.tsx      # Navigation header with user info
│   ├── Balance.tsx     # Account balance display
│   ├── Button.tsx      # Reusable button component
│   ├── Heading.tsx     # Page headings
│   ├── InputBox.tsx    # Form input fields
│   ├── SendMoney.tsx   # Money transfer interface
│   ├── SubHeading.tsx  # Subtitle text
│   ├── Users.tsx       # User list and management
│   └── BottomWarning.tsx # Bottom navigation links
├── pages/              # Main application pages
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Signin.tsx      # User sign-in
│   └── Signup.tsx      # User registration
├── config.ts           # Backend API configuration
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd paytm-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure backend URL**
   Edit `src/config.ts`:

   ```typescript
   export const BACKEND_URL = "http://localhost:8000"; // Your backend URL
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Backend API Endpoints

The application expects these backend endpoints:

- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User authentication
- `GET /api/v1/user/bulk` - Fetch all users
- `POST /api/v1/account/transfer` - Money transfer

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BACKEND_URL=http://localhost:8000
```

## 📱 Usage

### 1. **User Registration**

- Navigate to the signup page
- Fill in your details (First Name, Last Name, Email, Password)
- Create your account

### 2. **User Authentication**

- Sign in with your email and password
- JWT token is stored in localStorage for session management

### 3. **Dashboard**

- View your account balance
- See the list of all registered users
- Navigate to different sections

### 4. **Money Transfer**

- Click "Send Money" on any user
- Enter the amount you want to transfer
- Confirm the transfer
- Real-time balance updates

## 🎨 UI Components

### **Glass Morphism Cards**

- Semi-transparent backgrounds with backdrop blur
- Subtle borders and shadows
- Smooth hover animations

### **Gradient Backgrounds**

- Elegant color transitions
- Animated floating elements
- Responsive design patterns

### **Interactive Elements**

- Hover effects on buttons and cards
- Smooth transitions and transforms
- Loading states and error handling

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Protected Routes** - Unauthorized access prevention
- **Input Validation** - Client-side form validation
- **Secure API Calls** - Authorization headers on all requests

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first CSS framework
- **React Team** for the incredible frontend library
- **Vite** for the fast build tool
- **TypeScript** for type safety

## 📞 Support

If you have any questions or need help:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
