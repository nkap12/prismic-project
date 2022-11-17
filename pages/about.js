
import { SliceZone } from '@prismicio/react'
import * as prismic from "@prismicio/client"
import sm from "../sm.json"
import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = prismic.createClient(sm.apiEndpoint)

  const page = await client.getByUID('page', "about")

  return {
    props: {
      page,
    },
  }
}