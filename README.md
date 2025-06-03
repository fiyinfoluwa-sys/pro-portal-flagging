# Pro Portal Flagging Tool

This web application was developed as part of a technical assessment for a potential internship at Touchstone Institute. The tool allows users to review entries from a data portal and flag them based on specific evaluation criteria.

Built with AngularJS and PrimeNG, the application includes the following key features:
- ✅ Flag and evaluate individual data entries
- 🔄 Override or update existing flags
- 📝 Submit user feedback linked to flagged entries

The tool streamlines the review process and supports better data quality control through user-driven feedback.

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


