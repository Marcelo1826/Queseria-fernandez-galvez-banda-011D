import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Quesería Sin Ti Maipú",
  description: "Venta de quesos artesanales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-bs-theme="dark">
      <body className="bg-dark text-light min-vh-100 d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary shadow-sm">
          <div className="container">
            <Link href="/" className="navbar-brand fw-bold text-warning">Quesería Sin Ti Maipú
            </Link>
            <div className="navbar-nav">
              <Link href="/quesos" className="nav-link text-light">Catálogo de Quesos</Link>
              <Link href="/contacto" className="nav-link text-light">Contacto</Link>
              <Link href="/carrito" className="nav-link text-light">Carrito</Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow-1">{children}</main>
        <footer className="bg-black text-center py-3 border-top border-secondary mt-auto text-secondary small">
          © {new Date().getFullYear()} Quesería Sin Ti Maipú - Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}