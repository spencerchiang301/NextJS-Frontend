import './style/global.css';
import NavBar from './components/NavBar';
import SessionProviderWrapper from "@/app/SessionProviderWrapper";

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
        <SessionProviderWrapper>
            <NavBar />
            <main>
                {children}
            </main>
        </SessionProviderWrapper>
        </body>
        </html>
    );
}