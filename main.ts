// LISTING ELEMENT
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // TYPE ASSERTION

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const professionElement = document.getElementById('profession') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const aboutElement = document.getElementById('about') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(profilePictureInput && nameElement && professionElement && emailElement && phoneElement && addressElement && aboutElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const profession = professionElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const about = aboutElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // // Picture Element
        const profilePicturefile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '' ;
        
        
        
        
        // CREATE RESUME OUTPUT
        const resumeOutPut = `
        <div class="resumeInSide">
            <div class="imageSide">
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : '' }
                <div>
                <p> ${name} </p>
                <span> ${profession}</span>
                </div>
            </div>
            <div class="mainTextSide">
                <div class="contactSide">
                <div class="aboutSide">    
                    <h3>About Me</h3>
                    <p>${about}</p>
                </div>
                <div class="inContact">    
                    <h3>Contact Me</h3>
                    <p><i class="fa-solid fa-phone"></i> ${phone} </p>
                    <p><i class="fa-solid fa-envelope"></i> ${email} </p>
                    <p><i class="fa-solid fa-location-dot"></i> ${address} </p>
                </div>
                </div>
                <div class="textSide">
                    <h3><i class="fa-solid fa-angles-right"></i> Education</h3>
                    <p>${education}</p>

                    <h3><i class="fa-solid fa-angles-right"></i> Experience</h3>
                    <p>${experience}</p>

                    <h3><i class="fa-solid fa-angles-right"></i> Skills</h3>
                    <p>${skills}</p>
                </div>
            </div>
        </div>
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