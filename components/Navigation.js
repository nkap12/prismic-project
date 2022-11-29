import { PrismicLink, PrismicRichText } from '@prismicio/react'


export function Navigation({navigation} ) {

    return (
    <div className='text-yellow-500'>
        {/* <pre>{JSON.stringify(navigation, null, 2)}</pre> */}
     
      <ul>
        {navigation.data.slices.map((slice) => {
          return (
            <li key={slice.id}>
              <PrismicLink field={slice.primary.link}>
                <PrismicRichText field={slice.primary.name} />
              </PrismicLink>
            </li>
          )
        })}
      </ul> 
    </div>
  )
}