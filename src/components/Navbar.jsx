/*

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
              <img
                alt="Your Company"
                src="https://baxtiyor-abduraim0v.vercel.app/logo.png"
                className="h-8 w-8"
              />
            <div className="nav-link hidden sm:ml-6 sm:block">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'current' : 'not-current',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
          </div>
    </nav>
  )
}
