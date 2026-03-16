export default function Container({ children }) {
    return (
        <div className="container">
            <h1>Biodata Diri Saya</h1>

            <div className="content">
                {children}
            </div>

            <footer className="footer-text">
                <p>2026 - Politeknik Caltex riau</p>
            </footer>
        </div>
    );
}