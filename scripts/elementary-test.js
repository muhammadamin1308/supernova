// Elementary Level Test JavaScript

// Answer key for elementary test
const elementaryAnswerKey = {
    // Grammar g1..g40
    g1: "is watching",
    g2: "isn't cleaned",
    g3: "used to have",
    g4: "is going to look for",
    g5: "did … find",
    g6: "didn't go",
    g7: "have been",
    g8: "had ... left",
    g9: "aren't listening",
    g10: "Have ... seen",
    g11: "met",
    g12: "have ... been",
    g13: "is going to snow",
    g14: "was cooking",
    g15: "had seen",
    g16: "is made",
    g17: "much",
    g18: "won't",
    g19: "where",
    g20: "Neither",
    g21: "on",
    g22: "out",
    g23: "Although",
    g24: "to",
    g25: "will",
    g26: "yet",
    g27: "must",
    g28: "best",
    g29: "more",
    g30: "too many",
    g31: "don't have to",
    g32: "enough",
    g33: "anything",
    g34: "should",
    g35: "might",
    g36: "quickly",
    g37: "painted",
    g38: "told",
    g39: "Walking",
    g40: "wouldn't",

    // Vocabulary v1..v40
    v1: "dolphin",
    v2: "receipt",
    v3: "talkative",
    v4: "ironing",
    v5: "gloves",
    v6: "told",
    v7: "had",
    v8: "nephew",
    v9: "through",
    v10: "empty",
    v11: "generous",
    v12: "on",
    v13: "forward",
    v14: "try",
    v15: "win",
    v16: "on",
    v17: "so",
    v18: "gets",
    v19: "very",
    v20: "lend",
    v21: "mean",
    v22: "boring",
    v23: "forget",
    v24: "lose",
    v25: "safe",
    v26: "into",
    v27: "on",
    v28: "for",
    v29: "about",
    v30: "with",
    v31: "for",
    v32: "to",
    v33: "at",
    v34: "take",
    v35: "back",
    v36: "in",
    v37: "across",
    v38: "invite",
    v39: "go",
    v40: "make",

    // Reading r1..r10 answers (A True / B False / C Doesn't say)
    r1: "A",
    r2: "C",
    r3: "A",
    r4: "B",
    r5: "A",
    r6: "C",
    r7: "A",
    r8: "A",
    r9: "B",
    r10: "A",
    r11: "yesterday's weather and what you were thinking about when you woke up",
    r12: "small details",
    r13: "68",
    r14: "a hard-working and successful student",
    r15: "she expected her memory to start to get worse",

    // Listening l1..l5
    l1: "A",
    l2: "B",
    l3: "B",
    l4: "A",
    l5: "A",
    // Listening matching l6..l10 (Conv1..Conv5 = E,B,D,A,C)
    l6: "E",
    l7: "B",
    l8: "D",
    l9: "A",
    l10: "C"
};

// Alternative acceptable answers for complex questions
const elementaryAcceptableAnswers = {
    g5: ["did … find", "did find"],
    g7: ["have been", "'ve been"],
    g8: ["had ... left", "'d left", "had left"],
    g10: ["Have ... seen", "Have you seen"],
    g12: ["have ... been", "have you been"],
    g13: ["is going to snow", "'s going to snow"],
    g15: ["had seen", "'d seen"],
    
    // Reading short answers
    r11: ["yesterday's weather", "what you were thinking", "yesterday weather", "what you were thinking about when you woke up"],
    r12: ["small details", "small details.", "small details of the other days"],
    r13: ["68", "sixty eight", "sixty-eight"],
    r14: ["hard-working and successful student", "hard-working student", "successful student", "hard working student"],
    r15: ["memory to start to get worse", "her memory to start to get worse", "memory to get worse", "it to get worse"]
};

function submitTest() {
    if (testTimer) {
        clearInterval(testTimer);
    }
    
    let totalScore = 0;
    const maxScore = 105;
    
    // Clear previous feedback
    document.querySelectorAll('.feedback').forEach(e => e.innerHTML = '');
    
    // Grade Grammar questions (g1-g40)
    for (let i = 1; i <= 40; i++) {
        const questionId = 'g' + i;
        gradeQuestion(questionId, elementaryAnswerKey, elementaryAcceptableAnswers);
    }
    
    // Grade Vocabulary questions (v1-v40) 
    for (let i = 1; i <= 40; i++) {
        const questionId = 'v' + i;
        gradeQuestion(questionId, elementaryAnswerKey, elementaryAcceptableAnswers);
    }
    
    // Grade Reading questions (r1-r15)
    for (let i = 1; i <= 15; i++) {
        const questionId = 'r' + i;
        gradeQuestion(questionId, elementaryAnswerKey, elementaryAcceptableAnswers);
    }
    
    // Grade Listening questions (l1-l10)
    for (let i = 1; i <= 10; i++) {
        const questionId = 'l' + i;
        gradeQuestion(questionId, elementaryAnswerKey, elementaryAcceptableAnswers);
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
        message = "Great job! You have a solid grasp of elementary English.";
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

function gradeQuestion(questionId, answerKey, acceptableAnswers) {
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
                        if (userAnswer.includes(normalizeText(acceptable)) || normalizeText(acceptable).includes(userAnswer)) {
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
                    feedback.innerHTML = '<span class="wrong">❌ Wrong. Correct: ' + answerKey[questionId] + '</span>';
                }
            }
        } else {
            // Select element
            const select = document.querySelector(`select[name="${questionId}"], select#${questionId}`);
            if (select) {
                const userAnswer = select.value;
                
                if (!userAnswer) {
                    feedback.innerHTML = '<span class="notanswered">⚠️ Not answered. Correct: ' + answerKey[questionId] + '</span>';
                } else if (userAnswer === answerKey[questionId]) {
                    feedback.innerHTML = '<span class="correct">✅ Correct</span>';
                } else {
                    feedback.innerHTML = '<span class="wrong">❌ Wrong. Correct: ' + answerKey[questionId] + '</span>';
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