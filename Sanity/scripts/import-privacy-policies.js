const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'ag0op45t',
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function importPrivacyPolicies() {
  try {
    const filePath = path.join(__dirname, '../static/privacy-policies.json')
    const privacyPolicies = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    
    console.log(`Importing ${privacyPolicies.length} privacy policies...`)
    
    for (const policy of privacyPolicies) {
      try {
        // Check if privacy policy already exists
        const existing = await client.fetch(
          `*[_type == "privacyPolicy" && slug.current == $slug][0]`,
          { slug: policy.slug.current }
        )
        
        if (existing) {
          console.log(`Privacy policy "${policy.title}" already exists, skipping...`)
          continue
        }
        
        // Create the privacy policy
        const result = await client.create(policy)
        console.log(`✅ Created privacy policy: ${policy.title} (${result._id})`)
        
      } catch (error) {
        console.error(`❌ Error creating privacy policy "${policy.title}":`, error.message)
      }
    }
    
    console.log('✅ Privacy policies import completed!')
    
  } catch (error) {
    console.error('❌ Error importing privacy policies:', error)
  }
}

importPrivacyPolicies()
