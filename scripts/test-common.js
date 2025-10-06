// Common Test JavaScript Functions

// Timer functionality
let testTimer;
let timeLeft;
let timerDisplay;

function initializeTimer(minutes) {
    timeLeft = minutes * 60; // convert to seconds
    timerDisplay = document.getElementById('timer');
    updateTimerDisplay();
    
    testTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(testTimer);
            alert('Time is up! The test will be automatically submitted.');
            submitTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    if (timerDisplay) {
        timerDisplay.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Add warning classes based on remaining time
        timerDisplay.classList.remove('warning', 'danger');
        
        if (timeLeft <= 300 && timeLeft > 60) { // Last 5 minutes
            timerDisplay.classList.add('warning');
        } else if (timeLeft <= 60) { // Last minute
            timerDisplay.classList.add('danger');
        }
    }
}

// Progress tracking
function updateProgress() {
    const form = document.getElementById('examForm');
    if (!form) return;
    
    const totalQuestions = getTotalQuestionCount();
    const answered = getAllAnsweredQuestions().length;
    
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const percentage = totalQuestions > 0 ? (answered / totalQuestions) * 100 : 0;
        progressBar.style.width = percentage + '%';
    }
}

function getTotalQuestionCount() {
    const form = document.getElementById('examForm');
    if (!form) return 0;
    
    // Count radio button groups (unique names)
    const radioGroups = new Set();
    const radios = form.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        if (radio.name) {
            radioGroups.add(radio.name);
        }
    });
    
    // Count text inputs (excluding any form inputs that aren't questions)
    const textInputs = form.querySelectorAll('input[type="text"]').length;
    
    // Count email inputs
    const emailInputs = form.querySelectorAll('input[type="email"]').length;
    
    // Count select elements
    const selects = form.querySelectorAll('select').length;
    
    return radioGroups.size + textInputs + emailInputs + selects;
}

function getAllAnsweredQuestions() {
    const form = document.getElementById('examForm');
    if (!form) return [];
    
    const answered = [];
    
    // Check radio buttons - count unique groups that have a selection
    const radioGroups = new Set();
    const radios = form.querySelectorAll('input[type="radio"]:checked');
    radios.forEach(radio => {
        if (radio.name && !radioGroups.has(radio.name)) {
            radioGroups.add(radio.name);
            answered.push(radio.name);
        }
    });
    
    // Check text inputs - count those with non-empty values
    const textInputs = form.querySelectorAll('input[type="text"]');
    textInputs.forEach(input => {
        if (input.value && input.value.trim() !== '') {
            answered.push(input.name || input.id);
        }
    });
    
    // Check email inputs - count those with non-empty values
    const emailInputs = form.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        if (input.value && input.value.trim() !== '') {
            answered.push(input.name || input.id);
        }
    });
    
    // Check selects - count those with selected values
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
        if (select.value && select.value !== '') {
            answered.push(select.name || select.id);
        }
    });
    
    return answered;
}

// Show test results with download option
function showTestResults(testResults) {
    const resultBox = document.getElementById('resultBox');
    if (!resultBox) return;
    
    // Store test results
    const testData = {
        score: getCurrentScore(),
        totalQuestions: getTotalQuestionCount(),
        level: sessionStorage.getItem('selectedLevel') || 'unknown',
        answers: getAllAnswers(),
        timeSpent: getTimeSpent(),
        completedAt: new Date().toISOString()
    };
    
    // Save to localStorage automatically
    saveTestResults(testData);
    
    resultBox.innerHTML = testResults;
    
    // Store results for download
    window.testResultData = testData;
}

function getCurrentScore() {
    const correctElements = document.querySelectorAll('.feedback .correct');
    return correctElements.length;
}

