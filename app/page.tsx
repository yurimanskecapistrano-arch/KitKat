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

const messages = [
  "eu amo você, minha princesa.",
  "você é minha pessoa favorita, de verdade.",
  "obrigado por existir e por dividir seus dias comigo.",
  "eu escolheria você de novo. e de novo. e de novo.",
  "mesmo nas conversas mais idiotas, eu gosto de estar aqui com você.",
  "você consegue deixar um dia normal parecer uma memória que eu quero guardar.",
  "não preciso que todos os dias sejam perfeitos. só quero continuar vivendo eles com você.",
  "você + eu = o meu lugar favorito.",
];

const futureNotes = [
  "viajar juntos e conhecer lugares que ainda só existem nos nossos planos",
  "ter nosso cantinho, com nossas coisas espalhadas por todo lugar",
  "continuar jogando, conversando e passando horas juntos",
  "colecionar fotos suficientes para esse arquivo nunca acabar",
  "olhar para tudo isso daqui a anos e pensar: a gente conseguiu.",
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
          <div className="boot-top"><span>SYS.KITKAT</span><span>ARCHIVE NODE // 01</span></div>
          <div className="boot-center">
            <div className="angel-mark" aria-hidden="true"><span className="halo" /><span className="wing wing-left" /><span className="wing wing-right" /><span className="angel-core">♡</span></div>
            <p className="eyebrow">PERSONAL ARCHIVE / PRIVATE</p>
            <h1>KITKAT</h1>
            <p className="subtitle">OUR LITTLE UNIVERSE</p>
            <div className="loading-copy"><span>INITIALIZING ARCHIVE...</span><b>{boot}%</b></div>
            <div className="progress"><span style={{ width: `${boot}%` }} /></div>
            <div className="boot-log">
              <span>{boot > 18 ? "✓ MEMORY INDEX FOUND" : "· SEARCHING MEMORY INDEX"}</span>
              <span>{boot > 42 ? "✓ TWO PEOPLE DETECTED" : "· DETECTING TWO PEOPLE"}</span>
              <span>{boot > 70 ? "✓ LOVE.DAT LOADED" : "· LOADING LOVE.DAT"}</span>
            </div>
            <button className="enter-button" onClick={() => setEntered(true)} disabled={boot < 100}><span>[ ENTER ARCHIVE ]</span><small>press to remember</small></button>
          </div>
          <div className="boot-bottom"><span>NO. 000001 / MADE FOR TWO</span><span>© 20XX — FOREVER-ish</span></div>
        </section>
      )}

      {entered && (
        <section className="desktop">
          <header className="topbar">
            <div className="brand-lockup"><span className="brand-heart">♡</span><div><strong>KITKAT // LOST ARCHIVE</strong><small>our little universe / private collection</small></div></div>
            <div className="system-status"><span>ARCHIVE ONLINE</span><span>{time}</span></div>
          </header>

          <div className="desktop-grid">
            <aside className="side-note">
              <div className="note-tape" />
              <p className="handwritten">for my princess,</p>
              <p className="note-body">eu queria guardar tudo.<br />as conversas, as fotos,<br />as noites, as besteiras.<br /><br />então fiz um lugar<br />onde nada precisa sumir.<br /><br />porque algumas coisas<br />merecem ficar.</p>
              <span className="note-sign">— yuri ♡</span>
            </aside>

            <div className="workspace">
              <div className="workspace-heading">
                <div><span className="tiny-label">DIRECTORY / ROOT</span><h2>WELCOME HOME.</h2><p>There are things here that only make sense to us.</p></div>
                <div className="archive-stamp">PRIVATE<br />♡<br />ARCHIVE</div>
              </div>

              <div className="intro-copy">
                <p className="tiny-label">A NOTE FROM THE PERSON WHO MADE THIS</p>
                <p>Se você chegou até aqui, então funcionou. Eu queria fazer alguma coisa que não fosse só uma mensagem, uma foto ou um presente que você abre e acaba. Queria fazer um lugar. Um lugar com as nossas coisas, nossas lembranças, nossas músicas, nossas conversas e tudo aquilo que faz a gente ser a gente.</p>
                <p>Não importa quantos arquivos esse site tenha no futuro. O que importa é que cada um deles existe porque você fez parte daquele momento comigo.</p>
              </div>

              <div className="folder-grid">
                {archiveItems.map((item) => (
                  <button key={item.id} className={`folder ${selected === item.id ? "selected" : ""}`} onClick={() => setSelected(item.id)}>
                    <span className="folder-number">{item.id}</span><span className="folder-symbol">{item.symbol}</span><strong>{item.label}</strong><small>{item.meta}</small>
                  </button>
                ))}
              </div>

              <div className="featured-memory">
                <div className="memory-image memory-photo-slot">
                  <div className="memory-placeholder"><span>YOUR PHOTO</span><small>/images/kitkat-photo.jpg</small></div>
                  <span className="image-caption">IMG_0001 / HER / US</span>
                </div>
                <div className="memory-copy">
                  <span className="tiny-label">FEATURED MEMORY / 001</span>
                  <h3>“e se a gente nunca esquecer?”</h3>
                  <p>Um arquivo não precisa ser sobre o passado. Às vezes ele existe só pra provar que alguma coisa aconteceu. E eu quero que essa foto seja uma dessas provas.</p>
                  <p className="memory-small">Essa área já está preparada para a foto dela que vai entrar no arquivo.</p>
                  <button onClick={() => setSelected("memory")}>OPEN MEMORY ↗</button>
                </div>
              </div>

              <div className="message-board">
                <div className="section-heading"><span className="tiny-label">MESSAGES / 008</span><h3>things i would tell you anyway.</h3><p>porque eu nunca vou cansar de dizer.</p></div>
                <div className="message-list">
                  {messages.map((message, index) => <article className="message-card" key={message}><span>♡</span><p>{message}</p><small>MSG_{String(index + 1).padStart(3, "0")}</small></article>)}
                </div>
              </div>

              <div className="future-board">
                <div className="section-heading"><span className="tiny-label">THE FUTURE / UNFINISHED</span><h3>things we haven't done yet.</h3><p>não são promessas gigantes. são lugares para onde eu ainda quero ir com você.</p></div>
                <div className="future-list">{futureNotes.map((note, index) => <div className="future-item" key={note}><span>0{index + 1}</span><p>{note}</p><b>○</b></div>)}</div>
              </div>

              <div className="final-note">
                <span className="tiny-label">ARCHIVE MESSAGE / LAST FOR NOW</span>
                <h3>minha garota,</h3>
                <p>se algum dia você esquecer o quanto é importante pra mim, volta aqui.</p>
                <p>abre uma foto. lê uma mensagem. escuta uma música. encontra alguma coisa escondida.</p>
                <p>e lembra que, em algum momento, alguém decidiu gastar horas fazendo um universo inteiro só porque queria te ver sorrir.</p>
                <strong>eu te amo. ♡</strong>
                <small>— kit / yuri</small>
              </div>

              <footer className="footer-line"><span>MEMORIES ARE NOT FILES.</span><span>THEY ARE PLACES.</span><span>♡</span></footer>
            </div>
          </div>

          {selected && (
            <div className="modal-backdrop" onClick={() => setSelected(null)}>
              <div className="archive-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={() => setSelected(null)}>×</button>
                <span className="tiny-label">ARCHIVE NOTICE</span>
                <h3>{selected === "memory" ? "MEMORY_001" : archiveItems.find((x) => x.id === selected)?.label}</h3>
                <p>{selected === "memory" ? "A primeira memória desse arquivo. A foto dela entra aqui e, depois, essa tela vira uma memória completa: data, contexto, legenda, áudio e tudo que fizer sentido para nós." : "DIRECTORY FOUND. Essa pasta já existe no universo do KitKat e vai ganhar sua própria experiência — com fotos, textos, música, cartas, jogos, segredos e pequenas coisas escondidas para ela encontrar."}</p>
                <div className="modal-code">STATUS: <b>INDEXED</b><br />CONTENT: <b>EXPANDING</b><br />ACCESS: <b>ONLY US</b></div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
