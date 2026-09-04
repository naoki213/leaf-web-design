import type { Metadata } from 'next';
import './globals.css';
const title='LEAF｜ホームページ制作料0円';
const description='10〜20ページ規模にも対応。制作料0円、公開後は月額2,000円固定のホームページ制作。先着3名限定。';
export const metadata: Metadata={metadataBase:new URL('https://leaf-web-design.naokinishikawa580.chatgpt.site'),title,description,openGraph:{title,description,images:['/og.png'],locale:'ja_JP',type:'website'},twitter:{card:'summary_large_image',title,description,images:['/og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