function getAllAnswers() {
    const form = document.getElementById('examForm');
    if (!form) return {};
    
    const answers = {};
    
    // Get radio button answers
    const radios = form.querySelectorAll('input[type="radio"]:checked');
    radios.forEach(radio => {
        answers[radio.name] = radio.value;
    });
    
    // Get text input answers
    const textInputs = form.querySelectorAll('input[type="text"]');
    textInputs.forEach(input => {
        if (input.value.trim() !== '') {
            answers[input.name || input.id] = input.value.trim();
        }
    });
    
    // Get select answers
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
        if (select.value !== '') {
            answers[select.name || select.id] = select.value;
        }
    });
    
    return answers;
}

function getTimeSpent() {
    const startTime = sessionStorage.getItem('testStartTime');
    if (!startTime) return 0;
    
    const start = new Date(startTime);
    const end = new Date();
    return Math.round((end - start) / 1000); // seconds
}

function downloadTestResult() {
    if (!window.testResultData) return;
    
    const data = {
        testResults: window.testResultData,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    const testLevel = window.testResultData.level || 'test';
    link.download = `${testLevel}_test_result_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



// Add event listeners for progress tracking
document.addEventListener('DOMContentLoaded', function() {
    // Add change listeners to all form elements
    const form = document.getElementById('examForm');
    if (form) {
        form.addEventListener('change', updateProgress);
        form.addEventListener('input', updateProgress);
        
        // Initial progress update
        setTimeout(updateProgress, 500);
    }
});

// Utility function to normalize text for comparison
function normalizeText(text) {
    return (text || '').toString().trim().toLowerCase()
        .replace(/[''""".,?!()]/g, '')
        .replace(/\s+/g, ' ');
}

// Auto-save functionality
let autoSaveInterval;

function initializeAutoSave() {
    // Clear any previous auto-saved data when starting a fresh test
    clearAutoSavedAnswers();
    
    autoSaveInterval = setInterval(() => {
        const answers = getAllAnswers();
        const testKey = `autoSavedAnswers_${sessionStorage.getItem('selectedLevel') || 'test'}`;
        sessionStorage.setItem(testKey, JSON.stringify(answers));
    }, 30000); // Save every 30 seconds
}

function clearAutoSavedAnswers() {
    // Clear auto-saved data for all test levels
    sessionStorage.removeItem('autoSavedAnswers_beginner');
    sessionStorage.removeItem('autoSavedAnswers_elementary');
    sessionStorage.removeItem('autoSavedAnswers_advanced');
    sessionStorage.removeItem('autoSavedAnswers');
}

function restoreAutoSavedAnswers() {
    // Only restore if the user specifically requests it (not automatically)
    return;
}

function clearTestForm() {
    const form = document.getElementById('examForm');
    if (!form) return;
    
    // Clear all radio buttons
    const radios = form.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
    
    // Clear all text inputs
    const textInputs = form.querySelectorAll('input[type="text"]');
    textInputs.forEach(input => input.value = '');
    
    // Clear all email inputs
    const emailInputs = form.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => input.value = '');
    
    // Reset all selects
    const selects = form.querySelectorAll('select');
    selects.forEach(select => select.selectedIndex = 0);
    
    // Clear all feedback
    const feedbacks = form.querySelectorAll('.feedback');
    feedbacks.forEach(feedback => feedback.innerHTML = '');
    
    // Reset progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = '0%';
    }
}

// Handle timer positioning relative to footer
function handleTimerPosition() {
    const timer = document.getElementById('timer');
    const footer = document.querySelector('.test-footer');
    
    if (!timer || !footer) return;
    
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // If footer is visible in viewport, move timer up
    if (footerRect.top < windowHeight) {
        timer.classList.add('above-footer');
    } else {
        timer.classList.remove('above-footer');
    }
}

// Add scroll event listener for timer positioning
window.addEventListener('scroll', handleTimerPosition);
window.addEventListener('resize', handleTimerPosition);

// Initialize timer position on page load
document.addEventListener('DOMContentLoaded', handleTimerPosition);