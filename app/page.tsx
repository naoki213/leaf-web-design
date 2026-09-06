'use client';
import {useEffect} from 'react';
import './phone.css';
import './iphone.css';
import './fit.css';
import './refine.css';
import './atelier.css';
const samples=[
 {name:'KASANE',kind:'和菓子ブランド',src:'https://naoki213.github.io/kasane-wagashi/',note:'四季を、ひとつずつ重ねる。季節をめぐるブランド体験。'},
 {name:'nue',kind:'インナーウェア',src:'https://naoki213.github.io/nue-innerwear/',note:'今日の私に、ちょうどいい。自然体の日常を伝えるサイト。'},
 {name:'NICO',kind:'動物病院',src:'https://naoki213.github.io/NICO/',note:'安心して相談できる、親しみと信頼感のある医療サイト。'},
 {name:'NORTH',kind:'アウトドアブランド',src:'https://naoki213.github.io/NORTH/',note:'自然のスケールと躍動感を、スクロール体験に。'},
 {name:'LUMÉ',kind:'美容室',src:'https://naoki213.github.io/LUME/',note:'髪から日常を美しく。余白と動きで世界観を伝える美容室サイト。'},
 {name:'KITO',kind:'設計事務所',src:'https://naoki213.github.io/KITO/',note:'暮らしから家を考える。静かな写真表現を生かした建築サイト。'}
];
const faq=[['本当に制作料は無料ですか？','はい。今回の先着3名の募集では、制作料は0円（税込）です。公開後の運用・サポートを月額制にしています。'],['10ページ以上でも無料ですか？','必要な情報量に応じ、10〜20ページ規模にも対応します。構成はヒアリング後に整理します。'],['月額料金は上がりますか？','ご契約期間中は月額2,000円（税込）固定です。契約内容を変える場合は、必ず事前にご相談します。'],['修正回数は決まっていますか？','修正内容や作業量により対応範囲が異なるため、ご契約前に個別にわかりやすくご案内します。'],['サーバー代・ドメイン代は？','月額料金とは別に、サーバー代とドメイン代が必要です。利用するサービスやドメインに応じた費用を、ご契約前にご案内します。'],['解約時のサイトの扱いは？','データや公開状態を含む条件を、ご契約前に確認いただける形でご案内します。']];
export default function Home(){
 useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('seen')),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));return()=>io.disconnect()},[]);
 return <main className="new-site">
  <header className="new-header"><a className="brand" href="#top"><img src="./leaf-logo.svg" alt="LEAF"/></a><nav><a href="#about">LEAFについて</a><a href="#works">制作実績</a><a href="#service">できること</a><a href="#price">料金</a><a href="#faq">よくある質問</a></nav><a className="header-cta" href="./contact/">無料で相談する <span>→</span></a></header>
  <section className="image-hero" id="top"><div className="image-hero-copy"><p className="hero-label">個人のお店・小さな会社のためのホームページ制作</p><h1>小さなお店にも、<br/>ちゃんと伝わる<br/>ホームページを。</h1><p className="hero-lead">お店やサービスの魅力を整理し、<br/>見る人にきちんと届く形に整えます。</p><div className="hero-rates"><p><small>制作料</small><b>0</b><span>円</span></p><i></i><p><small>公開後</small><em>月額</em><b>2,000</b><span>円</span><small>税込</small></p></div><div className="hero-action"><a href="./contact/">無料で相談する <span>→</span></a><small>まだ内容が決まっていなくても大丈夫です。</small></div></div><div className="hero-photo"><img src="./leaf-hero-v2.png" alt="自然光が入る部屋に置かれた枝ものと花器"/><span>ホームページを、もっと身近に。</span></div></section>
  <section className="phone-hero" id="works">
   <div className="works-heading"><p className="sec-no">制作実績　01—06</p><h2>こんなホームページを、<br/>制作しています。</h2><div><p>業種や雰囲気に合わせて、一つひとつデザインしています。</p><span>横にスワイプしてご覧ください　→</span></div></div>
   <div className="phone-rail">{[...samples,...samples].map((s,i)=><a className={'phone-card phone-'+(i%samples.length)} href={s.src} target="_blank" rel="noreferrer" key={s.name+i} aria-label={s.name+'のサイトを開く'}><div className="phone-speaker"/><div className="phone-screen"><iframe src={s.src} title="" loading={i<samples.length?'eager':'lazy'} tabIndex={-1}/><span>サイトを見る ↗</span></div><div className="phone-meta"><small>{String((i%samples.length)+1).padStart(2,'0')} / {s.kind}</small><strong>{s.name}</strong></div></a>)}</div>
   <div className="phone-hero-note"><span>制作例 06</span><p>すべて実際に公開しているサイトです。<br/>スマートフォンをタップすると各サイトへ移動します。</p></div>
  </section>
  <section className="intro leaf-belief reveal" id="about"><span className="sec-no">LEAFについて</span><p>はじめやすく、長く付き合えるホームページ制作を。</p><h2>お店の空気まで、<br/>きちんと伝わるように。</h2></section>
  <section className="why reveal"><div className="why-photo"><img src="./leaf-studio.png" alt="明るい仕事場でホームページを確認する様子"/></div><div className="why-copy"><span className="sec-no">制作料を0円にする理由</span><h2>公開してからも、<br/>一緒に育てたい。</h2><p>ホームページは、公開した日が完成ではありません。お店の変化に合わせて、言葉や写真を整えていくものだと考えています。</p><p>LEAFでは高額な初期費用ではなく、公開後の運用や修正を月額制で支える仕組みにしました。</p></div></section>
  <section className="new-price" id="price"><div className="price-heading reveal"><span className="sec-no">03</span><p>料金</p><h2>必要な費用を、<br/>わかりやすく。</h2></div><div className="rate-ledger reveal"><div className="rate rate-zero"><small>ホームページ制作料</small><p><b>0</b><em>円</em></p><span>税込</span></div><div className="rate rate-monthly"><small>公開後の運用・サポート</small><p><em>月額</em><b>2,000</b><em>円</em></p><span>税込・ご契約期間中は固定</span></div></div><dl className="price-facts"><div><dt>制作規模</dt><dd>10〜20ページ対応</dd></div><div><dt>募集数</dt><dd>先着3名</dd></div><div><dt>別途必要な費用</dt><dd>サーバー代・ドメイン代</dd></div></dl></section>
  <section className="service" id="service"><div className="service-head reveal"><span className="sec-no">できること</span><h2>必要なものを、<br/>ひとつずつ丁寧に。</h2><p>ご相談から公開、その後の修正までまとめてお手伝いします。</p></div><div className="service-list">{[['01','構成とデザイン','お店やサービスの魅力を整理し、必要なページと見せ方を考えます。'],['02','スマートフォン対応','小さな画面でも読みやすく、迷わず操作できるように整えます。'],['03','基本的なSEO対策','検索エンジンに内容が伝わるよう、基本の設定を行います。'],['04','問い合わせフォーム','サイトを見た方が、そのまま相談できる窓口を用意します。'],['05','公開作業','制作したサイトを、Web上で実際に見られる状態まで整えます。'],['06','公開後の修正','文章や写真、サービス内容の変更もご相談いただけます。']].map(x=><article className="reveal" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
  <section className="vision-banner reveal"><img src="./leaf-sky.png" alt="淡い青空と新緑の枝"/><div><p>伝えたいことを、少しずつ形に。</p><h2>ホームページと一緒に、<br/>お店のこれからを育てていく。</h2><a href="./contact/">無料で相談する <span>→</span></a></div></section>
  <section className="mosaic reveal"><div className="mosaic-a"><img src="./sample-craft.png" alt="紙や陶器などの素材を並べた制作風景"/></div><p><span>写真と言葉も大切に。</span>お店らしさが伝わる見せ方を、<br/>一緒に考えます。</p></section>
  <section className="flow"><div className="flow-heading reveal"><span className="sec-no">05</span><p>制作の流れ</p><h2>相談から公開まで、<br/>ひとつずつ。</h2></div><ol>{['お問い合わせ','ヒアリング','構成・デザイン','制作','確認・修正','公開'].map((x,i)=><li className="reveal" key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></li>)}</ol></section>
  <section className="new-faq" id="faq"><div><span className="sec-no">06</span><h2>よくある<br/>ご質問。</h2><p>未確定の条件を曖昧なまま契約には進めません。</p></div><div>{faq.map((x,i)=><details key={x[0]}><summary><span>0{i+1}</span>{x[0]}<b>＋</b></summary><p>{x[1]}</p></details>)}</div></section>
  <section className="new-cta" id="contact"><p>先着3名限定</p><h2>お店のこと、<br/>まずは聞かせてください。</h2><div><p><span>制作料</span><b>0</b>円</p><p><span>公開後</span>月額 <b>2,000</b>円（税込）</p></div><a href="./contact/">無料で相談する <span>→</span></a><small>相談だけでも大丈夫です。サーバー代・ドメイン代は別途必要です。</small></section>
  <footer><img src="./leaf-logo.svg" alt="LEAF"/><p>ホームページを、もっと気軽に。</p><small>© 2026 LEAF WEB DESIGN</small></footer>
 </main>
}
