require('dotenv').config()
const fetch = require('node-fetch')
const hyper = require('@hyper.io/connect')

console.log(hyper.url('data', 'ckpfg0hyn00k01lvkgmg05w58'))

// fetch(hyper.url('data', 'ckpfg0hyn00k01lvkgmg05w58'), {
//   headers: { Authorization: `Bearer ${hyper.token()}` }
// })
//   .then(r => r.json())
//   .then(console.log)

function createNewLead() {
  const lead = {
    type: 'lead',
    company: 'TESTING BL API CALLS',
    industry: 'manufacturing',
    annual_revenue: 100000,
    founded: { month: 'January', year: '2015' },
    contact: {
      firstName: 'Lucius',
      lastName: 'Bosco',
      email: 'Greta95@yahoo.com',
      phone: '362-606-2549'
    },
    address: { city: 'Jazmynemouth', state: 'SC', zip: '29466' },
    credit_score: 'Poor (639 or less)',
    status: 'matched',
    loan: { reason: 'expansion', amount: 50000 },
    created: { by: 'sys', on: '2021-06-02T12:25:30.016Z' },
    updated: { by: 'sys', on: '2021-06-02T12:25:30.016Z' }
  }
  
}