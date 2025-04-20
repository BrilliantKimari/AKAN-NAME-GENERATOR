let form = document.getElementById("an-fm")
form.addEventListener("submit", function (event) {
    event.preventDefault()

    const dateInput = document.getElementById("dt").value
    const genderInput = document.querySelector("input[name='gender']:checked")

    if (!dateInput || !genderInput) {
        alert("Please enter your details")
        return
    }

    const date = new Date(dateInput)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (month < 3) {
        month += 12
        year -= 1
    }

    const CC = Math.floor(year / 100)
    const YY = year % 100

    const formula = Math.floor((CC / 4 - 2 * CC - 1 + 5 * YY / 4 + 26 * (month + 1) / 10 + day) % 7)

    const dayIndex = (formula + 7) % 7

    const maleNames = ["Kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    const gender = genderInput.value.toLowerCase()
    const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex]

    document.getElementById("result").textContent = akanName
})