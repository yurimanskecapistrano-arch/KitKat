"use client";

import { useEffect, useState } from "react";

const archiveItems = [
  { id: "01", label: "OUR STORY", meta: "TIMELINE / 001", symbol: "✦" },
  { id: "02", label: "MEMORIES", meta: "MEDIA / 024", symbol: "▧" },
  { id: "03", label: "LETTERS", meta: "MAIL / 010", symbol: "✉" },
  { id: "04", label: "OUR MUSIC", meta: "AUDIO / 013", symbol: "♫" },
  { id: "05", label: "OUR UNIVERSE", meta: "MAP / ∞", symbol: "◌" },
  { id: "06", label: "THE FUTURE", meta: "TODO / ???", symbol: "☆" },
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [boot, setBoot] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const started = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Date.now() - started;
      setBoot(Math.min(100, Math.floor(elapsed / 18)));
      if (elapsed > 1900) window.clearInterval(timer);
    }, 50);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("pt-BR", { hour12: false }));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className={`archive ${entered ? "is-entered" : ""}`}>
      <div className="noise" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      {!entered && (
        <section className="boot-screen" aria-label="Carregamento do arquivo">
          <div className="boot-top">
            <span>SYS.KITKAT</span>
            <span>ARCHIVE NODE // 01</span>
          </div>

          <div className="boot-center">
            <div className="angel-mark" aria-hidden="true">
              <span className="halo" />
              <span className="wing wing-left" />
              <span className="wing wing-right" />
              <span className="angel-core">♡</span>
            </div>
            <p className="eyebrow">PERSONAL ARCHIVE / PRIVATE</p>
            <h1>KITKAT</h1>
            <p className="subtitle">OUR LITTLE UNIVERSE</p>

            <div className="loading-copy">
              <span>INITIALIZING ARCHIVE...</span><b>{boot}%</b>
            </div>
            <div className="progress"><span style={{ width: `${boot}%` }} /></div>
            <div className="boot-log">
              <span>{boot > 18 ? "✓ MEMORY INDEX FOUND" : "· SEARCHING MEMORY INDEX"}</span>
              <span>{boot > 42 ? "✓ TWO PEOPLE DETECTED" : "· DETECTING TWO PEOPLE"}</span>
              <span>{boot > 70 ? "✓ LOVE.DAT LOADED" : "· LOADING LOVE.DAT"}</span>
            </div>

            <button className="enter-button" onClick={() => setEntered(true)} disabled={boot < 100}>
              <span>[ ENTER ARCHIVE ]</span>
              <small>press to remember</small>
            </button>
          </div>

          <div className="boot-bottom">
            <span>NO. 000001 / MADE FOR TWO</span>
            <span>© 20XX — FOREVER-ish</span>
          </div>
        </section>
      )}

      {entered && (
        <section className="desktop">
          <header className="topbar">
            <div className="brand-lockup">
              <span className="brand-heart">♡</span>
              <div>
                <strong>KITKAT // LOST ARCHIVE</strong>
                <small>our little universe / private collection</small>
              </div>
            </div>
            <div className="system-status">
              <span>ARCHIVE ONLINE</span>
              <span>{time}</span>
            </div>
          </header>

          <div className="desktop-grid">
            <aside className="side-note">
              <div className="note-tape" />
              <p className="handwritten">for my princess,</p>
              <p className="note-body">eu queria guardar tudo.
                <br />as conversas, as fotos,
                <br />as noites, as besteiras.
                <br /><br />então fiz um lugar
                <br />onde nada precisa sumir.</p>
              <span className="note-sign">— yuri ♡</span>
            </aside>

            <div className="workspace">
              <div className="workspace-heading">
                <div>
                  <span className="tiny-label">DIRECTORY / ROOT</span>
                  <h2>WELCOME HOME.</h2>
                  <p>There are things here that only make sense to us.</p>
                </div>
                <div className="archive-stamp">PRIVATE<br />♡<br />ARCHIVE</div>
              </div>

              <div className="folder-grid">
                {archiveItems.map((item) => (
                  <button
                    key={item.id}
                    className={`folder ${selected === item.id ? "selected" : ""}`}
                    onClick={() => setSelected(item.id)}
                  >
                    <span className="folder-number">{item.id}</span>
                    <span className="folder-symbol">{item.symbol}</span>
                    <strong>{item.label}</strong>
                    <small>{item.meta}</small>
                  </button>
                ))}
              </div>

              <div className="featured-memory">
                <div className="memory-image">
                  <div className="memory-sky" />
                  <div className="memory-halo">♡</div>
                  <div className="memory-wings" />
                  <span className="image-caption">IMG_0001 / US</span>
                </div>
                <div className="memory-copy">
                  <span className="tiny-label">FEATURED MEMORY / 001</span>
                  <h3>“e se a gente nunca esquecer?”</h3>
                  <p>Um arquivo não precisa ser sobre o passado. Às vezes ele existe só pra provar que alguma coisa aconteceu.</p>
                  <button onClick={() => setSelected("memory")}>OPEN MEMORY ↗</button>
                </div>
              </div>

              <footer className="footer-line">
                <span>MEMORIES ARE NOT FILES.</span>
                <span>THEY ARE PLACES.</span>
                <span>♡</span>
              </footer>
            </div>
          </div>

          {selected && (
            <div className="modal-backdrop" onClick={() => setSelected(null)}>
              <div className="archive-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={() => setSelected(null)}>×</button>
                <span className="tiny-label">ARCHIVE NOTICE</span>
                <h3>{selected === "memory" ? "MEMORY_001" : archiveItems.find((x) => x.id === selected)?.label}</h3>
                <p>{selected === "memory" ? "Essa é só a primeira memória. O resto vai ser preenchido com as nossas fotos, datas, músicas, cartas, chamadas e todas aquelas coisas que ninguém mais entenderia." : "DIRECTORY FOUND. Este espaço vai virar uma experiência inteira — com fotos, textos, música, segredos e pequenas coisas escondidas para você encontrar."}</p>
                <div className="modal-code">STATUS: <b>UNDER CONSTRUCTION</b><br />CONTENT: <b>COMING SOON</b><br />ACCESS: <b>ONLY US</b></div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
