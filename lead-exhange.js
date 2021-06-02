const fetch = require('node-fetch')
const api = 'https://lead-exchange.vercel.app/api'
const token = process.env.TOKEN

/* get outcome
fetch(api + '/outcomes/60bc9a9b-3a1f-4f51-917e-e448999efbbf', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
  .then(r => r.json())
  .then(outcome => console.log(JSON.stringify(outcome, null, 2)))
*/
/* match lead
fetch(api + '/match/ckpfjnz3c00k51lvkhiesg2yc', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
  .then(r => r.json())
  .then(console.log)
*/
/* create lead

fetch(api + '/leads', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({
    type: 'lead',
    company: 'TESTING BL API CALLS',
    industry: 'manufacturing',
    annual_revenue: 100000,
    founded: { month: 'January', year: '2015' },
    contact: {
      firstName: 'Test',
      lastName: 'Bosco',
      email: 'Test@yahoo.com',
      phone: '362-606-2549'
    },
    address: { city: 'Jazmynemouth', state: 'SC', zip: '29466' },
    credit_score: 'Poor (639 or less)',
    status: 'matched',
    loan: { reason: 'expansion', amount: 50000 },
    created: { by: 'sys', on: '2021-06-02T12:25:30.016Z' },
    updated: { by: 'sys', on: '2021-06-02T12:25:30.016Z' }
  })
})
  .then(r => r.json())
  .then(console.log)
  */