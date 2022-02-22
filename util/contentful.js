import {createClient} from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchProducts() {
    const entries = await client.getEntries({
        content_type: 'product',
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchProducts }
