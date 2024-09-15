var _a;
// LISTING ELEMENT
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // TYPE ASSERTION
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // // Picture Element
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '';
        // CREATE RESUME OUTPUT
        var resumeOutPut = "\n        <h2>Resume</h2> \n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n        <p><strong>Name:</strong> ").concat(name_1, " </p>\n        <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
        var resumeOutPutElement = document.getElementById('resumeOutPut');
        if (resumeOutPutElement) {
            resumeOutPutElement.innerHTML = resumeOutPut;
        }
        else {
            console.error('The resume output Element are Missing');
        }
    }
    else {
        console.error("One or more oupput Element are Missing");
    }
});