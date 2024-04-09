const OpenAI = require("openai")
require("dotenv").config()
const openAPIKEY = process.env.apikey
const openai = new OpenAI({ apiKey: openAPIKEY })
async function main(){
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
      messages: [
            {
              role: 'user',
              content: [
                {
                  type:"text",
                  text:"What is this image of?"
                },
                {
                  type:"image_url",
                  image_url : "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJsfGVufDB8fDB8fHww"
                }
              ]
            },
            
          ],
          max_tokens: 300,
  })
  console.log(response.choices[0].message.content)
}
main()
