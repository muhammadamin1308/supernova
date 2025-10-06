// Pre-Intermediate Level Test JavaScript

// Answer key for pre-intermediate test (100 questions)
const beginnerAnswerKey = {
    // Grammar Section 1: Complete sentences (16 points)
    q1: "is watching",
    q2: "isn't cleaned",
    q3: "used to have", 
    q4: "is going to look for",
    q5: "did find",
    q6: "didn't go",
    q7: "have been",
    q8: "had left",
    q9: "aren't listening",
    q10: "Have seen",
    q11: "met",
    q12: "have been",
    q13: "will snow",
    q14: "was cooking",
    q15: "had seen",
    q16: "is made",
    
    // Grammar Section 2: Complete with one word (10 points)
    q17: "much",
    q18: "won't",
    q19: "where",
    q20: "Neither",
    q21: "on",
    q22: "out",
    q23: "Although",
    q24: "to",
    q25: "will",
    q26: "yet",
    
    // Grammar Section 3: Choose correct words (14 points)
    q27: "must",
    q28: "best",
    q29: "more",
    q30: "too many",
    q31: "don't have to",
    q32: "enough",
    q33: "anything",
    q34: "should",
    q35: "might",
    q36: "more quickly",
    q37: "painted",
    q38: "told",
    q39: "Walking",
    q40: "wouldn't",
    
    // Vocabulary Section 1: Odd word out (5 points)
    q41: "dolphin",
    q42: "receipt",
    q43: "talkative",
    q44: "ironing",
    q45: "gloves",
    
    // Vocabulary Section 2: Complete sentences (14 points)
    q46: "told",
    q47: "had",
    q48: "nephew",
    q49: "through",
    q50: "empty",
    q51: "generous",
    q52: "on",
    q53: "forward",
    q54: "try",
    q55: "win",
    q56: "on",
    q57: "so",
    q58: "gets",
    q59: "very",
    
    // Vocabulary Section 3: Write opposites (6 points)
    q60: "lend",
    q61: "mean",
    q62: "boring",
    q63: "forget",
    q64: "lose",
    q65: "safe",
    
    // Vocabulary Section 4: Prepositions (8 points)
    q66: "into",
    q67: "on",
    q68: "for",
    q69: "about",
    q70: "with",
    q71: "for",
    q72: "to",
    q73: "at",
    
    // Vocabulary Section 5: Complete with one word (7 points)
    q74: "take",
    q75: "back",
    q76: "in",
    q77: "across",
    q78: "invite",
    q79: "go",
    q80: "make",
    
    // Pronunciation Section 1: Match sounds (10 points)
    q81: "hear",
    q82: "take",
    q83: "father",
    q84: "arms",
    q85: "church",
    q86: "learn",
    q87: "gym",
    q88: "job",
    q89: "museum",
    q90: "used",
    
    // Pronunciation Section 2: Stress syllables (10 points)
    q91: "no",
    q92: "noon",
    q93: "com",
    q94: "fer",
    q95: "buil",
    q96: "ver",
    q97: "li",
    q98: "jour",
    q99: "pro",
    q100: "bu"
};

// Alternative acceptable answers for text questions
const acceptableAnswers = {
    q1: ["is watching", "'s watching"],
    q2: ["isn't cleaned", "is not cleaned"],
    q3: ["used to have"],
    q4: ["is going to look for", "'s going to look for"],
    q5: ["did find"],
    q6: ["didn't go", "did not go"],
    q7: ["have been", "'ve been"],
    q8: ["had left", "'d left"],
    q9: ["aren't listening", "are not listening"],
    q10: ["Have seen", "Have you seen"],
    q11: ["met"],
    q12: ["have been", "have you been"],
    q13: ["will snow", "'ll snow", "is going to snow", "'s going to snow"],
    q14: ["was cooking"],
    q15: ["had seen", "'d seen"],
    q16: ["is made"],
    q17: ["much"],
    q18: ["won't", "will not"],
    q19: ["where"],
    q20: ["Neither", "neither"],
    q21: ["on"],
    q22: ["out"],
    q23: ["Although", "although"],
    q24: ["to"],
    q25: ["will"],
    q26: ["yet"],
    q60: ["lend"],
    q61: ["mean"],
    q62: ["boring"],
    q63: ["forget"],
    q64: ["lose"],
    q65: ["safe"],
    q66: ["into"],
    q67: ["on"],
    q68: ["for"],
    q69: ["about"],
    q70: ["with"],
    q71: ["for"],
    q72: ["to"],
    q73: ["at"],
    q74: ["take"],
    q75: ["back"],
    q76: ["in"],
    q77: ["across"],
    q78: ["invite"],
    q79: ["go"],
    q80: ["make"]
};

