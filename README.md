# Form Validation with JavaScript and Bootstrap

This project is a web-based form validation example built using **HTML**, **CSS (Bootstrap)**, and **JavaScript**. The form includes fields such as **Full Name**, **Email**, **Phone Number**, **Password**, and **Confirm Password**, with custom validation rules implemented for each field.

## Features

- **Full Name Validation**: Ensures a valid first and last name, optionally including hyphens or apostrophes.
- **Email Validation**: Validates email format (e.g., `name@example.com`).
- **Phone Number Validation**: Checks for a valid 10-digit phone number.
- **Password Validation**:
  - Password must not be `"password"` or the user’s name.
  - Requires at least one digit and a special character from `@`, `#`, `$`, `*`, or `!`.
  - Passwords must be at least 8 characters long.
- **Password Confirmation**: Checks if the confirmation matches the password.

## How to Access the Project

### Netlify Deployment

If deployed on **Netlify**, access the live version through the following link:  
[Netlify Link Here](https://formvalidationplasmid.netlify.app/)

---

## Running the Project Locally

### Prerequisites

Make sure you have **Node.js** installed on your machine.

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Gojou-Satoru-8/FormValidation
   cd form-validation
   ```

2. **Install Parcel (Optional):**
   If you want to use **Parcel** for local development:

   ```bash
   npm install -g parcel-bundler
   ```

3. **Run Locally with Parcel:**

   ```bash
   parcel index.html
   ```

4. **Or Use `live-server`:**
   Install `live-server` globally if not already installed:
   ```bash
   npm install -g live-server
   ```
   Run the project:
   ```bash
   live-server
   ```

---

## Usage

1. Open the form in your browser.
2. Fill in the required fields.
3. Submit the form to see validation results. Invalid fields will display error messages, while valid fields will be highlighted in green.

---

## Folder Structure

```
/form-validation
│
├── index.html     # Main HTML file
├── style.css      # Custom CSS for layout and styling
├── script.js      # JavaScript for form validation logic
└── README.md      # Project documentation
```

---

## Technologies Used

- **HTML5**
- **CSS3** (Bootstrap 5)
- **JavaScript (ES6)**

---
