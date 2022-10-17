import { useRouter } from 'next/router';

export default function LoggedScreen() {
  const router = useRouter();
  return (
    <div
      style={{
        border: '1px solid #F9703E',
        flexDirection: 'column',
        width: '400px',
        marginTop: '20%',
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
          router.push('/')
          nookies.destroy(null, 'SECRET_PASS');
        }}
      >log out
      </button>
    </div>
  );
}


export function getStaticProps(context) {
  const MAIN_PASSWORD = '123456';
  const cookies = nookies.get(context);

  console.log('[static] Cookies', cookies);

  return {
    props: {},
  }
}
