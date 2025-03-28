import { GoogleGenAI } from "@google/genai";

const apiKey= `AIzaSyABQP38aAuP6t_p3qn6x-rs9tMkvdLCxyo`

const ai = new GoogleGenAI({ apiKey: apiKey});

export const fetchSeaCreatureDescription = async (creature: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `Provide a brief description using 100 words of the sea creature called ${creature}.`,
        });

        return response.text?.split("\n\n").slice(0, 10).join("\n\n") || "Description not available.";
    } catch (error) {
        console.error("Error fetching sea creature description:", error);
        return "Description not available.";
    }
};
