export default function Container({ children }) {
    return (
        <div className="container">
            <h1>Biodata Diri Saya</h1>

            {children}

            <footer>
                <p>2026 - Politeknik Caltex Riau</p>
            </footer>
        </div>
    );
}