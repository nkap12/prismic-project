import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import prismicio from "../prismicio";
import { components } from "../slices";
import * as prismicH from "@prismicio/helpers";
import { Navigation } from "../components/Navigation";

export default function Page({ page, navigation }) {
  return (
    <div>
      <PrismicRichText field={page.data.title} />
      <Navigation navigation={navigation} />
      {/* <SliceZone slices={navigation.data.slices} components ={components} /> */}
      <SliceZone slices={page.data.slices} components={components} />     
    </div>
  );
}

/** @param {import("next").GetStaticPropsContext} */
export async function getStaticProps({}) {
  const client = prismic.createClient(sm.apiEndpoint);

  const page = await client.getByUID("page", "about");
  const navigation = await client.getByUID("navigation", "navigation");

  return {
    props: {
      navigation,
      page,
    },
  };
}




