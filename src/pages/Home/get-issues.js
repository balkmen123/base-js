var axios = require('axios')

const username = 'hieutt@fabbi.io'
const password =
  'ATATT3xFfGF0Kusnm08FOUzWeWdVBOtayzZnUi_Yszb8v0eyzIVutAEoJ4eFWtgCO9uL--lnZoZeRfKfcanqpeZo4R1IcJIgSg5t8MFmOQ_Awqv8oO0ECBosCMijV6wskRZG9yxG5eVlvZ0R8IZeNMeLFGEPeKYmbAbZbXjZTvwDZGqN7XZPwxI=EB838EAF'
const domain = 'tx-bod'

const auth = {
  username: username,
  password: password,
}

//Gets all issues in a particular project using the Jira Cloud REST API
async function getIssues() {
  try {
    const baseUrl = 'https://' + domain + '.atlassian.net'
    const config = {
      method: 'get',
      url: baseUrl + '/rest/agile/1.0/sprint/266/issue',
      headers: { 'Content-Type': 'application/json' },
      auth: auth,
    }

    const response = await axios.request(config)
    console.log('response', response)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log('error: ')
    console.log(error.response.data.errors)
  }
}

module.exports = getIssues
