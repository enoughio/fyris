"use server"


const googleScriptURLContact = "https://script.google.com/macros/s/AKfycbwUtk_0QQEiYe-QQEHu17RplPLa_EUdfXQlcl_YuUtvICgSOGPBOKcnDMv8MSKs-Qvf/exec"
const googleScriptURLCarrer = "https://script.google.com/macros/s/AKfycbxrtvRlYFWA7paD1e742wrJR-5f1Z97-H6CsljFS5FFBTF1HnvTL-NeC8m7HKXAD3OPfg/exec"

export const addRegistration = async (formData) => {
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const company = formData.get("company")
    const service = formData.get("service")
    const message = formData.get("message")

    try {
        // console.log("Registration Data:", { name, phone, email, company, service, message });

        const res = await fetch(googleScriptURLContact, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                company,
                service,
                message
            })
        })

        if(!res.ok) {
            throw new Error("Failed to add registration to google spreadsheet")
        }

        return {successMessage: `Your message has been sent successfully!`}

    } catch (error) {
        return {errorMessage: `There was a problem with your sending your message!`}
    }
}



export const addCarrer = async (formData) => {

    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const location = formData.get("location")
    const linkedin = formData.get("linkedin")
    const portfolio = formData.get("portfolio")
    const role = formData.get("role")
    const resumeLink = formData.get("resumeLink")
    const message = formData.get("message")
    const coverLetter = formData.get("coverLetter")
    const yearsOfExperience = formData.get("yearsOfExperience")


    try {
        // console.log("Carrer Data:", { name, email, phone, location, linkedin, portfolio, role, resumeLink, message });

        const res = await fetch(googleScriptURLCarrer, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                location,
                linkedin,
                portfolio,
                role,
                resumeLink,
                message
            })
        })

        if(!res.ok) {
            throw new Error("Failed to add carrers to google spreadsheet")
        }

        return {successMessage: `Success! Your application has been submitted successfully!`}

    } catch (error) {
        return {errorMessage: `There was a problem with submitting your application!`}
    }
}
