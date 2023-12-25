import openai from "./gpt";

const query = async (prompt: string, chatId: string,model: string) => {
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    .then((res)=> res.data.choices[0].text)
    .catch(
        (err)=>
        `AI was unable to find answer for that from queryApi.ts lib folder! 
        (Error: ${err.message})`
    );

    return res;
};

export default query;