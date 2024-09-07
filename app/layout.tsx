import './style/global.css';
import NavBar from './components/NavBar';

export const metadata = {
    title: 'My Website',
    description: 'A website with authentication',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <NavBar />
        <main>{children}</main>
        </body>
        </html>
    );
}