import Link from 'next/link';

export function Navbar() {
  return (
    <div className='py-5 px-9 shadow-md text-lg flex justify-between'>
      <div id='logo'>
        <Link href='/'>Notesdone</Link>
      </div>

      <div id='menu'>
        <ul className='flex space-x-5'>
          <li>
            <Link href='/'>Templates</Link>
          </li>
          {/* <li>
            <Link href='/'>Build</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
