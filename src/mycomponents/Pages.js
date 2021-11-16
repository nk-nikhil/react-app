import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export function Home() {
    return (
        <div>
            <h1>Company Menu</h1>
            <nav>
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>About</h1>
            <Outlet />
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}

export function History() {
    return (
        <div>
            About History
        </div>
    )
}

export function Document() {
    return (
        <div>
            About Documents
        </div>
    )
}
