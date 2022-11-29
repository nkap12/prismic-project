export async function Page({ navigation, page }) {
    // The `navigation` document can be used here.
  }
  
  export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData })
  
    const [navigation, page] = await Promise.all([
      client.getByUID('navigation', 'header'),
      client.getByUID('page', params.uid),
    ])
  
    return {
      props: {
        navigation,
        page,
      },
    }
  }