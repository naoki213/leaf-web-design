'use client';
import {FormEvent,useState} from 'react';
import '../refine.css';
import './contact.css';
import './contact-atelier.css';

export default function ContactPage(){
 const[confirmed,setConfirmed]=useState(false);
 const onSubmit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();setConfirmed(true)};
 return <main className="contact-page">
  <header className="contact-header"><a href="../" aria-label="LEAFトップへ戻る"><img src="../leaf-logo.svg" alt="LEAF"/></a><a href="../">トップへ戻る</a></header>
  <section className="contact-intro"><p className="contact-index">無料相談</p><div><span>お問い合わせ</span><h1>ホームページのこと、<br/>気軽にご相談ください。</h1><p>まだ内容が決まっていなくても大丈夫です。お店やサービスのこと、ホームページで伝えたいことを、わかる範囲でお聞かせください。</p></div></section>
  <section className="contact-details"><div className="contact-notes"><p>ご相談の前に</p><dl><div><dt>制作料</dt><dd>0円（税込）</dd></div><div><dt>公開後</dt><dd>月額2,000円（税込）</dd></div><div><dt>制作規模</dt><dd>10〜20ページ対応</dd></div><div><dt>別途費用</dt><dd>サーバー代・ドメイン代</dd></div></dl><small>相談したからといって、契約する必要はありません。</small></div>
   <form onSubmit={onSubmit}><div className="field"><label htmlFor="name">お名前</label><input id="name" name="name" autoComplete="name" required/></div><div className="field"><label htmlFor="company">会社名・店舗名 <small>任意</small></label><input id="company" name="company"/></div><div className="field"><label htmlFor="email">メールアドレス</label><input id="email" name="email" type="email" autoComplete="email" required/></div><div className="field"><label htmlFor="business">業種</label><input id="business" name="business" placeholder="例：美容室、飲食店、設計事務所"/></div><div className="field"><label htmlFor="url">現在のWebサイト <small>任意</small></label><input id="url" name="url" type="url" inputMode="url" placeholder="https://"/></div><div className="field"><label htmlFor="message">ご相談内容</label><textarea id="message" name="message" rows={7} placeholder="作りたいホームページについて、決まっている範囲でご記入ください" required/></div><button type="submit">入力内容を確認する <span>→</span></button>{confirmed&&<p className="form-notice" role="status">入力内容を確認しました。現在、送信先を準備しています。正式な送信機能の設定前に入力内容が外部へ送られることはありません。</p>}</form>
  </section>
  <footer className="contact-footer"><img src="../leaf-logo.svg" alt="LEAF"/><p>ホームページを、もっと気軽に。</p><small>© 2026 LEAF WEB DESIGN</small></footer>
 </main>
}
