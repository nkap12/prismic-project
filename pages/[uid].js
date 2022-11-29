import { Navigation } from '../components/Navigation'
import { about} from './about'

export async function Page({ navigation, page }) {
  return (
    <div>
      <Navigation navigation={navigation} />
      {about}
    </div>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const [navigation, page] = await Promise.all([
    client.getByUID('navigation_menu', 'header'),
    client.getByUID('page', params.uid),
  ])

  return {
    props: {
      navigation,
      page,
    },
  }
}