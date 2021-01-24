import Layout from '../../components/layout'

const Post = () => {
  return <Layout>...</Layout>
}

export const getStaticPaths = async() => {
    // Return a list of possible value for id
}

export const getStaticProps = ({ params }) => {
    // Fetch necessary data for the blog post using params.id
}

export default Post;