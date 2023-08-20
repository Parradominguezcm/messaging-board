
export const loginAPICall = async (userName, userPassword) => {
    const response = await fetch(import.meta.env.VITE_PEEPSURL + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userName,
            userPassword
        }),

    });
    return await response.json()
}