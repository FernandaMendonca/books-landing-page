import NextLink from 'next/link';
import { useRouter } from 'next/router';

// dica dos paths estáticos
export async function getStaticPaths() {

  const data = await fetch('https://fakeapi-omariosouto.vercel.app/api/posts')
    .then((res) => res.json())

  const paths = data.posts.map((postAtual) => {
    return { params: { id: `${postAtual.id}` } };
  })

  return {
    paths: paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id

  const data = await fetch(`https://fakeapi-omariosouto.vercel.app/api/posts/${id}`)
    .then((res) => res.json());

  const post = data;

  // const post = data.posts.find((currentPost) => {
  //   if (currentPost.id === id) {
  //     return true;
  //   }
  //   return false;
  // })

  return {
    props: {
      id: post.id,
      title: post.title,
      date: post.date,
      content: post.content,
    }
  }
}

export default function PostByIdScreen(props) {
  const router = useRouter();
  const post = {
    title: props.title,
    date: props.date,
    content: props.content,
  };

  if (router.isFallback) {
    return 'Essa página não existe!';
  }

  return (
    <div
      style={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '700px',
        padding: '16px',
      }}
    >
      {/* Cabeçalho */}
      <p
        variant="heading2"
        tag="h1"
        style={{ color: '#F9703E', justifyContent: 'center', lineHeight: '1.2' }}
      >
        {post.title}
      </p>
      <p style={{ color: '#F9703E', justifyContent: 'center', borderBottom: '1px solid #F9703E', paddingVertical: '16px', marginVertical: '16px' }}>
        {post.date}
      </p>

      {/* Área de Conteudo */}
      <div
        syles={{
          flexDirection: 'column',
        }}
      >
        <p>
          {post.content}
        </p>

        {post.video && <iframe style={{ marginTop: '32px', minHeight: '400px' }} src={post.video} />}
      </div>


      {/* Rodapé */}
      <div
        style={{
          marginTop: '16px',
          padding: '16px',
          borderTop: '1px solid #F9703E',
          color: '#F9703E',
        }}
      >
        <NextLink href="/" passHref>
          Voltar para a home
        </NextLink>
      </div>
    </div>
  )
}
