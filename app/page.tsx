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
 {name:'NORTH',kind:'アウトドアブランド',src:'https://naoki213.github.io/NORTH/',note:'自然のスケールと躍動感を、スクロール体験に。'},
 {name:'LUMÉ',kind:'美容室',src:'https://naoki213.github.io/LUME/',note:'髪から日常を美しく。余白と動きで世界観を伝える美容室サイト。'},
 {name:'KITO',kind:'設計事務所',src:'https://naoki213.github.io/KITO/',note:'暮らしから家を考える。静かな写真表現を生かした建築サイト。'}
];
const faq=[['本当に制作料は無料ですか？','はい。今回の先着3名の募集では、制作料は0円（税込）です。公開後の運用・サポートを月額制にしています。'],['10ページ以上でも無料ですか？','必要な情報量に応じ、10〜20ページ規模にも対応します。構成はヒアリング後に整理します。'],['月額料金は上がりますか？','ご契約期間中は月額2,000円（税込）固定です。契約内容を変える場合は、必ず事前にご相談します。'],['修正回数は決まっていますか？','修正内容や作業量により対応範囲が異なるため、ご契約前に個別にわかりやすくご案内します。'],['サーバー代・ドメイン代は？','月額料金とは別に、サーバー代とドメイン代が必要です。利用するサービスやドメインに応じた費用を、ご契約前にご案内します。'],['解約時のサイトの扱いは？','データや公開状態を含む条件を、ご契約前に確認いただける形でご案内します。']];
export default function Home(){
 const[progress,setProgress]=useState(0);
 useEffect(()=>{const onScroll=()=>setProgress(Math.min(100,scrollY/(document.documentElement.scrollHeight-innerHeight)*100));addEventListener('scroll',onScroll,{passive:true});const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('seen')),{threshold:.16});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));return()=>{removeEventListener('scroll',onScroll);io.disconnect()}},[]);
 return <main className="new-site">
  <div className="page-progress" style={{width:progress+'%'}}/>
  <header className="new-header"><a className="brand" href="#top"><img src="./leaf-logo.svg" alt="LEAF"/></a><nav><a href="#works">制作例</a><a href="#service">できること</a><a href="#price">料金</a><a href="#faq">FAQ</a></nav><a className="header-cta" href="./contact/">制作を相談する</a></header>
  <section className="phone-hero" id="top">
   <div className="phone-hero-copy"><p className="kicker">ホームページ制作 LEAF</p><div className="hero-message"><p className="hero-offer">制作料0円で、Webサイトをつくります。</p><h1><span>あなたの仕事が伝わる、</span><i>ホームページを。</i></h1><ul className="hero-points"><li><b>0円</b> 制作料・税込</li><li><b>10〜20</b> ページ対応</li><li><b>2,000円</b> 公開後の月額・税込</li></ul></div><div className="hero-guide"><p>まずは、LEAFがつくれるものをご覧ください。公開中の6サイトを、そのままスマートフォンで体験できます。</p><span>横にスワイプして見る　→</span></div></div>
   <div className="phone-rail" id="works">{[...samples,...samples].map((s,i)=><a className={'phone-card phone-'+(i%samples.length)} href={s.src} target="_blank" rel="noreferrer" key={s.name+i} aria-label={s.name+'のサイトを開く'}><div className="phone-speaker"/><div className="phone-screen"><iframe src={s.src} title="" loading={i<samples.length?'eager':'lazy'} tabIndex={-1}/><span>サイトを見る ↗</span></div><div className="phone-meta"><small>{String((i%samples.length)+1).padStart(2,'0')} / {s.kind}</small><strong>{s.name}</strong></div></a>)}</div>
   <div className="phone-hero-note"><span>制作例 06</span><p>すべて実際に公開しているサイトです。<br/>スマートフォンをタップすると各サイトへ移動します。</p></div>
  </section>
  <section className="intro leaf-belief reveal"><span className="sec-no">01</span><p>LEAFが大切にしていること。</p><h2>写真、言葉、余白、動き。<br/>全部をひとつの体験に。</h2></section>
  <section className="why reveal"><span className="sec-no">02</span><h2>作ることより、<br/>公開してからを<br/>大切にしたい。</h2><div><p>ホームページは、公開した日が完成ではありません。</p><p>事業が変われば、言葉も写真も、見せ方も変わります。だからLEAFは最初の制作費ではなく、公開後の更新・修正・改善を支える月額制にしました。</p><strong>作って終わりではなく、<br/>一緒に育てていく。</strong></div></section>
  <section className="new-price" id="price"><div className="price-heading reveal"><span className="sec-no">03</span><p>料金</p><h2>必要な費用を、<br/>わかりやすく。</h2></div><div className="rate-ledger reveal"><div className="rate rate-zero"><small>ホームページ制作料</small><p><b>0</b><em>円</em></p><span>税込</span></div><div className="rate rate-monthly"><small>公開後の運用・サポート</small><p><em>月額</em><b>2,000</b><em>円</em></p><span>税込・ご契約期間中は固定</span></div></div><dl className="price-facts"><div><dt>制作規模</dt><dd>10〜20ページ対応</dd></div><div><dt>募集数</dt><dd>先着3名</dd></div><div><dt>別途必要な費用</dt><dd>サーバー代・ドメイン代</dd></div></dl></section>
  <section className="service" id="service"><div className="service-head reveal"><span className="sec-no">04</span><h2>つくるところから、<br/>育てるところまで。</h2></div><div className="service-list">{[['01','構成とデザイン','お店や事業の魅力を整理し、必要なページと見せ方を組み立てます。'],['02','スマートフォン対応','375pxから確認し、どの画面でも読みやすく、押しやすく整えます。'],['03','基本SEO対策','検索に内容が伝わるよう、タイトルや説明文などの基本設定を行います。'],['04','問い合わせフォーム','相談や予約につながる窓口を、サイトの内容に合わせて設計します。'],['05','公開作業','最終確認を行い、Web上で見られる状態まで進めます。'],['06','公開後の修正','文章・写真・サービス内容など、公開後の変化にも相談しながら対応します。']].map(x=><article className="reveal" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
  <section className="mosaic reveal"><div className="mosaic-a"><img src="./sample-craft.png" alt="紙や陶器などの素材を並べた制作風景"/></div><div className="mosaic-b"><img src="./leaf-studio.png" alt="PCとスマートフォンでサイトを確認する様子"/></div><p>ブランドの空気を伝える写真も、<br/>サイトに合わせて一から用意します。</p></section>
  <section className="flow"><div className="flow-heading reveal"><span className="sec-no">05</span><p>制作の流れ</p><h2>相談から公開まで、<br/>ひとつずつ。</h2></div><ol>{['お問い合わせ','ヒアリング','構成・デザイン','制作','確認・修正','公開'].map((x,i)=><li className="reveal" key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></li>)}</ol></section>
  <section className="new-faq" id="faq"><div><span className="sec-no">06</span><h2>よくある<br/>ご質問。</h2><p>未確定の条件を曖昧なまま契約には進めません。</p></div><div>{faq.map((x,i)=><details key={x[0]}><summary><span>0{i+1}</span>{x[0]}<b>＋</b></summary><p>{x[1]}</p></details>)}</div></section>
  <section className="new-cta" id="contact"><p>先着3名限定・制作料0円（税込）</p><h2>ホームページ、<br/>そろそろ作りませんか。</h2><a href="./contact/">無料で制作を相談する <span>→</span></a><small>相談したからといって、契約する必要はありません。サーバー代・ドメイン代は別途必要です。</small></section>
  <footer><img src="./leaf-logo.svg" alt="LEAF"/><p>ホームページを、もっと気軽に。</p><small>© 2026 LEAF WEB DESIGN</small></footer>
 </main>
}
