# English Proficiency### 📁 **Result Management**
- Results automatically saved to browser storage
- Direct download of results as JSON files
- No personal information collection requiredt System

A comprehensive web-based English proficiency testing application with three difficulty levels: Beginner, Elementary, and Advanced.

## Features

### 🎯 **Three Test Levels**
- **Beginner**: Basic grammar and vocabulary (30 questions, 20 minutes)
- **Elementary**: Pre-intermediate level (105 questions, 45 minutes)  
- **Advanced**: Advanced grammar and complex vocabulary (50 questions, 60 minutes)

### ⏱️ **Timer System**
- Each test has a specific time limit
- Visual timer countdown
- Automatic submission when time expires

### 📊 **Progress Tracking**
- Real-time progress bar
- Visual feedback for completed questions
- Auto-save functionality (saves answers every 30 seconds)

### 👤 **Student Information Collection**
- Collects student name, email, ID, and institution
- Saves results to browser storage
- Individual result download as JSON file

### 📱 **Responsive Design**
- Works on desktop, tablet, and mobile devices
- Clean, modern interface
- Easy navigation between levels

## File Structure

```
Supernova/
├── index.html              # Main landing page
├── styles/
│   ├── main.css            # Home page styles
│   └── test.css            # Test page styles
├── scripts/
│   ├── main.js             # Main navigation logic
│   ├── test-common.js      # Common test functionality
│   ├── beginner-test.js    # Beginner test logic
│   ├── elementary-test.js  # Elementary test logic
│   └── advanced-test.js    # Advanced test logic
└── levels/
    ├── beginner.html       # Beginner level test
    ├── elementary.html     # Elementary level test
    └── advanced.html       # Advanced level test
```

## How to Use

### For Students:
1. Open `index.html` in a web browser
2. Choose your test level (Beginner/Elementary/Advanced)
3. Complete the test within the time limit
4. Submit your answers
5. Download your results immediately

### For Teachers/Administrators:
1. Results are automatically saved in the browser's localStorage
2. Students can download their individual results as JSON files
3. Access stored results through browser developer tools or by implementing an admin panel

## Running the Application

### Method 1: Direct File Opening
Simply open `index.html` in any modern web browser.

### Method 2: Local Web Server (Recommended)
```bash
# Navigate to the project directory
cd path/to/Supernova

# Start a local server (Python 3)
python -m http.server 8000

# Or using Node.js
npx serve

# Then open http://localhost:8000 in your browser
```

## Test Content

### Beginner Level (30 points)
- **Grammar (15 questions)**: Basic tenses, articles, pronouns
- **Vocabulary (15 questions)**: Common words, opposites, basic concepts

### Elementary Level (105 points)  
- **Grammar (40 questions)**: Present/past tenses, conditionals, passive voice
- **Vocabulary (40 questions)**: Odd one out, sentence completion, opposites
- **Reading (15 questions)**: Comprehension questions
- **Listening (10 questions)**: True/false and matching exercises

### Advanced Level (50 points)
- **Advanced Grammar (25 questions)**: Complex conditionals, subjunctive mood, advanced structures
- **Advanced Vocabulary (25 questions)**: Sophisticated words, nuances, academic vocabulary

## Data Storage

### Browser Storage
- Test results are stored in `localStorage`
- Auto-saved answers during test taking
- Persistent across browser sessions

### Data Format
Results are saved as JSON with the following structure:
```json
{
  "testResults": {
    "level": "beginner|elementary|advanced",
    "score": 25,
    "totalQuestions": 30,
    "answers": {...},
    "timeSpent": 1200,
    "completedAt": "2025-10-06T10:30:00.000Z"
  },
  "exportDate": "2025-10-06T10:30:00.000Z"
}
```

## Customization

### Adding Questions
1. Edit the HTML files in the `levels/` directory
2. Update the answer keys in the corresponding JavaScript files
3. Follow the existing question format

### Styling
- Modify `styles/main.css` for the home page
- Modify `styles/test.css` for test pages
- Colors, fonts, and layouts can be customized easily

### Timing
- Update the timer initialization in each test's JavaScript file
- Times are set in minutes: `initializeTimer(minutes)`

## Browser Compatibility
- Chrome 60+
- Firefox 60+  
- Safari 12+
- Edge 79+

## Security Notes
- All data is stored locally in the browser
- No server-side data transmission
- Results are only accessible from the same browser/device
- Consider implementing server-side storage for production use

## Troubleshooting

### Common Issues:
1. **Timer not working**: Ensure JavaScript is enabled
2. **Styles not loading**: Check file paths and case sensitivity
3. **Results not saving**: Check browser localStorage permissions
4. **Questions not displaying**: Verify HTML file integrity

### Browser Developer Tools:
- Press F12 to access developer tools
- Check Console tab for JavaScript errors
- Use Application/Storage tab to view localStorage data

## Future Enhancements
- Server-side data storage
- Teacher dashboard for result management
- More question types (drag-and-drop, audio)
- Detailed analytics and reporting
- Multi-language support
- Integration with Learning Management Systems (LMS)

---

**Note**: This is a client-side application. For production use in educational institutions, consider implementing server-side storage and user authentication.