// const { OAuth2Client } = require('google-auth-library')
// const client = new OAuth2Client(process.env.CLIENT_ID)
// server.post("/api/v1/auth/google", async (req, res) => {
//     const { token }  = req.body
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.CLIENT_ID
//     });
//     const { name, email, picture } = ticket.getPayload();    
//     const user = await db.user.upsert({ 
//         where: { email: email },
//         update: { name, picture },
//         create: { name, email, picture }
//     })
//     res.status(201)
//     res.json(user)
// })

import api from './apiConfig.jsx'

export const showUser = async () => {
  const resp = await api.get(`/`)
  return resp.data
}

// ============ EVENT ============

export const postEvent = async (postData) => {
  const resp = await api.post(`/events`, {event: postData })
  return resp.data
}

export const showEvents = async () => {
  const resp = await api.get(`/events`)
  return resp.data
}

export const showEvent = async (id) => {
  const resp = await api.put(`/events/${id}`)
  return resp.data
}