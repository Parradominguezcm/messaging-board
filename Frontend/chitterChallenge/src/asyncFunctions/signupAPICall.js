export const signupAPICall = async (userFirstName, userLastName, userName, userEmail, userPassword) => {
    return await fetch(import.meta.env.VITE_PEEPSURL + "/signup", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            userFirstName,
            userLastName,
            userName,
            userEmail,
            userPassword
        }),
    })
}