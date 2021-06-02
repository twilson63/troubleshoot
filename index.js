require('dotenv').config()
const fetch = require('node-fetch')
const hyper = require('@hyper.io/connect')

fetch(hyper.url('cache', '_query') + '?pattern=4a1dea1b-807b-4cc3-a8c4-29457e34dd96*', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${hyper.token()}`
  }
}).then(r => r.json())
  .then(r => console.log(r.docs))

//console.log(hyper.url('data', '4a1dea1b-807b-4cc3-a8c4-29457e34dd96'))
/*
fetch(hyper.url('data', '_query'), {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${hyper.token()}`
  },
  body: JSON.stringify({
    selector: {
      type: 'campaign',
      id: '4a1dea1b-807b-4cc3-a8c4-29457e34dd96'
    },
    limit: 2000
  })
})
  .then(r => r.json())
  .then(result => {
    result.docs.map(campaign => {
      console.log({
        id: campaign.id,
        limits: campaign.limits,
        filters: campaign.filters
      })
    })
  })
*/
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