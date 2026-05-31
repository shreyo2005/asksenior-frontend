import { useState, useEffect, useRef } from "react";
import { FONT, colors } from "../theme";

const FEATURES = [
  { key: "insiders", title: "Verified Insiders", desc: "Every insider is a real, ID-verified current student.", tint: "#eef3f1",
    scene: { bg: "radial-gradient(circle at 50% 40%, #f3ead9, #e7d4b5)", emoji: "🧔", caption: "We are the unseen OGs, guiding the plot from the dark." } },
  { key: "answers", title: "Honest Answers", desc: "No spin. Hear what college is really like.", tint: "#f4efe9",
    scene: { bg: "radial-gradient(circle at 50% 40%, #e9f3ee, #cfe6dd)", emoji: "🧢", caption: 'source: " just trust askseniors bro"' } },
  { key: "mentors", title: "Career Mentors", desc: "Pros guiding you on placements and paths.", tint: "#eef2f6",
    scene: { bg: "radial-gradient(circle at 50% 40%, #e8eef4, #cdddeb)", emoji: "🐢", caption: "Knowledge comes, but wisdom lingers." } },
  { key: "book", title: "Book a Session", desc: "One-on-one calls whenever suits you.", tint: "#f4efe9",
    scene: { bg: "radial-gradient(circle at 50% 40%, #f5ede2, #ecdcc6)", emoji: "📖", caption: "Book on your own time. No gatekeeping." } },
  { key: "payments", title: "Secure Payments", desc: "UPI-based, protected, fair payouts.", tint: "#eef3f1",
    scene: { bg: "radial-gradient(circle at 50% 40%, #eaf4ec, #c9e6cf)", emoji: "🔐💰", caption: "Clutch your roll like it’s 1994" } },
  { key: "college", title: "Your College", desc: "50+ campuses and growing fast.", tint: "#eef2f6",
    scene: { bg: "radial-gradient(circle at 50% 40%, #fdf3df, #f7e3b0)", emoji: "😎", caption: "Spot your main circle on campus and lock in." } },
];

