# ZentraTech
# Interest Messaging and Chat Application

This is a full-stack web application that allows users to send interest messages to other users. If the recipient accepts the interest, both users can chat with each other in real-time. The project utilizes Django for the backend and React for the frontend.

## Prerequisites and Dependencies

### Backend (Django)

- Python 3.8+
- Django 3.2+
- Django REST Framework 3.14+
- Django Channels (for WebSocket support)
- PostgreSQL (optional, based on your configuration)

### Frontend (React)

- Node.js 14+
- React 18+
- Axios for HTTP requests
- Material-UI for UI components
- WebSocket for real-time chat (React component using `socket.io-client`)


### How to Run the Application
Ensure both backend and frontend servers are running:

Backend server should be running on http://localhost:8000
Frontend server should be running on http://localhost:3000
Access the Application Open your browser and go to http://localhost:3000 to view the application.

Additional Information
API Endpoints:

User Authentication:
POST /api/token/ - Obtain auth token
POST /api/token/refresh/ - Refresh auth token
Interests:
GET /api/interests/ - List all interests
POST /api/interests/ - Create a new interest
Messages:
GET /api/messages/ - List all messages
POST /api/messages/ - Create a new message
Frontend Components:

Login - src/components/Login.js: Component for user login.
Register - src/components/Register.js: Component for user registration.
UserList - src/components/UserList.js: Component to display and interact with users.
Interests - src/components/Interests.js: Component for managing and viewing interest messages.
Chat - src/components/Chat.js: Component for real-time chat functionality.
Backend Views:

Interests - views.py: Handles listing and creating interests.
Messages - views.py: Handles listing and creating messages.
WebSocket Configuration:

Ensure that WebSocket settings and channels are properly configured in Django settings and React components for real-time communication.
Known Issues:

If you encounter CORS issues, ensure that the CORS_ALLOWED_ORIGINS setting in Django is properly configured to allow requests from the React frontend.
For WebSocket connectivity issues, verify that the WebSocket server and React client are properly connected.