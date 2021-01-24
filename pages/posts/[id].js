import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

const Post = () => {
  return <Layout>...</Layout>
}

export const getStaticPaths = async() => {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = ({ params }) => {
    // Fetch necessary data for the blog post using params.id
}

export default Post;