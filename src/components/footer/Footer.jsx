import React from 'react'
import './footer.css'

const Footer = () => {
        const d = new Date();
        let year = d.getFullYear();
  return (
    <>
    <footer>
        <span> Made with ❤ By <a href="https://www.linkedin.com/in/christtailor" target="_blank">Christ Tailor</a></span>
        <span>&copy; <a href="https://christtailor.com" target="_blank">christtailor.com</a> {year}</span>
    </footer>
    </>
  )
}

export default Footer