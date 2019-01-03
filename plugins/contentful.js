const contenful = require("contentful")

const client = contenful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

module.exports = client
