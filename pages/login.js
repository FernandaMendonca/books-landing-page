import React from 'react';
import { useRouter } from 'next/router';
import nookies from 'nookies'

export default function Login() {
  nookies.set(null, 'SECRET_PASS', '123456', {
    maxAge: 30 * 24 * 60 * 60,
    path: '/login'
  })
  const [password, setPassword] = React.useState('123456');
  const router = useRouter();
  console.log('PrivatePage', router);
  return (
    <div
      style={{
        border: '1px solid #F9703E',
        flexDirection: 'column',
        marginTop: '20%',
        padding: '32px',
        borderRadius: '4px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (password) {
            nookies.set(null, 'SECRET_PASSWORD', password, {
              maxAge: 30 * 24 * 60 * 60,
              path: '/',
            });
            router.push('/logged-area');
          } else {
            alert('Informe uma senha!');
          }
        }}
      >
        <div style={{ flexDirection: 'column' }}>
          <input
            label="Qual é a senha secreta?"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='justify-self-center self-start font-black font-poppins text-1xl bg-black rounded-full text-white h-12 w-4/6 border-none outline-none hover:bg-green-light duration-150'
          >Submit</button>
        </div>
      </form>
    </div>
  );
}
