import logo from "../assets/logo2.png"

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
    <nav className="navbar">
      <div className="logo">
        <img alt="Your Company" src={logo} className="l-img" />
      </div>
        <div className="nav-link-container"> {navigation.map((item) => (
          <a key={item.name} href={item.href} aria-current={item.current ? 'page' : undefined} className={classNames( item.current ? 'current' : 'not-current', )}>
            {item.name}
          </a>
          ))}
      </div>
    </nav>
  )
}