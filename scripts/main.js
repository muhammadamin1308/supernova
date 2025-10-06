// Main JavaScript for English Proficiency Test

// Function to start a test at the specified level
function startTest(level) {
    const levelPages = {
        'beginner': 'levels/beginner.html',
        'elementary': 'levels/elementary.html',
        'advanced': 'levels/advanced.html'
    };
    
    if (levelPages[level]) {
        // Clear any existing test data before starting new test
        clearPreviousTestData();
        
        // Store the selected level in sessionStorage for reference
        sessionStorage.setItem('selectedLevel', level);
        sessionStorage.setItem('testStartTime', new Date().toISOString());
        
        // Navigate to the test page
        window.location.href = levelPages[level];
    } else {
        alert('Invalid test level selected. Please try again.');
    }
}

// Function to clear previous test data
function clearPreviousTestData() {
    // Clear auto-saved answers
    sessionStorage.removeItem('autoSavedAnswers_beginner');
    sessionStorage.removeItem('autoSavedAnswers_elementary');
    sessionStorage.removeItem('autoSavedAnswers_advanced');
    sessionStorage.removeItem('autoSavedAnswers');
    
    // Clear any previous test session data
    sessionStorage.removeItem('testStartTime');
}

// Function to save test results
function saveTestResults(studentData) {
    try {
        // Get existing results from localStorage
        let allResults = JSON.parse(localStorage.getItem('testResults') || '[]');
        
        // Add new result
        allResults.push({
            ...studentData,
            timestamp: new Date().toISOString(),
            id: Date.now() + Math.random()
        });
        
        // Save back to localStorage
        localStorage.setItem('testResults', JSON.stringify(allResults));
        
        console.log('Test results saved successfully:', studentData);
        return true;
    } catch (error) {
        console.error('Error saving test results:', error);
        return false;
    }
}

// Function to get all test results
function getAllTestResults() {
    try {
        return JSON.parse(localStorage.getItem('testResults') || '[]');
    } catch (error) {
        console.error('Error retrieving test results:', error);
        return [];
    }
}

// Function to download results as JSON
function downloadResults() {
    const results = getAllTestResults();
    if (results.length === 0) {
        alert('No test results found.');
        return;
    }
    
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `test_results_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === '1') startTest('beginner');
    if (event.key === '2') startTest('elementary');
    if (event.key === '3') startTest('advanced');
});

// Add some visual feedback on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate cards on load
    const cards = document.querySelectorAll('.level-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});