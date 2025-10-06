// Intermediate Level Test JavaScript

// Helper function to normalize text for comparison
function normalizeText(text) {
    if (!text) return '';
    return text.toString().toLowerCase().trim();
}

// Answer key for intermediate test (80 questions)
const intermediateAnswerKey = {
    // Grammar Section 1: Complete sentences (15 points)
    q1: "is working",
    q2: "went", 
    q3: "would give",
    q4: "has been going",
    q5: "gets",
    q6: "sent",
    q7: "wanted",
    q8: "am drinking",
    q9: "has gone",
    q10: "had broken",
    q11: "had known",
    q12: "will be sent",
    q13: "had",
    q14: "was listening",
    q15: "meets",
    
    // Grammar Section 2: Complete with one word (10 points)
    q16: "will",
    q17: "that",
    q18: "hadn't",
    q19: "until", 
    q20: "were",
    q21: "able",
    q22: "asked",
    q23: "aren't",
    q24: "have",
    q25: "use",
    
    // Grammar Section 3: Choose correct words (15 points)
    q26: "disagreeing",
    q27: "slowly",
    q28: "won't",
    q29: "whose",
    q30: "mustn't",
    q31: "told",
    q32: "Will",
    q33: "he'd",
    q34: "usually",
    q35: "few",
    q36: "next",
    q37: "any",
    q38: "unless",
    q39: "than",
    q40: "were held",
    
    // Vocabulary Section 1: Odd one out (5 points)
    q41: "spoilt",
    q42: "script",
    q43: "graduate",
    q44: "apply for",
    q45: "tinned",
    
    // Vocabulary Section 2: Write the noun (6 points)
    q46: "complaint",
    q47: "loss",
    q48: "response",
    q49: "delivery",
    q50: "success",
    q51: "explanation",
    
    // Vocabulary Section 3: Complete with prepositions (7 points)
    q52: "at",
    q53: "with",
    q54: "for",
    q55: "on",
    q56: "to",
    q57: "of",
    q58: "on",
    
    // Vocabulary Section 4: Complete with correct words (14 points)
    q59: "rank",
    q60: "beat",
    q61: "filmed in",
    q62: "primary",
    q63: "part-time",
    q64: "pedestrian",
    q65: "discount",
    q66: "sensitive",
    q67: "terrace",
    q68: "starving",
    q69: "point",
    q70: "fortunate",
    q71: "invest",
    q72: "jealous",
    
    // Vocabulary Section 5: Complete with one word (8 points)
    q73: "on",
    q74: "charge",
    q75: "subtitles",
    q76: "does",
    q77: "message",
    q78: "cheated",
    q79: "keep",
    q80: "injured"
};

// Alternative acceptable answers for text questions
const acceptableAnswers = {
    q1: ["is working", "'s working"],
    q2: ["went"],
    q3: ["would give", "'d give"],
    q4: ["has been going", "'s been going"],
    q5: ["gets"],
    q6: ["sent"],
    q7: ["wanted", "wants"],
    q8: ["am drinking", "'m drinking"],
    q9: ["has gone", "'s gone"],
    q10: ["had broken", "'d broken"],
    q11: ["had known", "'d known"],
    q12: ["will be sent"],
    q13: ["had"],
    q14: ["was listening"],
    q15: ["meets"],
    q16: ["will"],
    q17: ["that", "which"],
    q18: ["hadn't", "had not"],
    q19: ["until"],
    q20: ["were"],
    q21: ["able"],
    q22: ["asked"],
    q23: ["aren't", "are not"],
    q24: ["have"],
    q25: ["use"],
    q46: ["complaint"],
    q47: ["loss"],
    q48: ["response"],
    q49: ["delivery"],
    q50: ["success"],
    q51: ["explanation"],
    q52: ["at"],
    q53: ["with"],
    q54: ["for"],
    q55: ["on"],
    q56: ["to"],
    q57: ["of"],
    q58: ["on"],
    q73: ["on"],
    q74: ["charge"],
    q75: ["subtitles"],
    q76: ["does"],
    q77: ["message"],
    q78: ["cheated"],
    q79: ["keep"],
    q80: ["injured"]
};

function submitTest() {
    if (testTimer) {
        clearInterval(testTimer);
    }
    
    let totalScore = 0;
    const maxScore = 80;
    
    // Clear previous feedback
    document.querySelectorAll('.feedback').forEach(e => e.innerHTML = '');
    
    // Grade all questions (q1-q80)
    for (let i = 1; i <= 80; i++) {
        const questionId = 'q' + i;
        gradeIntermediateQuestion(questionId, intermediateAnswerKey, acceptableAnswers);
    }
    
    // Count correct answers
    totalScore = document.querySelectorAll('.feedback .correct').length;
    
    // Calculate percentage
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Determine grade level
    let grade, message;
    if (percentage >= 85) {
        grade = "Excellent! 🌟";
        message = "Outstanding! You have strong intermediate English skills. Consider moving to upper-intermediate level.";
    } else if (percentage >= 70) {
        grade = "Very Good! 👏";
        message = "Great work! Your intermediate level is solid with room for improvement.";
    } else if (percentage >= 55) {
        grade = "Good! 👍";
        message = "You're developing intermediate skills. Focus on areas where you lost points.";
    } else if (percentage >= 40) {
        grade = "Fair 📚";
        message = "Basic intermediate understanding. More practice needed in most areas.";
    } else {
        grade = "Needs Improvement 📖";
        message = "Consider reviewing pre-intermediate materials before retaking this test.";
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

function gradeIntermediateQuestion(questionId, answerKey, acceptableAnswers) {
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

// Initialize the test when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Clear any previous test data
    clearTestForm();
    
    // Initialize 45-minute timer
    initializeTimer(45);
    
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