export default function Landing({ go }) {
  const [scene, setScene] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            const idx = Number(e.target.dataset.idx);
            setScene(FEATURES[idx].scene);
            setActiveKey(FEATURES[idx].key);
          }
        });
      },
      { threshold: [0.6] }
    );
    cardRefs.current.forEach((c) => c && observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const activate = (f) => { setScene(f.scene); setActiveKey(f.key); };
  const clear = () => { setScene(null); setActiveKey(null); };

  const btnPrimary = { background: colors.accent, color: "#fff", border: "none", padding: "14px 26px", borderRadius: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: FONT, boxShadow: "0 6px 18px rgba(61,107,92,0.25)" };
  const btnOutline = { background: "#fff", color: colors.text, border: `1px solid ${colors.border}`, padding: "14px 26px", borderRadius: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: FONT, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" };

  const pageBg = scene ? scene.bg : colors.bg;
  const dim = scene ? 0.18 : 1;        // fade non-active content when a scene is on
  const cardFade = scene ? 0.25 : 1;   // cards become see-through so the scene shows

  return (
    <div style={{ background: pageBg, fontFamily: FONT, color: colors.text, minHeight: "100vh", position: "relative", overflow: "hidden", transition: "background 0.6s ease" }}>

      {/* Scene emoji + caption — now ABOVE everything and fully opaque */}
      {scene && (
        <div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 50 }}>
          <div style={{ fontSize: "200px", lineHeight: 1, filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }}>{scene.emoji}</div>
          <div style={{ fontSize: "30px", fontWeight: 800, color: "#1f1e1c", marginTop: "18px", letterSpacing: "-0.5px", background: "rgba(255,255,255,0.7)", padding: "8px 22px", borderRadius: "99px", backdropFilter: "blur(4px)" }}>
            {scene.caption}
          </div>
        </div>
      )}

      <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle,#cfe6dd,transparent 70%)", filter: "blur(20px)", opacity: scene ? 0 : 0.7, transition: "opacity 0.6s" }} />
      <div style={{ position: "absolute", top: "200px", left: "-100px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle,#f0e3d4,transparent 70%)", filter: "blur(20px)", opacity: scene ? 0 : 0.6, transition: "opacity 0.6s" }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 40px", opacity: dim, transition: "opacity 0.5s" }}>
          <span style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.2px" }}>AskSenior</span>
          <span style={{ fontSize: "11.5px", color: colors.accentText, background: "#fff", border: `1px solid ${colors.accent}33`, padding: "6px 13px", borderRadius: "99px", fontWeight: 600, boxShadow: "0 2px 8px rgba(61,107,92,0.08)" }}>✦ Now in Beta</span>
        </nav>

        <div style={{ textAlign: "center", padding: "64px 32px 44px", opacity: dim, transition: "opacity 0.5s" }}>
          <span style={{ display: "inline-block", fontSize: "11.5px", color: colors.textSoft, background: "#fff", border: `1px solid ${colors.borderSoft}`, padding: "7px 15px", borderRadius: "99px", marginBottom: "26px", fontWeight: 500, boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
            Trusted by students at 50+ colleges
          </span>
          <h1 style={{ fontSize: "54px", fontWeight: 800, lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-2px", color: "#1f1e1c" }}>
            Real answers from<br /><span style={{ color: colors.accent }}>students</span> who get it
          </h1>
          <p style={{ fontSize: "17px", color: colors.textSoft, maxWidth: "440px", margin: "0 auto 30px", lineHeight: 1.6 }}>
            Skip the brochures. Talk to real insiders and mentors who've actually been there.
          </p>
          <div style={{ display: "flex", gap: "11px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={btnPrimary} onClick={() => go("student")}>I'm a Student</button>
            <button style={btnOutline} onClick={() => go("insider")}>Become an Insider</button>
            <button style={btnOutline} onClick={() => go("mentor")}>Become a Mentor</button>
          </div>
        </div>

        <div style={{ padding: "24px 32px 72px", maxWidth: "640px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px" }}>
            {FEATURES.map((f, i) => {
              const isActive = activeKey === f.key;
              return (
                <div
                  key={f.key}
                  data-idx={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  onMouseEnter={() => activate(f)}
                  onMouseLeave={clear}
                  style={{
                    background: "#fff",
                    border: `1px solid ${colors.borderSoft}`,
                    borderRadius: "18px", padding: "24px", cursor: "default",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                    transition: "opacity 0.4s, transform 0.2s",
                    // the active card stays visible, the rest fade so the scene shows through
                    opacity: scene ? (isActive ? 1 : cardFade) : 1,
                    transform: isActive ? "translateY(-3px)" : "none",
                  }}
                >
                  <div style={{ width: "40px", height: "8px", borderRadius: "99px", background: f.tint, marginBottom: "16px" }} />
                  <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "6px" }}>{f.title}</div>
                  <div style={{ fontSize: "12.5px", color: "#8a857d", lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ margin: "0 auto 64px", background: "linear-gradient(135deg,#3d6b5c,#2f5448)", borderRadius: "24px", padding: "48px 32px", textAlign: "center", maxWidth: "680px", marginLeft: "32px", marginRight: "32px", boxShadow: "0 12px 32px rgba(61,107,92,0.22)", opacity: dim, transition: "opacity 0.5s" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.5px", color: "#fff" }}>Ready to hear the truth? ✨</h2>
          <p style={{ fontSize: "15px", color: "#d4e6df", margin: "0 0 24px" }}>Join the waitlist. We'll reach out before launch.</p>
          <button style={{ background: "#fff", color: "#2f5448", border: "none", padding: "14px 34px", borderRadius: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 18px rgba(0,0,0,0.15)" }} onClick={() => go("student")}>Join the Waitlist</button>
        </div>

        <div style={{ borderTop: `1px solid ${colors.borderSoft}`, padding: "28px 40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "14px", alignItems: "center", opacity: dim, transition: "opacity 0.5s" }}>
          <span style={{ fontSize: "14px", fontWeight: 700 }}>AskSenior</span>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#b3afa8" }}>© 2026 AskSenior. All rights reserved.</span>
            <button onClick={() => go("admin")} style={{ background: "none", border: "none", color: "#cbc7c0", fontSize: "11px", cursor: "pointer", textDecoration: "underline" }}>Admin</button>
          </div>
        </div>

      </div>
    </div>
  );
}