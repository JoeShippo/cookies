
# Cookie's Auto - Mobile Mechanic Service Website

Cookie's Auto is a web application designed to provide a seamless booking experience for mobile mechanic services. This site offers an intuitive and responsive design with a modern interface, allowing customers to easily learn about services and book appointments.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo
![Cookie's Auto Demo Screenshot](./screenshots/demo.png) <!-- Replace with an actual screenshot path if available -->

## Features
- Responsive design optimized for mobile and desktop
- Smooth scrolling navigation for easy access to different sections
- Appointment booking form with name and email input
- Contact information with clickable phone link
- PWA (Progressive Web App) ready with offline capabilities

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cookies-auto.git
   ```
   
2. **Navigate to the project directory:**
   ```bash
   cd cookies-auto
   ```

3. **Install dependencies:**
   Ensure you have Node.js installed. Then, install the necessary packages.
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   The site should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

- **Navigation:** Click the navigation links or use the "Contact Us" button to navigate smoothly to various sections.
- **Booking Form:** Users can enter their name and email and click "Book appointment" to submit a booking.
- **Contact Info:** Users can call the business directly by clicking the phone link in the contact section.

## Folder Structure

```
cookies-auto/
├── public/
│   ├── index.html           # Main HTML template
│   ├── manifest.json        # Web app manifest for PWA
│   ├── favicon.ico          # Favicon icon
│   ├── logo192.png          # Icon for PWA
│   └── logo512.png          # Icon for PWA
└── src/
    ├── components/
    │   ├── Hero.js          # Main hero component with booking form
    │   ├── Contact.js       # Contact section component
    │   └── Navbar.js        # Navigation bar component
    ├── App.js               # Root component
    ├── index.js             # Entry point
    └── App.css              # Global styles
```

## Technologies Used
- **React** - A JavaScript library for building user interfaces
- **React Router** - For navigation between different sections
- **Tailwind CSS** - Utility-first CSS framework for styling
- **react-scroll** - Smooth scrolling effect for anchor links
- **PWA Support** - Progressive Web App configuration for offline capabilities

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any changes or improvements.

## License
This project is licensed under the MIT License.
