// LISTING ELEMENT
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // TYPE ASSERTION

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // // Picture Element
        const profilePicturefile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '' ;
        
        
        
        
        // CREATE RESUME OUTPUT
        const resumeOutPut = `
        <h2>Resume</h2> 
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : "" }
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phone Number:</strong> ${phone} </p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        const resumeOutPutElement = document.getElementById('resumeOutPut')
        if(resumeOutPutElement){
            resumeOutPutElement.innerHTML = resumeOutPut;
    }else{
        console.error('The resume output Element are Missing')
    }
    }else{
        console.error("One or more oupput Element are Missing")
}
});