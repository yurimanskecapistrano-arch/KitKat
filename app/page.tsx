"use client";

import { useEffect, useState } from "react";
import styles from "./archive.module.css";

const archiveItems = [
  { id: "01", label: "OUR STORY", meta: "TIMELINE / 001", symbol: "✦" },
  { id: "02", label: "MEMORIES", meta: "MEDIA / 024", symbol: "▧" },
  { id: "03", label: "LETTERS", meta: "MAIL / 010", symbol: "✉" },
  { id: "04", label: "OUR MUSIC", meta: "AUDIO / 013", symbol: "♫" },
  { id: "05", label: "OUR UNIVERSE", meta: "MAP / ∞", symbol: "◌" },
  { id: "06", label: "THE FUTURE", meta: "TODO / ???", symbol: "☆" },
];

const memories = [
  ["01", "nossas chamadas", "dia e noite, sempre"],
  ["02", "minecraft", "nosso mundo, nossa aventura"],
  ["03", "jogos", "xbox, playstation e caos"],
  ["04", "conversas", "sobre tudo, sobre nada, sobre nós"],
];

const messages = [
  ["você", "eu te amo, sabia?", "23:47"],
  ["minha princesa ♡", "eu também te amo... muito.", "23:48"],
  ["você", "dorme bem, minha princesa", "23:49"],
  ["minha princesa ♡", "tô tentando... mas é difícil sem você aqui", "23:50"],
  ["você", "logo logo a gente tá junto de novo", "23:51"],
  ["minha princesa ♡", "eu espero... sempre", "23:52"],
  ["você", "você é tudo pra mim", "23:53"],
  ["minha princesa ♡", "e você é o meu tudo também", "23:54"],
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
              <p className="note-body">eu queria guardar tudo.<br />as conversas, as fotos,<br />as noites, as besteiras.<br /><br />então fiz um lugar<br />onde nada precisa sumir.</p>
              <span className="note-sign">— yuri ♡</span>
            </aside>

            <div className="workspace">
              <div className="workspace-heading">
                <div><span className="tiny-label">DIRECTORY / ROOT</span><h2>WELCOME HOME.</h2><p>There are things here that only make sense to us.</p></div>
                <div className="archive-stamp">PRIVATE<br />♡<br />ARCHIVE</div>
              </div>

              <div className={styles.heroMessage}>
                <article className={styles.messageCard}>
                  <span className="tiny-label">A LETTER THAT DIDN&apos;T FIT IN AN ENVELOPE</span>
                  <h3>minha princesa, eu fiz isso pra você.</h3>
                  <p>Eu queria um lugar que fosse só nosso. Não uma página bonitinha com duas fotos e um &quot;eu te amo&quot; escrito no meio. Eu queria guardar as pequenas coisas também: as chamadas que viram madrugada, as mensagens sem sentido, as vezes que a gente jogou até esquecer da hora, os momentos em que você me fez sorrir quando eu nem tava bem.</p>
                  <p>Então esse arquivo existe. Pra quando você sentir saudade, pra quando quiser lembrar de alguma coisa, ou simplesmente pra entrar aqui e pensar: &quot;olha quanta coisa a gente já viveu.&quot;</p>
                  <div className={styles.signature}>— Kit, seu garoto ♡</div>
                </article>
                <article className={styles.quoteCard}>
                  <blockquote>&quot;Você é meu lugar favorito, mesmo quando o lugar é só uma chamada às três da manhã.&quot;</blockquote>
                  <cite>FILE / THINGS_I_WOULD_NEVER_DELETE.TXT</cite>
                </article>
              </div>

              <div className={styles.sectionLabel}><h3>the archive</h3><span>06 DIRECTORIES / CLICK TO EXPLORE</span></div>
              <div className="folder-grid">
                {archiveItems.map((item) => <button key={item.id} className={`folder ${selected === item.id ? "selected" : ""}`} onClick={() => setSelected(item.id)}><span className="folder-number">{item.id}</span><span className="folder-symbol">{item.symbol}</span><strong>{item.label}</strong><small>{item.meta}</small></button>)}
              </div>

              <div className={styles.sectionLabel}><h3>little pieces of us</h3><span>MEMORY INDEX / 024</span></div>
              <div className={styles.memoryStrip}>
                {memories.map(([id, title, meta]) => <button key={id} className={styles.memoryTile} onClick={() => setSelected(`memory-${id}`)}><span className={styles.glyph}>♡</span><strong>{title}</strong><small>{meta}</small></button>)}
              </div>

              <div className={styles.heroMessage} style={{ marginTop: 28 }}>
                <div className={styles.portraitFrame}>
                  <div className={styles.portraitPlaceholder}>PRIVATE PHOTO / MEMORY_001<b>add: /public/images/kitkat-sleep.jpg</b></div>
                  <img src="/images/kitkat-sleep.jpg" alt="Uma memória da KitKat" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                </div>
                <article className={styles.longLetter}>
                  <p>Eu gosto de você nas versões mais bonitas e nas mais caóticas. Gosto da garota que ri, da que fica quietinha, da que dorme na chamada, da que me conta uma coisa completamente aleatória do nada.</p>
                  <p>Gosto de nós dois quando não tem nada acontecendo. Porque, no fim, até o silêncio com você parece alguma coisa.</p>
                  <p>Essa foto fica aqui porque eu quero que esse arquivo tenha coisas reais. Sem banco de imagens, sem personagem, sem substituir você por uma estética. <strong>É você.</strong> Do jeitinho que eu quis guardar.</p>
                  <p>O resto eu ainda vou construir. Cada foto, cada carta, cada música, cada segredo. Isso aqui é só o começo.</p>
                </article>
              </div>

              <div className={styles.sectionLabel}><h3>messages / 01</h3><span>CONVERSATION SNAPSHOT</span></div>
              <div className={styles.messageList}>
                {messages.map(([author, text, stamp], index) => <div className={`${styles.messageBubble} ${author.startsWith("minha") ? styles.mine : ""}`} key={`${stamp}-${index}`}><span>{author}</span><p>{text}</p><time>{stamp}</time></div>)}
              </div>

              <div className={styles.archiveStats}>
                <div className={styles.stat}><b>∞</b><span>MEMORIES TO ADD</span></div>
                <div className={styles.stat}><b>02</b><span>PEOPLE IN THIS WORLD</span></div>
                <div className={styles.stat}><b>01</b><span>PRINCESS</span></div>
                <div className={styles.stat}><b>∞</b><span>REASONS TO STAY</span></div>
              </div>

              <div className={styles.assetNotice}>PHOTO SLOT READY — coloque a foto original dela em <code>public/images/kitkat-sleep.jpg</code>. A interface já está preparada para mostrar a imagem sem filtros ou alterações.</div>
              <footer className="footer-line"><span>MEMORIES ARE NOT FILES.</span><span>THEY ARE PLACES.</span><span>♡</span></footer>
            </div>
          </div>

          {selected && (
            <div className="modal-backdrop" onClick={() => setSelected(null)}>
              <div className="archive-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={() => setSelected(null)}>×</button>
                <span className="tiny-label">ARCHIVE NOTICE</span>
                <h3>{selected.startsWith("memory-") ? `MEMORY_${selected.slice(-2)}` : selected === "memory" ? "MEMORY_001" : archiveItems.find((x) => x.id === selected)?.label}</h3>
                <p>{selected.startsWith("memory-") ? "Essa memória já tem um lugar reservado. A próxima etapa é colocar a foto, data, contexto e a pequena história que só nós dois sabemos." : selected === "memory" ? "Essa é só a primeira memória. O resto vai ser preenchido com as nossas fotos, datas, músicas, cartas, chamadas e todas aquelas coisas que ninguém mais entenderia." : "DIRECTORY FOUND. Este espaço vai virar uma experiência inteira — com fotos, textos, música, segredos e pequenas coisas escondidas para você encontrar."}</p>
                <div className="modal-code">STATUS: <b>UNDER CONSTRUCTION</b><br />CONTENT: <b>COMING SOON</b><br />ACCESS: <b>ONLY US</b></div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
