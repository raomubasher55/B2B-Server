# API Documentation

## User Routes

### Register User
- **Endpoint:** `/api/v1/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request:**
    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "password123",
        "mobile": "1234567890",
        "image": "path/to/image.jpg"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Please check your email and verify your account."
    }
    ```

### Login User
- **Endpoint:** `/api/v1/login`
- **Method:** `POST`
- **Description:** Login an existing user.
- **Request:**
    ```json
    {
        "email": "john.doe@example.com",
        "password": "password123"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "message": "You logged in successfully",
        "user": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "mobile": "1234567890",
            "level": "E-Commerce",
            "score": 100,
            "package": "Starter",
            "paymentStatus": "unpaid",
            "isVerified": 1
        },
        "accessToken": "your_jwt_token",
        "tokenType": "Bearer"
    }
    ```

### Verify Email
- **Endpoint:** `/api/v1/verify-email`
- **Method:** `GET`
- **Description:** Verify user's email.
- **Request:**
    ```json
    {
        "token": "verification_token"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Email verified successfully"
    }
    ```

### User Profile
- **Endpoint:** `/api/v1/profile`
- **Method:** `GET`
- **Description:** Get user profile data.
- **Request:** `None`
- **Response:**
    ```json
    {
        "success": true,
        "message": "User Profile Data",
        "data": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "mobile": "1234567890",
            "level": "E-Commerce",
            "score": 100,
            "package": "Starter",
            "paymentStatus": "unpaid",
            "isVerified": 1
        }
    }
    ```

### Update User Profile
- **Endpoint:** `/api/v1/updateprofile`
- **Method:** `POST`
- **Description:** Update user profile data.
- **Request:**
    ```json
    {
        "name": "John Doe",
        "mobile": "1234567890",
        "image": "path/to/new/image.jpg"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Profile updated successfully",
        "user": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "mobile": "1234567890",
            "image": "path/to/new/image.jpg"
        }
    }
    ```

### Logout User
- **Endpoint:** `/api/v1/logout`
- **Method:** `GET`
- **Description:** Logout the user.
- **Request:** `None`
- **Response:**
    ```json
    {
        "message": "Logged out successfully"
    }
    ```

## Auth Routes

### Google Authentication
- **Endpoint:** `/api/v1/google`
- **Method:** `GET`
- **Description:** Initiate Google authentication.
- **Request:** `None`
- **Response:** Redirects to Google authentication page.

### Google Authentication Callback
- **Endpoint:** `/api/v1/google/callback`
- **Method:** `GET`
- **Description:** Google authentication callback.
- **Request:** `None`
- **Response:** Redirects to the dashboard on successful login.

### KPI Data
- **Endpoint:** `/api/v1/kpi-data`
- **Method:** `GET`
- **Description:** Get user KPI data.
- **Request:** `None`
- **Response:**
    ```json
    {
        "success": true,
        "message": "User Level Data",
        "level": "E-Commerce",
        "score": 100,
        "package": "Starter",
        "paymentStatus": "unpaid"
    }
    ```

### Update User Level
- **Endpoint:** `/api/v1/update-level`
- **Method:** `PUT`
- **Description:** Update user level.
- **Request:**
    ```json
    {
        "level": "Consignment"
    }
    ```
- **Response:**
    ```json
    {
        "message": "User level updated successfully.",
        "user": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "level": "Consignment"
        }
    }
    ```

### Update User Score
- **Endpoint:** `/api/v1/update-score`
- **Method:** `PUT`
- **Description:** Update user score.
- **Request:**
    ```json
    {
        "score": 150
    }
    ```
- **Response:**
    ```json
    {
        "message": "User score updated successfully.",
        "user": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "score": 150
        }
    }
    ```

### Handle Payment and Update
- **Endpoint:** `/api/v1/payment`
- **Method:** `POST`
- **Description:** Handle user payment and update package.
- **Request:**
    ```json
    {
        "package": "Growth",
        "paymentMethodId": "payment_method_id"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Payment processed and package updated successfully.",
        "user": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "package": "Growth",
            "paymentStatus": "paid"
        }
    }
    ```
