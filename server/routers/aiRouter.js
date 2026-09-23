import express from 'express'
import services from '../models/Services.js'
import claude from '../calude.js'
import axios from 'axios'

const router = express.Router ()

router.post ("/", async (req,res)=> {
  // Step 1: Finding user question from client side
  console.log ("Request come from client for ai")
  let userQuestion = req.body.question

  // Step 2: Finding all services from mongoDB
  const servicesDB = await services.find()

  // Step 3: Createing prompt message
  // prompt = "description of your request" + "user question" + "All information from DB"
  const prompt = 
    `You are an assistant for finding a service. Let me know which service you have for user 
    Question of the user: ${userQuestion} 
    Available services is listes=d here as well ${JSON.stringify(servicesDB)}
  `
  console.log ("connecting to calude api ....")
  
  let aiResponse = await axios.post ("https://api.anthropic.com/v1/messages", 
    { 
        model: "claude-sonnet-4-6", 
        max_tokens: 500, 
        messages: [ 
          { 
            role: "user", 
            content: prompt 
          } 
        ] 
      }, 
      { 
        headers: { 
          "x-api-key": process.env.CLAUDE_API_KEY, 
          "anthropic-version": "2023-06-01", 
          "content-type": "application/json" 
        } 
      } 
  )

  console.log ("About to read the API")
  console.log (aiResponse.data.content[0].text)
  res.send (aiResponse.data.content[0].text)

})

export default router;