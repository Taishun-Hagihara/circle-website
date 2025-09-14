import React from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import Activities from "../components/Activities.jsx";
import Contact from "../components/Contact.jsx";
import AccentToggle from "../components/AccentToggle.jsx";
import LangSwitch from "../components/LangSwitch.jsx";

const items = [
  { title: "新歓ミーティング", desc: "今年度の活動方針を紹介。", image: "https://picsum.photos/seed/a/640/400" },
  { title: "ワークショップ",   desc: "React入門ハンズオン。",       image: "https://picsum.photos/seed/b/640/400" },
  { title: "交流会",           desc: "他サークルとコラボイベント。", image: "https://picsum.photos/seed/c/640/400" }
];

const SITE = typeof window !== "undefined" ? window.location.origin : "";

export default function Ja() {
  const rMain = useRevealOnScroll({ threshold: 0.15 });
  const rJoin = useRevealOnScroll();
  const rTimeline = useRevealOnScroll();
  const rAccess = useRevealOnScroll();

  return (
    <>
      {/* React 19: ここに書いたメタは自動で <head> へ移動 */}
      <title>TalkMates｜同志社大学の学生サークル（公式）</title>
      <meta
        name="description"
        content="京都・同志社大学の学生サークル TalkMates。活動紹介・イベント・入会案内・お問い合わせはこちら。"
      />
      <link rel="canonical" href={`${SITE}/ja`} />
      <link rel="alternate" href={`${SITE}/ja`} hreflang="ja" />
      <link rel="alternate" href={`${SITE}/en`} hreflang="en" />
      <link rel="alternate" href={`${SITE}/fr`} hreflang="fr" />
      <link rel="alternate" href={`${SITE}/it`} hreflang="it" />
      <link rel="alternate" href={`${SITE}/ja`} hreflang="x-default" />

      {/* UI */}
      <nav
        className="container"
        style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 0" }}
      >
        <a href="#top" className="button" aria-label="Go to top">TalkMates</a>
        <div style={{ display:"flex", gap:12, alignItems:"center" }}>
          <LangSwitch />
          <AccentToggle />
        </div>
      </nav>

      <main id="top" className="section">
        <div className="container" data-reveal ref={rMain}>
          <h1 className="h1">
            同志社大学の学生サークル <span className="accent">TalkMates</span>（公式）
          </h1>
          <p className="p" style={{ maxWidth: 720 }}>
            京都・今出川/京田辺を拠点に活動しています。活動紹介・イベント情報・入会案内・お問い合わせはこちら。
          </p>
          <div style={{ marginTop: 24, display:"flex", gap:12, flexWrap:"wrap" }}>
            <a className="button" href="#activities">活動を見る</a>
            <a className="button" href="#contact" style={{ borderColor:"var(--accent)" }}>お問い合わせ</a>
          </div>
        </div>
      </main>

      {/* sectionを二重にしない */}
      <Activities items={items} />
      <Contact />

      {/* 追加セクション */}
      <section id="join" className="section" data-reveal ref={rJoin}>
        <div className="container">
          <h2 className="h2">入会案内｜同志社大学の学生サークル TalkMates</h2>
          <p className="p">活動の見学は随時OK。今出川/京田辺キャンパス周辺で活動しています。</p>
          <ul style={{ lineHeight:1.9 }}>
            <li>活動日：週1〜2回（学期により変動）</li>
            <li>場所：同志社大学（今出川/京田辺）と京都市内施設</li>
            <li>費用：学期ごとに徴収（見学は無料）</li>
            <li>連絡：InstagramのDM または 本ページの「お問い合わせ」から</li>
          </ul>
          <div style={{ marginTop:16 }}>
            <a className="button" href="#contact">お問い合わせへ</a>
          </div>
        </div>
      </section>

      <section id="timeline" className="section" data-reveal ref={rTimeline}>
        <div className="container">
          <h2 className="h2">活動実績（タイムライン）</h2>
          <ul style={{ listStyle:"none", padding:0, margin:0 }}>
            <li className="card" style={{ padding:16, marginBottom:12 }}>
              <strong>2025/07</strong> 学内交流会（今出川）／参加30名
            </li>
            <li className="card" style={{ padding:16, marginBottom:12 }}>
              <strong>2025/05</strong> 新歓ワークショップ（京田辺）／React入門
            </li>
            <li className="card" style={{ padding:16 }}>
              <strong>2025/04</strong> 新歓ブース出展（同志社大学）／相談会
            </li>
          </ul>
        </div>
      </section>

      <section id="access" className="section" data-reveal ref={rAccess}>
        <div className="container">
          <h2 className="h2">活動場所・アクセス（京都）</h2>
        <p className="p">主に同志社大学 今出川/京田辺キャンパス周辺の教室や公共施設を利用します。</p>
          <ul style={{ lineHeight:1.9 }}>
            <li>最寄：今出川駅／興戸駅 ほか</li>
            <li>地図は参加連絡時に共有します</li>
          </ul>
        </div>
      </section>
    </>
  );
}
