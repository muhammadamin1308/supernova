// Pre-Intermediate Level Test JavaScript

// Helper function to normalize text for comparison
function normalizeText(text) {
    if (!text) return '';
    return text.toString().toLowerCase().trim();
}

// Answer key for pre-intermediate test (100 questions)
const preIntermediateAnswerKey = {
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
    q10: "Have you seen",
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
    q36: "quicker",
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
    q91: "op",
    q92: "noon",
    q93: "pu",
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
    q10: ["Have you seen", "Have seen"],
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
    
    let totalScore = 0;
    const maxScore = 100;
    
    // Clear previous feedback
    document.querySelectorAll('.feedback').forEach(e => e.innerHTML = '');
    
    // Grade all questions (q1-q100)
    for (let i = 1; i <= 100; i++) {
        const questionId = 'q' + i;
        gradePreIntermediateQuestion(questionId, preIntermediateAnswerKey, acceptableAnswers);
    }
    
    // Count correct answers
    totalScore = document.querySelectorAll('.feedback .correct').length;
    
    // Calculate percentage
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Determine grade level
    let grade, message;
    if (percentage >= 90) {
        grade = "Excellent! 🌟";
        message = "Outstanding performance! You're ready for intermediate level.";
    } else if (percentage >= 80) {
        grade = "Very Good! 👏";
        message = "Great job! You have a solid grasp of pre-intermediate English.";
    } else if (percentage >= 70) {
        grade = "Good! 👍";
        message = "Well done! Continue practicing to improve further.";
    } else if (percentage >= 60) {
        grade = "Fair 📚";
        message = "You're making progress. Focus on your weaker areas.";
    } else {
        grade = "Needs Improvement 📖";
        message = "Keep studying and practicing. Don't give up!";
    }
    
    const resultHTML = `
        <div style="text-align: center; padding: 20px;">
            <h3>${grade}</h3>
            <p><strong>Score: ${totalScore} / ${maxScore} (${percentage}%)</strong></p>
            <p>${message}</p>
        </div>
    `;
    
    // Show test results
    showTestResults(resultHTML);
    
    // Scroll to results
    const resultBox = document.getElementById('resultBox');
    if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.scrollIntoView({behavior: "smooth", block: "center"});
    }
}

function gradePreIntermediateQuestion(questionId, answerKey, acceptableAnswers) {
    const feedbackId = 'fb-' + questionId;
    const feedback = document.getElementById(feedbackId);
    if (!feedback) return;
    
    // Check if it's a radio button question
    const radios = document.getElementsByName(questionId);
    if (radios && radios.length > 0) {
        // Radio button question
        let answered = false;
        let userAnswer = '';
        
        for (let radio of radios) {
            if (radio.checked) {
                answered = true;
                userAnswer = radio.value;
                break;
            }
        }
        
        if (!answered) {
            feedback.innerHTML = '<span class="notanswered">⚠️ Not answered. Correct: ' + answerKey[questionId] + '</span>';
        } else {
            let isCorrect = false;
            
            // Check against acceptable answers if available
            if (acceptableAnswers[questionId]) {
                for (let acceptable of acceptableAnswers[questionId]) {
                    if (normalizeText(userAnswer) === normalizeText(acceptable)) {
                        isCorrect = true;
                        break;
                    }
                }
            } else {
                isCorrect = normalizeText(userAnswer) === normalizeText(answerKey[questionId]);
            }
            
            if (isCorrect) {
                feedback.innerHTML = '<span class="correct">✅ Correct</span>';
            } else {
                feedback.innerHTML = '<span class="wrong">❌ Wrong. Correct: ' + answerKey[questionId] + '</span>';
            }
        }
    } else {
        // Text input question
        const input = document.querySelector(`input[name="${questionId}"], input#${questionId}`);
        if (input) {
            const userAnswer = normalizeText(input.value);
            
            if (!userAnswer) {
                feedback.innerHTML = '<span class="notanswered">⚠️ Not answered. Correct: ' + answerKey[questionId] + '</span>';
            } else {
                let isCorrect = false;
                
                // Check against multiple acceptable answers if available
                if (acceptableAnswers[questionId]) {
                    for (let acceptable of acceptableAnswers[questionId]) {
                        if (userAnswer === normalizeText(acceptable)) {
                            isCorrect = true;
                            break;
                        }
                    }
                } else {
                    isCorrect = userAnswer === normalizeText(answerKey[questionId]);
                }
                
                if (isCorrect) {
                    feedback.innerHTML = '<span class="correct">✅ Correct</span>';
                } else {
                    // For text inputs, show all acceptable answers if available
                    const correctAnswers = acceptableAnswers[questionId] 
                        ? acceptableAnswers[questionId].join(' / ') 
                        : answerKey[questionId];
                    feedback.innerHTML = '<span class="wrong">❌ Wrong. Correct: ' + correctAnswers + '</span>';
                }
            }
        }
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
    initializeTimer(45);
    
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