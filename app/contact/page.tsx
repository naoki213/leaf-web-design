import type { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: '無料相談｜LEAF',
  description: 'ホームページ制作について、まだ内容が決まっていない段階から無料でご相談いただけます。',
};

export default function Page(){return <ContactPage/>}
