# Fugitive Capture Simulation Game

## Overview

The **Fugitive Capture Simulation Game** is a fun and interactive web application where three cops must capture a notorious fugitive who has escaped to one of five neighboring cities. The cops must select a city to investigate and a vehicle based on the available range. The goal is to determine which cop, if any, captures the fugitive. The entire game runs in a simulated environment with real-time calculations for city selection, vehicle choice, and the capture attempt.

The project utilizes **Next.js 14**, **Prisma ORM**, **PostgreSQL** for the database, **React Hook Form** and **Zod** for form validation, and **Jest** and **Playwright** for testing.

### Key Features
- **City Selection**: Each cop independently selects one of five cities to investigate.
- **Vehicle Selection**: Based on the city distance, each cop selects a vehicle with an adequate range for a round trip.
- **Result Display**: The system randomly simulates the fugitive's location and determines if any cop catches the fugitive based on their selections.
- **Real-Time Gameplay**: The game is entirely interactive, with real-time city and vehicle selection, and instant feedback on the result.

## Technologies Used

- **Next.js 14** (with TypeScript) for building the frontend and server-side components
- **Prisma ORM** for interacting with the database and managing CRUD operations
- **PostgreSQL** for storing city, vehicle, and cop data in a relational database
- **React Hook Form** for managing form state and validation
- **Zod** for schema-based validation in conjunction with React Hook Form
- **Jest** for unit testing the core logic
- **Playwright** for end-to-end testing the entire flow
- **Vercel** for hosting and deploying the application

## Project Structure

### Frontend

- **Pages**: 
  - `pages/index.tsx`: Landing page with the game introduction and start button.
  - `pages/select-city.tsx`: Allows the cop to choose the city to investigate.
  - `pages/select-vehicle.tsx`: Allows the cop to select a vehicle based on the city they chose.
  - `pages/result.tsx`: Displays the result of the game, showing if any cop caught the fugitive.

- **Components**:
  - `SelectCity.tsx`: Component for selecting a city.
  - `SelectVehicle.tsx`: Component for selecting a vehicle.

- **Styles**: 
  - CSS or Tailwind for styling pages and components to be responsive and provide a smooth user experience.

### Backend

- **API Routes**: 
  - `pages/api/cities.ts`: Handles operations related to cities (e.g., creating cities, fetching city data).
  - `pages/api/vehiclests`: Handles vehicle data (CRUD operations for vehicles).
  - `pages/api/cops.ts`: Handles cop-related data and the logic for randomly selecting cities and vehicles for cops.
  - `pages/api/fugitive.ts`: Simulates the fugitive’s location and determines if a cop has successfully captured the fugitive.
  
- **Prisma ORM**:
  - Prisma is used to interact with the PostgreSQL database to store cities, vehicles, cops, and the results of the fugitive's capture attempts.

## Installation

### 1. Clone the Repository

To start working with the project, clone the repository:

```bash
git clone https://github.com/your-username/fugitive-capture-simulation.git
cd fugitive-capture-simulation
