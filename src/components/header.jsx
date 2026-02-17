// src/components/Header.jsx
import { useState } from 'react';

export default function Header() {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    // Функция плавного скролла
    const scrollToSection = (e, href) => {
        e.preventDefault(); // отключаем стандартный прыжок браузера

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // плавная прокрутка
                block: 'start', // прокрутить к началу секции
            });
        }
    };

    return (
        <header className="header">
            <div className="header-inner">
                <nav>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="nav-link"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}