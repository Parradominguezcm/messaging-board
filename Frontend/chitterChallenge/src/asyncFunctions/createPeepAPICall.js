

export const createPeepAPICall = async (userName, peepMessage) => {
    return await fetch(import.meta.env.VITE_PEEPSURL + "/makePeep", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            peepMessage,
            peepDate: new Date(),
            peepAuthor: userName,
        }),
    });
}