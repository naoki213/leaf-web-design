'use client';
import {useEffect,useState} from 'react';
import './phone.css';
import './iphone.css';
import './fit.css';
import './refine.css';
const samples=[
 {name:'KASANE',kind:'和菓子ブランド',src:'https://naoki213.github.io/kasane-wagashi/',note:'四季を、ひとつずつ重ねる。季節をめぐるブランド体験。'},
 {name:'nue',kind:'インナーウェア',src:'https://naoki213.github.io/nue-innerwear/',note:'今日の私に、ちょうどいい。自然体の日常を伝えるサイト。'},
 {name:'NICO',kind:'動物病院',src:'https://naoki213.github.io/NICO/',note:'安心して相談できる、親しみと信頼感のある医療サイト。'},
 {name:'NORTH',kind:'アウトドアブランド',src:'https://naoki213.github.io/NORTH/',note:'自然のスケールと躍動感を、スクロール体験に。'}
];
const faq=[['本当に制作料は無料ですか？','はい。今回の先着3名の募集では制作料は0円です。公開後の運用・サポートを月額制にしています。'],['10ページ以上でも無料ですか？','必要な情報量に応じ、10〜20ページ規模にも対応します。構成はヒアリング後に整理します。'],['月額料金は上がりますか？','ご契約期間中は月額2,000円固定です。契約内容を変える場合は、必ず事前にご相談します。'],['修正回数やサーバー代は？','作業内容、ドメイン、サーバーにより条件が異なるため、ご契約前に個別にわかりやすくご案内します。'],['解約時のサイトの扱いは？','データや公開状態を含む条件を、ご契約前に確認いただける形でご案内します。'],['ネットショップも作れますか？','必要な決済・商品管理機能を伺ったうえで、対応可否と追加条件を個別にお伝えします。']];
export default function Home(){
 const[progress,setProgress]=useState(0);
 useEffect(()=>{const onScroll=()=>setProgress(Math.min(100,scrollY/(document.documentElement.scrollHeight-innerHeight)*100));addEventListener('scroll',onScroll,{passive:true});const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('seen')),{threshold:.16});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));return()=>{removeEventListener('scroll',onScroll);io.disconnect()}},[]);
 return <main className="new-site">
  <div className="page-progress" style={{width:progress+'%'}}/>
  <header className="new-header"><a className="brand" href="#top"><img src="./leaf-logo.svg" alt="LEAF"/></a><nav><a href="#works">制作例</a><a href="#service">できること</a><a href="#price">料金</a><a href="#faq">FAQ</a></nav><a className="header-cta" href="#contact">制作を相談する</a></header>
  <section className="phone-hero" id="top">
   <div className="phone-hero-copy"><p className="kicker">LEAF WEB DESIGN / TOKYO</p><div className="hero-message"><p className="hero-offer">無料でWebサイトを制作します。</p><h1><span>あなたの仕事が伝わる、</span><i>ホームページを。</i></h1><ul className="hero-points"><li>制作料 0円</li><li>10〜20ページ対応</li><li>公開後 月額2,000円</li></ul></div><div className="hero-guide"><p>まずは、LEAFがつくれるものをご覧ください。4つの公開サイトをスマートフォンで体験できます。</p><span>横にスワイプして見る　→</span></div></div>
   <div className="phone-rail" id="works">{[...samples,...samples].map((s,i)=><a className={'phone-card phone-'+(i%4)} href={s.src} target="_blank" rel="noreferrer" key={s.name+i} aria-label={s.name+'のサイトを開く'}><div className="phone-speaker"/><div className="phone-screen"><iframe src={s.src} title="" loading={i<4?'eager':'lazy'} tabIndex={-1}/><span>サイトを見る ↗</span></div><div className="phone-meta"><small>0{(i%4)+1} / {s.kind}</small><strong>{s.name}</strong></div></a>)}</div>
   <div className="phone-hero-note"><span>制作例 04</span><p>すべて実際に公開しているサイトです。<br/>スマートフォンをタップすると各サイトへ移動します。</p></div>
  </section>
  <section className="intro leaf-belief reveal"><span className="sec-no">01 / OUR THOUGHT</span><p>LEAFが大切にしていること。</p><h2>写真、言葉、余白、動き。<br/>全部をひとつの体験に。</h2></section>
  <section className="why reveal"><span className="sec-no">02 / WHY FREE?</span><h2>作ることより、<br/>公開してからを<br/>大切にしたい。</h2><div><p>ホームページは、公開した日が完成ではありません。</p><p>事業が変われば、言葉も写真も、見せ方も変わります。だからLEAFは最初の制作費ではなく、公開後の更新・修正・改善を支える月額制にしました。</p><strong>作って終わりではなく、<br/>一緒に育てていく。</strong></div></section>
  <section className="new-price" id="price"><div className="price-title reveal"><span className="sec-no">03 / PRICE</span><p>10〜20ページ規模でも、<br/>最初の制作費はいただきません。</p><h2>制作料<span>0</span>円。</h2></div><div className="price-table"><div><small>制作規模</small><strong>10〜20ページ</strong><p>事業に必要な情報量に合わせて設計</p></div><div><small>公開後</small><strong>月額 2,000円</strong><p>ご契約期間中は固定</p></div><div><small>募集</small><strong>先着3名</strong><p>申込状況に応じて手動で更新</p></div></div></section>
  <section className="service" id="service"><div className="service-head reveal"><span className="sec-no">03</span><h2>つくるところから、<br/>育てるところまで。</h2></div><div className="service-list">{[['01','構成とデザイン','お店や事業の魅力を整理し、必要なページと見せ方を組み立てます。'],['02','スマホ対応','375pxから確認し、どの画面でも読みやすく、押しやすく整えます。'],['03','基本SEOと公開','検索に伝わる基本設定を行い、公開作業まで進めます。'],['04','公開後の修正','文章・写真・サービス内容など、公開後の変化にも相談しながら対応します。']].map(x=><article className="reveal" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
  <section className="mosaic reveal"><div className="mosaic-a"><img src="./sample-craft.png" alt="紙や陶器などの素材を並べた制作風景"/></div><div className="mosaic-b"><img src="./leaf-studio.png" alt="PCとスマートフォンでサイトを確認する様子"/></div><p>ブランドの空気を伝える写真も、<br/>サイトに合わせて一から用意します。</p></section>
  <section className="new-faq" id="faq"><div><span className="sec-no">06</span><h2>よくある<br/>ご質問。</h2><p>未確定の条件を曖昧なまま契約には進めません。</p></div><div>{faq.map((x,i)=><details key={x[0]}><summary><span>0{i+1}</span>{x[0]}<b>＋</b></summary><p>{x[1]}</p></details>)}</div></section>
  <section className="new-cta" id="contact"><div className="cta-leaf">L</div><p>先着3名限定・制作料0円</p><h2>あなたの仕事を、<br/>きちんと伝える場所を。</h2><a href="#contact-note">無料で制作を相談する <span>↗</span></a><small id="contact-note">相談したからといって、契約する必要はありません。お問い合わせ先は公開前に設定します。</small></section>
  <footer><img src="./leaf-logo.svg" alt="LEAF"/><p>ホームページを、もっと気軽に。</p><small>© 2026 LEAF WEB DESIGN</small></footer>
 </main>
}
