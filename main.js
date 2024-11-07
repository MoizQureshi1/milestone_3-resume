var _a;
// LISTING ELEMENT
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // TYPE ASSERTION
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var professionElement = document.getElementById('profession');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var aboutElement = document.getElementById('about');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && professionElement && emailElement && phoneElement && addressElement && aboutElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var profession = professionElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var about = aboutElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // // Picture Element
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '';
        // CREATE RESUME OUTPUT
        var resumeOutPut = "\n        <div class=\"resumeInSide\">\n            <div class=\"imageSide\">\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n                <div>\n                <p> ").concat(name_1, " </p>\n                <span> ").concat(profession, "</span>\n                </div>\n            </div>\n            <div class=\"mainTextSide\">\n                <div class=\"contactSide\">\n                <div class=\"aboutSide\">    \n                    <h3>About Me</h3>\n                    <p>").concat(about, "</p>\n                </div>\n                <div class=\"inContact\">    \n                    <h3>Contact Me</h3>\n                    <p><i class=\"fa-solid fa-phone\"></i> ").concat(phone, " </p>\n                    <p><i class=\"fa-solid fa-envelope\"></i> ").concat(email, " </p>\n                    <p><i class=\"fa-solid fa-location-dot\"></i> ").concat(address, " </p>\n                </div>\n                </div>\n                <div class=\"textSide\">\n                    <h3><i class=\"fa-solid fa-angles-right\"></i> Education</h3>\n                    <p>").concat(education, "</p>\n\n                    <h3><i class=\"fa-solid fa-angles-right\"></i> Experience</h3>\n                    <p>").concat(experience, "</p>\n\n                    <h3><i class=\"fa-solid fa-angles-right\"></i> Skills</h3>\n                    <p>").concat(skills, "</p>\n                </div>\n            </div>\n        </div>\n        ");
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
