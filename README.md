# DevSnippetsAPI

This is a MERN (MongoDB, Express.js, React.js, Node.js) stack RESTAPI with JWT (JSON Web Token) authentication. It allows users to register, log in, and perform CRUD operations on posts.

## Description
This API provides a collection of informative and educational posts authored by Atharva lakhamade, covering various topics in software development. From best practices in code refactoring and unit testing to introductions to RESTful APIs and asynchronous programming in JavaScript, each post offers valuable insights and guidance for developers. The API is a valuable resource for both beginner and experienced developers looking to enhance their skills, learn new concepts, and stay updated with the latest trends in software development.

## API Endpoints

- **POST /api/user/register**: Register a new user.
  - Request Body: `{ "name": "Your Name", "email": "your@email.com", "password": "yourpassword" }`
- **POST /api/user/login**: Login with existing credentials.
  - Request Body: `{ "email": "your@email.com", "password": "yourpassword" }`
- **GET /posts**: Get all posts.
![All posts](https://github.com/atha2810/PostsMernAPI/blob/main/Allposts.png?raw=true)
- **POST /posts**: Create a new post.
  - Request Body: `{ "title": "Post Title", "content": "Post Content", "author": "Post Author", "imageUrl": "Image URL" }`
- **GET /posts/:postId**: Get a specific post by ID.
- ![Specific post by ID](https://github.com/atha2810/PostsMernAPI/blob/main/postbyID.png?raw=true)
- **PATCH /posts/:postId**: Update a specific post by ID.
  - Request Body: `{ "title": "New Title", "content": "New Content" }`
- **DELETE /posts/:postId**: Delete a specific post by ID.

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
   You can now access the API at `https://postsmernapi.onrender.com`.



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

### Use of Tokens with Postman or API Testing App

1. **Get a Token**: Obtain a token through your API's authentication process (e.g., login or registration).

2. **Set the Token in Headers**: Copy the token value and set it in the headers of your API request. In Postman, add a header with key `auth-token` and the token value.

3. **Access Protected Routes**: Send your request to a protected route that uses the provided middleware function. The middleware will verify the token and allow access if it's valid. If the token is invalid or missing, it will return an error message.

**Steps:**
- **Step 1**: Obtain a token through your authentication process.
- **Step 2**: Copy the token value.
- **Step 3**: Open Postman or your API testing app.
- **Step 4**: Create a new request and select the appropriate HTTP method.
- **Step 5**: Set the request URL to a protected route that uses the middleware.
- **Step 6**: Add a new header with key `auth-token` and the token value as the header value.
- **Step 7**: Send the request.

If the token is valid, the request will be processed, and you'll receive the response from the API. If the token is invalid or missing, you'll receive an "Access denied" or "Invalid token" error message.
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
