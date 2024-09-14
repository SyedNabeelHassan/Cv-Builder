window.onload = function() {
    const params = new URLSearchParams(window.location.search);

    document.getElementById('previewName').textContent = params.get('name');
    document.getElementById('previewEmail').textContent = params.get('email');
    document.getElementById('previewNumber').textContent = params.get('number');
    document.getElementById('previewAddress').textContent = params.get('address');
    document.getElementById('previewSchool').textContent = params.get('school');
    document.getElementById('previewCollege').textContent = params.get('college');
    document.getElementById('previewUniversity').textContent = params.get('university');
    document.getElementById('previewCertification').textContent = params.get('certification');
    document.getElementById('previewWork').textContent = params.get('work');
    document.getElementById('previewAchievements').textContent = params.get('achievements');
    document.getElementById('previewLinkedIn').textContent = params.get('linkedIn');
}
