const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const getJob = async() => {
    console.log("use mock:", USE_MOCK); 
    if (USE_MOCK) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const { jobs } = await import("../mocks/jobs");
        return jobs;
    }

    const response =  await fetch("https://api.indianhrm.com/public/careers/indianhrm/jobs");
    
    if(!response.ok) throw new Error("Failed to fetch jobs:" + response.status);

    return response.json();

}