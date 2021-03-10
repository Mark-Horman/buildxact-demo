import React from 'react';
import { Link } from 'gatsby';
import './layout.css';

const Layout = ({children}) => {
    return (
        <>
            <div className={'flex-container'}>
                <nav className={'flex-item'}>
                    <Link to='/Plans/plans'>Plans</Link>
                    <Link to='/Documents/documents'>Documents</Link>
                </nav>
                <main className={'flex-item'}>
                    {children}
                </main>
            </div>
        </>
    )
}
export default Layout
