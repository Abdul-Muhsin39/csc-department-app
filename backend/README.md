# Backend for Messages Application

This backend application is designed to handle messages sent by users in the app. It utilizes Supabase as the database to store and retrieve messages.

## Project Structure

```
backend
├── src
│   ├── index.ts                # Entry point of the application
│   ├── controllers
│   │   └── messagesController.ts # Handles message-related operations
│   ├── routes
│   │   └── messagesRoutes.ts    # Defines routes for message operations
│   ├── services
│   │   └── supabaseService.ts    # Interacts with Supabase database
│   └── types
│       └── message.ts            # Defines the structure of a message
├── package.json                  # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure Supabase:**
   - Create a Supabase project at [Supabase.io](https://supabase.io).
   - Set up a table for messages with appropriate fields (id, content, timestamp).
   - Update the Supabase connection details in `src/services/supabaseService.ts`.

4. **Run the application:**
   ```
   npm start
   ```

## Usage

- **Create a message:**
  Send a POST request to `/messages` with the message content in the request body.

- **Get messages:**
  Send a GET request to `/messages` to retrieve all saved messages.

## License

This project is licensed under the MIT License.