# Event Locator Backend

Backend API for managing events and users. Built with Node.js, PostgreSQL, and Sequelize.

## Technologies Used

- **Node.js** – Fast, scalable server runtime.
- **Express.js** – Minimal web framework for routing and middleware.
- **PostgreSQL** – Reliable, feature-rich relational database.
- **Sequelize ORM** – Handles models, migrations, and database queries.
- **Dotenv** – Loads environment variables from `.env` files.
- **Sequelize CLI** – Manages project structure, migrations, and seeds.


---

##  Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Mbuldo/Event_locator_backend.git
cd Event_locator_backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Run migrations and seeds
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Start development server
npm run dev
