# ACBM Client

A Next.js website for the ACBM - Global Mentor Academy. This application serves as the frontend for ACBM, providing information about the organization, its pillars, and enabling user interaction through contact forms and pre-registration.

## Description

The ACBM Client is a modern web application built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/). It is designed to offer a seamless user experience for visitors to learn about ACBM's holistic growth strategies, which integrate Academic, Corporate, Business, and Mentor expertise. The site includes features for user engagement, such as a contact form and a student pre-registration portal, communicating with a backend server.

## Features

- **Responsive Design**: Built with Bootstrap and custom CSS to ensure usability across devices.
- **Informative Sections**: Detailed sections for Home, About Us, Our Pillars (Academics, Corporate, Business, Mentor), and more.
- **Contact Form**: Integrated form for users to send inquiries directly.
- **Pre-Registration**: Portal for students to pre-register for courses, with validation and backend integration.
- **Firebase Integration**: Configured for Firebase services (Analytics, Auth, Firestore).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/), Custom CSS, [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Backend Service**: Firebase (Analytics, Auth, Firestore)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: Version 16 or higher.
- **npm**: Node Package Manager.

### Installing

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure Environment Variables:
    Create a `.env.local` file in the root directory and add your Firebase and other configuration keys:
    ```env
    NEXT_PUBLIC_APIKEY=your_api_key
    NEXT_PUBLIC_AUTHDOMAIN=your_auth_domain
    NEXT_PUBLIC_PROJECTID=your_project_id
    NEXT_PUBLIC_STORAGEBUCKET=your_storage_bucket
    NEXT_PUBLIC_MESSAGINGSENDERID=your_messaging_sender_id
    NEXT_PUBLIC_APPID=your_app_id
    NEXT_PUBLIC_MEASUREMENTID=your_measurement_id
    ```

### Executing program

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build for production:

```bash
npm run build
npm start
```

## Project Structure

```
├── Components/       # Reusable React components
│   ├── footer/       # Footer component
│   ├── header/       # Header/Navigation component
│   └── home/         # Homepage specific components (About, Hero, etc.)
├── pages/            # Next.js pages
│   ├── _app.js       # Main application wrapper
│   ├── contact.js    # Contact Us page
│   ├── index.js      # Homepage
│   └── pre-register.js # Student pre-registration page
├── public/           # Static assets (images, css)
├── firebase.js       # Firebase configuration
└── package.json      # Project dependencies and scripts
```