function submitTest() {
    if (testTimer) {
        clearInterval(testTimer);
    }
    
    let score = 0;
    let totalQuestions = 100;
    let results = [];
    
    for (let i = 1; i <= totalQuestions; i++) {
        const question = `q${i}`;
        const userAnswer = getUserAnswer(question);
        const correctAnswer = beginnerAnswerKey[question];
        
        let isCorrect = false;
        
        if (userAnswer) {
            // Check if it's a text input with multiple acceptable answers
            if (acceptableAnswers[question]) {
                isCorrect = acceptableAnswers[question].some(answer => 
                    userAnswer.toLowerCase().trim() === answer.toLowerCase()
                );
            } else {
                isCorrect = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase();
            }
            
            if (isCorrect) {
                score++;
                showFeedback(question, true, `Correct! Answer: ${correctAnswer}`);
            } else {
                showFeedback(question, false, `Incorrect. Correct answer: ${correctAnswer}`);
            }
            
            results.push({
                question: i,
                userAnswer: userAnswer,
                correctAnswer: correctAnswer,
                isCorrect: isCorrect
            });
        } else {
            showFeedback(question, false, `Not answered. Correct answer: ${correctAnswer}`);
            results.push({
                question: i,
                userAnswer: 'Not answered',
                correctAnswer: correctAnswer,
                isCorrect: false
            });
        }
    }
    
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let testResults = `
        <h3>Test Results</h3>
        <div class="score-summary">
            <p><strong>Score: ${score}/${totalQuestions}</strong></p>
            <p><strong>Percentage: ${percentage}%</strong></p>
        </div>
    `;
    
    const resultBox = document.getElementById('resultBox');
    resultBox.style.display = 'block';
    
    // Test data for storage
    const testData = {
        level: 'Pre-Intermediate',
        score: score,
        totalQuestions: totalQuestions,
        percentage: percentage,
        results: results,
        completedAt: new Date().toISOString()
    };
    
    // Save to localStorage automatically
    saveTestResults(testData);
    
    resultBox.innerHTML = testResults;
    
    // Store results for download
    window.testResultData = testData;
}

// Function to get user's answer for a question
function getUserAnswer(questionName) {
    // Try radio buttons first
    const radioButton = document.querySelector(`input[name="${questionName}"]:checked`);
    if (radioButton) {
        return radioButton.value;
    }
    
    // Try text input
    const textInput = document.querySelector(`input[name="${questionName}"][type="text"]`);
    if (textInput) {
        return textInput.value.trim();
    }
    
    return null;
}

// Function to show feedback
function showFeedback(questionName, isCorrect, message) {
    const feedbackElement = document.getElementById(`fb-${questionName}`);
    if (feedbackElement) {
        feedbackElement.innerHTML = message;
        feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackElement.style.display = 'block';
    }
}

// Initialize test
document.addEventListener('DOMContentLoaded', function() {
    // Clear any existing data for this test level
    clearAutoSavedAnswers();
    
    // Clear form on page load
    clearTestForm();
    
    // Initialize progress
    updateProgress();
    
    // Start timer (45 minutes = 2700 seconds)
    startTimer(2700);
    
    // Add input event listeners for progress tracking
    const inputs = document.querySelectorAll('input[type="radio"], input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('change', updateProgress);
        input.addEventListener('input', updateProgress);
    });
    
    // Auto-save functionality
    setInterval(autoSaveAnswers, 30000); // Auto-save every 30 seconds
    
    window.addEventListener('beforeunload', function(e) {
        if (getAllAnsweredQuestions().length > 0 && !isSubmitting) {
            // Clear auto-saved data when leaving without submitting
            clearAutoSavedAnswers();
            e.preventDefault();
            e.returnValue = '';
        }
    });
});

// Navigation cleanup
document.addEventListener('DOMContentLoaded', function() {
    // Clear data when navigating to home or other tests
    const homeLinks = document.querySelectorAll('a[href="../index.html"], a[href="index.html"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', function() {
            clearAutoSavedAnswers();
            clearTestForm();
        });
    });
});