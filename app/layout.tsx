import './style/global.css';
import NavBar from './components/NavBar';
import SessionProviderWrapper from "@/app/SessionProviderWrapper";
import Head from 'next/head';


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
        <Head>
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
        </Head>
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