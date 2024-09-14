function generatePreview() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const school = document.getElementById('school').value;
    const college = document.getElementById('college').value;
    const university = document.getElementById('University').value;
    const certification = document.getElementById('Certification').value;
    const work = document.getElementById('work').value;
    const achievements = document.getElementById('Achievements').value;
    const linkedIn = document.getElementById('LinkedIn').value;

    // Create a query string to pass to the preview page
    const params = new URLSearchParams({
        name: name,
        email: email,
        number: number,
        address: address,
        school: school,
        college: college,
        university: university,
        certification: certification,
        work: work,
        achievements: achievements,
        linkedIn: linkedIn
    }).toString();

    // Open the preview page with the form data in the URL
    window.location.href = `preview.html?${params}`;
}
