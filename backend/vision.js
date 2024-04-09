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
                  image_url : "https://images.unsplash.com/photo-1712371963079-6d3a77f70e50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
                }
              ]
            },
            
          ],
          max_tokens: 300,
  })
  console.log(response.choices[0].message.content)
}
main()
