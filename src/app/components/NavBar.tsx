import Link from 'next/link'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar">

                <Link href="/">Home</Link>
                <a href="#personal-info">Personal Info</a>
                <a href="#education">Education</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#resume">View Resume</a>
            </nav>
        </div>
    )
}