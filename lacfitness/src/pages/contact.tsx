import Layout from "../components/Layouts/layout";
import Section from "../components/Layouts/section";
import QueryForm from "../components/QueryForm/queryform";

const ContactPage = () => {

  return(
    <>
    <Layout>
      <Section title="Contact">
        <QueryForm/>
      </Section>
    </Layout>
    </>
  )
}

export default ContactPage;