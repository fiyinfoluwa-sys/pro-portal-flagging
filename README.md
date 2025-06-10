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

- Submit entries for evaluation through an intuitive interface.
- Flag entries that require further review.
- Override and acknowledge existing flags with reasoning.
- Save evaluations locally using `localStorage`.
- Communicate with backend via `$http.post` for data handling.

## Future Improvements

- Integrate user authentication for personalized sessions.
- Replace `localStorage` with a database for persistent flag storage.
- Add functionality to export or download flagged results as a file (e.g., CSV or JSON).

## Author

Fiyinfoluwa Oyewole  
fiyinfoluwaoyewole@gmail.com  



