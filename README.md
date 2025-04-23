# Pro Portal Flagging Tool

This project is a web application that allows users to evaluate and flag specific entries from a data portal using a simple frontend built with AngularJS and PrimeNG. It supports user actions such as evaluating data, marking flags, overriding flags, and tracking feedback.

## Project Structure

```
pro-portal-flagging/
├── backend/
│   ├── server.js
│   └── routes/
│       └── evaluate.js
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── app/
│       ├── app.js
│       ├── controllers/
│       │   └── mainController.js
│       └── services/
│           └── evaluateService.js
├── .gitignore
├── README.md
└── package.json
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:fiyinfoluwa-sys/pro-portal-flagging.git
cd pro-portal-flagging
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Run the Backend Server

```bash
node server.js
```

### 4. Open Frontend

Open `frontend/index.html` in your browser.

Note: Ensure the backend server is running before testing the frontend.

## Technologies Used

- AngularJS
- PrimeNG
- Node.js
- Express

## Features

- Submit entries for evaluation
- Flag entries for review
- Override and acknowledge flags
- Save evaluations in localStorage
- Communicate with backend via `$http.post`

## Future Improvements

- Add user authentication
- Use a database for storing flags
- Enable export/download of flagged results

## Author

Fiyinfoluwa Oyewole  
fiyinfoluwaoyewole@gmail.com  
GitHub: [https://github.com/fiyinfoluwa-sys](https://github.com/fiyinfoluwa-sys)


