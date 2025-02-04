/*
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <h1 className="logo">Blog App</h1>
      <div className="nav-link-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
*/



const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Profile', href: '/profile', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav className="navbar w-100vh">
          <div className="logo flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://baxtiyor-abduraim0v.vercel.app/logo.png"
                className="h-8 w-8"
              />
            </div>


            <div className="nav-link hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
    </nav>
  )
}
