// Advanced Level Test JavaScript

// Answer key for advanced test
const advancedAnswerKey = {
    // Grammar questions 1-25
    q1: "would have",
    q2: "was rejected", 
    q3: "Had",
    q4: "on knowing",
    q5: "had he made",
    q6: "being conducted",
    q7: "had had",
    q8: "Unlikely",
    q9: "under",
    q10: "wouldn't have",
    q11: "be implemented",
    q12: "Despite",
    q13: "submit",
    q14: "considerably",
    q15: "Given",
    q16: "delivered",
    q17: "had I entered",
    q18: "warrants",
    q19: "Notwithstanding",
    q20: "subject",
    q21: "declined",
    q22: "innate",
    q23: "impasse",
    q24: "indicative",
    q25: "highly",
    
    // Vocabulary questions 26-50
    q26: "verbose",
    q27: "exponential",
    q28: "affable",
    q29: "preposterous",
    q30: "vivid",
    q31: "omnipresent",
    q32: "careless",
    q33: "mitigate",
    q34: "hypocrite",
    q35: "contentious",
    q36: "judicious",
    q37: "versatility",
    q38: "disparaging",
    q39: "ameliorate",
    q40: "comprehensive",
    q41: "nominal",
    q42: "vanity",
    q43: "atone",
    q44: "nuance",
    q45: "substantiate",
    q46: "authoritarian",
    q47: "congruent",
    q48: "convoluted",
    q49: "lucid",
    q50: "amenable"
};

// Alternative acceptable answers for advanced test
const advancedAcceptableAnswers = {
    q11: ["be implemented", "be adopted", "be introduced"],
    q12: ["Despite", "In spite of", "Notwithstanding"],
    q13: ["submit", "hand in", "turn in"],
    q14: ["considerably", "significantly", "substantially", "much"],
    q15: ["Given", "Considering", "In light of"],
    q21: ["declined", "decreased", "dropped", "fallen"],
    q22: ["innate", "inherent", "natural"],
    q23: ["impasse", "deadlock", "stalemate"],
    q24: ["indicative", "suggestive", "evidence"],
    q25: ["highly", "extremely", "very"],
    q31: ["omnipresent", "pervasive", "widespread", "everywhere"],
    q32: ["careless", "sloppy", "negligent", "haphazard"],
    q33: ["mitigate", "alleviate", "lessen", "reduce"],
    q34: ["hypocrite"],
    q35: ["contentious", "disputatious", "argumentative"],
    q42: ["vanity", "narcissism", "conceit"],
    q43: ["atone", "expiate", "make amends"],
    q44: ["nuance"],
    q45: ["substantiate", "corroborate", "verify", "confirm"]
};

function submitTest() {
    if (testTimer) {
        clearInterval(testTimer);
    }
    
    let totalScore = 0;
    const maxScore = 50;
    
    // Clear previous feedback
    document.querySelectorAll('.feedback').forEach(e => e.innerHTML = '');
    
    // Grade all questions (q1-q50)
    for (let i = 1; i <= 50; i++) {
        const questionId = 'q' + i;
        gradeAdvancedQuestion(questionId, advancedAnswerKey, advancedAcceptableAnswers);
    }
    
    // Count correct answers
    totalScore = document.querySelectorAll('.feedback .correct').length;
    
    // Calculate percentage
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Determine grade level
    let grade, message;
    if (percentage >= 90) {
        grade = "Outstanding! 🎓";
        message = "Exceptional mastery of advanced English! You demonstrate near-native proficiency.";
    } else if (percentage >= 80) {
        grade = "Excellent! 🌟";
        message = "Superior command of advanced English concepts. Well done!";
    } else if (percentage >= 70) {
        grade = "Very Good! 👏";
        message = "Strong grasp of advanced English. Continue refining your skills.";
    } else if (percentage >= 60) {
        grade = "Good 📚";
        message = "Solid understanding of advanced concepts. Focus on areas for improvement.";
    } else if (percentage >= 50) {
        grade = "Fair 📖";
        message = "Basic grasp of advanced English. Substantial practice needed.";
    } else {
        grade = "Needs Significant Work 📝";
        message = "Consider reviewing intermediate concepts before tackling advanced material.";
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

function gradeAdvancedQuestion(questionId, answerKey, acceptableAnswers) {
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
    
    // Initialize 60-minute timer
    initializeTimer(60);
    
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
    
    // Add hints for advanced users
    addAdvancedHints();
});

function addAdvancedHints() {
    // Add contextual hints for advanced grammar concepts
    const grammarHints = {
        'q1': 'Third conditional - hypothetical past situation',
        'q3': 'Inverted conditional structure',
        'q5': 'Inverted structure with "No sooner"',
        'q7': 'Past perfect in wish clause',
        'q10': 'Subjunctive "were" in conditional',
        'q17': 'Inverted structure with "Scarcely"'
    };
    
    Object.keys(grammarHints).forEach(questionId => {
        const question = document.querySelector(`[name="${questionId}"]`)?.closest('.question');
        if (question) {
            const hint = document.createElement('div');
            hint.className = 'hint';
            hint.style.fontSize = '12px';
            hint.style.fontStyle = 'italic';
            hint.style.color = '#888';
            hint.textContent = '💡 Hint: ' + grammarHints[questionId];
            question.appendChild(hint);
        }
    });
}