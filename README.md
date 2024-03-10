# MERN REST(CRUD) API with JWT Authentication

This is a MERN (MongoDB, Express.js, React.js, Node.js) stack API with JWT (JSON Web Token) authentication. It allows users to register, log in, and perform CRUD operations on posts.

## Description
This API provides a collection of informative and educational posts authored by Atharva lakhamade, covering various topics in software development. From best practices in code refactoring and unit testing to introductions to RESTful APIs and asynchronous programming in JavaScript, each post offers valuable insights and guidance for developers. The API is a valuable resource for both beginner and experienced developers looking to enhance their skills, learn new concepts, and stay updated with the latest trends in software development.

## Reasons to Use the API
- **Educational Content:** The API offers educational content on a range of software development topics, making it ideal for developers looking to expand their knowledge.
- **Best Practices:** The posts cover best practices in software development, helping developers write cleaner, more efficient code.
- **Stay Updated:** By accessing the API, developers can stay updated with the latest trends and technologies in the software development industry.
- **Practical Guidance:** The posts offer practical guidance and examples, making complex concepts easier to understand and implement.
- **Authoritative Source:** Authored by Atharva lakhamade, a knowledgeable and experienced developer, the API provides reliable and authoritative information on software development topics.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Joi for input validation

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repository.git
   ```

2. Install dependencies:
   ```
   cd your-repository
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory of your project with the following variables:
   ```
   DB_CONNECT=mongodb://your-mongodb-uri
   TOKEN_SECRET=your-secret-key
   ```

4. Start the server:
   ```
   npm start
   ```

5. Access the API:
   You can now access the API at `[http://localhost:3000](https://postsmernapi.onrender.com)`.

## API Endpoints

- **POST /api/user/register**: Register a new user.
  - Request Body: `{ "name": "Your Name", "email": "your@email.com", "password": "yourpassword" }`
- **POST /api/user/login**: Login with existing credentials.
  - Request Body: `{ "email": "your@email.com", "password": "yourpassword" }`
- **GET /posts**: Get all posts.
- **POST /posts**: Create a new post.
  - Request Body: `{ "title": "Post Title", "content": "Post Content", "author": "Post Author", "imageUrl": "Image URL" }`
- **GET /posts/:postId**: Get a specific post by ID.
- **PATCH /posts/:postId**: Update a specific post by ID.
  - Request Body: `{ "title": "New Title", "content": "New Content" }`
- **DELETE /posts/:postId**: Delete a specific post by ID.

## Testing with Postman
You can test the API endpoints using Postman. Follow these steps to get started:

1. **Register a User:**
   - Send a POST request to `/api/user/register` with the following JSON body:
     ```
     {
       "name": "Your Name",
       "email": "your@email.com",
       "password": "yourpassword"
     }
     ```
   - You should receive a response with a success message and a user ID.

2. **Login:**
   - Send a POST request to `/api/user/login` with the following JSON body:
     ```
     {
       "email": "your@email.com",
       "password": "yourpassword"
     }
     ```
   - You should receive a response with a JWT token in the `auth-token` header.

3. **Access Protected Routes:**
   - For routes that require authentication, add the JWT token received from the login response to the `auth-token` header of your requests.

4. **CRUD Operations on Posts:**
   - Use the following endpoints for CRUD operations on posts:
     - `GET /posts`: Get all posts.
     - `POST /posts`: Create a new post.
       ```
       {
         "title": "Post Title",
         "content": "Post Content",
         "author": "Post Author",
         "imageUrl": "Image URL"
       }
       ```
     - `GET /posts/:postId`: Get a specific post by ID.
     - `PATCH /posts/:postId`: Update a specific post by ID.
       ```
       {
         "title": "New Title",
         "content": "New Content"
       }
       ```
     - `DELETE /posts/:postId`: Delete a specific post by ID.


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
