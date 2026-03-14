# Rage CAPTCHA – Dumbathon Project

A chaotic CAPTCHA system designed to frustrate bots and test human observation.
This project contains multiple annoying CAPTCHA levels followed by a **Friction Log journal system**.

## Features

* **Level 1 – Numeric Rage CAPTCHA**

  * Four stages with increasing difficulty
  * Visual size tricks
  * Logical digit-sum puzzle

* **Level 2 – Click the Unclickable Button**

  * Misaligned buttons
  * Random movement and shaking
  * Fake disabled button as the correct answer

* **Level 3 – Moving CAPTCHA**

  * Multiple "Verify" buttons with different behaviors
  * Only one button behaves differently (slows down near cursor)

* **Friction Log Page**

  * Allows users to log annoying updates
  * Includes a timer-based "Still Alive" challenge

## Project Structure

```
captcha
│
├── index.html
├── main.js
├── style.css
│
├── journal.html
├── journal.css
├── journal.js
│
└── levels
    ├── level1.js
    ├── level2.js
    └── level3.js
```

## How to Download and Run

### Option 1 – Download ZIP

1. Go to the GitHub repository page.
2. Click **Code**.
3. Select **Download ZIP**.
4. Extract the ZIP file.
5. Open the extracted folder.
6. Double-click **index.html** to start the CAPTCHA.

### Option 2 – Clone Using Git

If Git is installed:

```
git clone https://github.com/Harshi-1687/rage-captcha-dumbathon.git
```

Then open the project folder and run:

```
index.html
```

## Running with Live Server (Recommended)

If using VS Code:

1. Install the **Live Server extension**.
2. Open the project folder.
3. Right-click **index.html**.
4. Click **Open with Live Server**.

This prevents path issues and ensures all levels load correctly.

## Technologies Used

* HTML
* CSS
* JavaScript

## Project Purpose

This project was built for **Dumbathon**, focusing on intentionally frustrating UI/UX patterns to simulate rage-inducing CAPTCHA systems while still being solvable by humans.

---

**Author:** Harshi
**Event:** Dumbathon Hackathon
