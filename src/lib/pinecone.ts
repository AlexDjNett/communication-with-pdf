import { Pinecone } from '@pinecone-database/pinecone'

const pinecone = new Pinecone({
  apiKey: process.env.PINECON_API_KEY!,
  environment: 'gcp-starter',
})
