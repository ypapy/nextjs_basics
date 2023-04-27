import Link from "next/link";
import Image from "next/image"
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={180} height={77}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja List</Link>
        </nav>
     );
}
 
export default Navbar;