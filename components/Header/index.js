import { Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from '../SearchBox';


export default function Header () {
  return (
    <Navbar bg="white" expand="lg" className="border-botton border-custom-gray">
      <Navbar.Brand className="mx-3">
        <Link href="/restaurants">
          <a>
            <Image
              src="/logo.png"
              alt="FoodDelivery"
              width={200}
              height={44}
              className="clickable_effect"
            />
          </a>
        </Link>
      </Navbar.Brand>
      <SearchBox />
    </Navbar>
  )
}