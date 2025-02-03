'use client';

import { useTheme } from 'next-themes';
import React from 'react'
import {FaMoon, FaSun} from 'react-icons/fa';
const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();
  return (
    <>{theme === 'dark' ? (
        <FaSun onClick={() =>setTheme('light')} className='cursor-pointer'/>
    ):(
        <FaMoon onClick={() =>setTheme('dark')} className='cursor-pointer'/>
    )}</>
  )
}

export default ThemeSwitcher