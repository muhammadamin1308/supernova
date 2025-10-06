// Beginner Level Test JavaScript

// Answer key for beginner test (5 questions only)
const beginnerAnswerKey = {
    q1: "am",
    q2: "goes", 
    q3: "Do",
    q4: "are",
    q5: "didn't"
};

// Alternative acceptable answers for text questions (none needed for these 5 questions)
const acceptableAnswers = {};

function submitTest() {
    if (testTimer) {
        clearInterval(testTimer);
    }
    
    let totalScore = 0;
    const maxScore = 30;
    
    // Clear previous feedback
    document.querySelectorAll('.feedback').forEach(e => e.innerHTML = '');
    
    // Grade each question
    for (let i = 1; i <= 30; i++) {
        const questionId = 'q' + i;
        const feedbackId = 'fb-q' + i;
        const feedback = document.getElementById(feedbackId);
        
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
                feedback.innerHTML = '<span class="notanswered">⚠️ Not answered. Correct: ' + beginnerAnswerKey[questionId] + '</span>';
            } else if (normalizeText(userAnswer) === normalizeText(beginnerAnswerKey[questionId])) {
                feedback.innerHTML = '<span class="correct">✅ Correct</span>';
                totalScore += 1;
            } else {
                feedback.innerHTML = '<span class="wrong">❌ Wrong. Correct: ' + beginnerAnswerKey[questionId] + '</span>';
            }
        } else {
            // Text input question
            const input = document.querySelector(`input[name="${questionId}"]`);
            if (input) {
                const userAnswer = normalizeText(input.value);
                
                if (!userAnswer) {
                    feedback.innerHTML = '<span class="notanswered">⚠️ Not answered. Correct: ' + beginnerAnswerKey[questionId] + '</span>';
                } else {
                    // Check if answer matches any acceptable answer
                    let isCorrect = false;
                    
                    if (acceptableAnswers[questionId]) {
                        // Check against multiple acceptable answers
                        for (let acceptable of acceptableAnswers[questionId]) {
                            if (userAnswer === normalizeText(acceptable)) {
                                isCorrect = true;
                                break;
                            }
                        }
                    } else {
                        // Check against single correct answer
                        isCorrect = userAnswer === normalizeText(beginnerAnswerKey[questionId]);
                    }
                    
                    if (isCorrect) {
                        feedback.innerHTML = '<span class="correct">✅ Correct</span>';
                        totalScore += 1;
                    } else {
                        feedback.innerHTML = '<span class="wrong">❌ Wrong. Correct: ' + beginnerAnswerKey[questionId] + '</span>';
                    }
                }
            }
        }
    }
    
    // Calculate percentage
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Determine grade level
    let grade, message;
    if (percentage >= 90) {
        grade = "Excellent! 🌟";
        message = "You have a strong foundation in basic English!";
    } else if (percentage >= 80) {
        grade = "Very Good! 👏";
        message = "You're doing well with basic English concepts.";
    } else if (percentage >= 70) {
        grade = "Good! 👍";
        message = "You understand most basic English concepts.";
    } else if (percentage >= 60) {
        grade = "Fair 📚";
        message = "Keep practicing basic English skills.";
    } else {
        grade = "Needs Improvement 📖";
        message = "Focus on studying basic English grammar and vocabulary.";
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

// Initialize the test when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Clear any previous test data
    clearTestForm();
    
    // Initialize 20-minute timer
    initializeTimer(20);
    
    // Initialize auto-save
    initializeAutoSave();
    
    // Add form validation
    const form = document.getElementById('examForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitTest();
        });
    }
    
    // Clear data when leaving page (except when submitting)
    let isSubmitting = false;
    
    // Mark when submitting to avoid clearing data
    const submitButton = document.querySelector('button[onclick="submitTest()"]');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            isSubmitting = true;
        });
    }
    
    // Warn before leaving page and clear data if not submitting
    window.addEventListener('beforeunload', function(e) {
        if (getAllAnsweredQuestions().length > 0 && !isSubmitting) {
            // Clear auto-saved data when leaving without submitting
            clearAutoSavedAnswers();
            e.preventDefault();
            e.returnValue = '';
        }
    });
});