import { useRouter } from 'next/router';
import nookies from 'nookies'

export async function getServerSideProps(context) {

  const cookies = nookies.get(context);
  console.log(cookies)

  console.log('nao autorizado')
  const SECRET_PASSWORD = '123456';
  const password = cookies.SECRET_PASSWORD;
  const isAuthorized = SECRET_PASSWORD === password;

  if (!isAuthorized) {
    return {
      redirect: {
        permanent: false,
        destination: '/?status=401',
      }
    }
  }

  console.log('autorizado')
  return {
    props: {}
  }
}

export default function LoggedScreen(props) {
  const router = useRouter();
  return (
    <div
      styleSheet={{
        border: '1px solid #F9703E',
        flexDirection: 'column',
        maxWidth: '400px',
        marginTop: '20%',
        marginHorizontal: 'auto',
        padding: '32px',
        borderRadius: '4px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
      }}
    >
      <p>
        Você acessou uma área protegida!
      </p>

      <button
        className='justify-self-center self-start font-black font-poppins text-1xl bg-black rounded-full text-white h-12 w-4/6 border-none outline-none hover:bg-green-light duration-150'
        onClick={() => {
          nookies.destroy(null, 'SECRET_PASSWORD');
          router.push('/')
        }}
      >
        Logout
      </button>
    </div>
  );
}
