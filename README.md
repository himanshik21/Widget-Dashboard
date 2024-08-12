# Widget Dashboard

The Widget Dashboard is a responsive and dynamic web application designed to allow users to manage and organize widgets within different categories. The project is built using modern web development technologies like React, Redux, and Tailwind CSS, which together provide a smooth and efficient user experience.

## Key Features:
1.Add Widgets: Users can add new widgets to specific categories using an intuitive modal interface. Each widget can have a unique name and content, and is stored under a selected category.

2.Search Widgets: The dashboard includes a search functionality that allows users to quickly find widgets by name or content across all categories.

3.Categorized Widget Management: Widgets are grouped into categories, making it easier to organize and manage them. Each category displays its own set of widgets.

4.Remove Widgets: Users can easily remove widgets from any category, providing flexibility in managing the dashboard content.

5.Responsive Design: The application is fully responsive, ensuring that the interface works well on various screen sizes, including mobile devices.

6.Local Storage Persistence: The application leverages local storage to ensure that added widgets are not lost when the page is refreshed, providing a seamless user experience.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) 

## Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/himanshik21/Widget-Dashboard.git

###Navigate to the Project Directory
cd Widget-Dashboard

###Install Dependencies
npm install

###Running the Project
After installing the dependencies, you can run the project locally using the following command:
npm run dev

###Build the Project
To build the project for production, use the following command:
npm run build


###Project Structure

├── src
│   ├── components  # Reusable components
│   ├── redux-store # Redux actions, reducers, and store configuration
│   ├── assets      # Static assets (images, fonts, etc.)
│   ├── App.jsx     # Main application component
│   ├── index.jsx   # Entry point of the application
│   └── ...
├── public          # Public files that can be directly served
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── vite.config.js     # Vite configuration
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation


## Technologies Used
1.React: A JavaScript library for building user interfaces.
2.Vite: A fast build tool for modern web projects.
3.React-Redux: A predictable state container for JavaScript apps.
4.Tailwind CSS: A utility-first CSS framework for rapid UI development.

###Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.
