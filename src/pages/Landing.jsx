import { FONT, colors, s, ROLE } from "../theme";

export default function Landing({ go }) {
  const roles = [
    { id: "student", emoji: "🎓", title: "I'm a Student", desc: "Get honest answers about colleges before you commit." },
    { id: "insider", emoji: "🏫", title: "I'm a College Insider", desc: "Current student? Share your experience and earn." },
    { id: "mentor", emoji: "💼", title: "I'm a Career Mentor", desc: "Working professional? Guide students on careers." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: colors.surface, fontFamily: FONT }}>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 26px", borderBottom: `1px solid ${colors.borderSoft}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
          <div style={s.logoMark()}>AS</div>
          <span style={s.logoText}>AskSenior</span>
        </div>
        <span style={{
          fontSize: "11.5px", background: colors.accentSoft, color: colors.accentText,
          border: `1px solid ${colors.accent}22`, padding: "5px 12px",
          borderRadius: "99px", fontWeight: "600",
        }}>Coming Soon</span>
      </nav>

      <div style={{ maxWidth: "660px", margin: "0 auto", padding: "78px 24px", textAlign: "center" }}>
        <span style={{
          fontSize: "11.5px", fontWeight: "600", background: colors.bg, color: colors.textSoft,
          padding: "6px 14px", borderRadius: "99px", display: "inline-block", marginBottom: "24px",
          border: `1px solid ${colors.borderSoft}`,
        }}>Early Access · Join the waitlist</span>

        <h1 style={{
          fontSize: "40px", fontWeight: "700", color: colors.text,
          lineHeight: 1.15, marginBottom: "18px", letterSpacing: "-1px",
        }}>
          Real answers from<br />students who've been there
        </h1>

        <p style={{
          fontSize: "16px", color: colors.textSoft, marginBottom: "46px",
          maxWidth: "460px", margin: "0 auto 46px", lineHeight: 1.6,
        }}>
          AskSenior connects you with verified college insiders and career mentors.
          No brochures. No rankings. Just honest conversations.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px", margin: "0 auto" }}>
          {roles.map((r) => {
            const rc = ROLE[r.id];
            return (
              <div
                key={r.id}
                onClick={() => go(r.id)}
                style={{
                  display: "flex", alignItems: "center", gap: "15px",
                  padding: "17px 19px", border: `1px solid ${colors.border}`,
                  borderRadius: "13px", cursor: "pointer", textAlign: "left",
                  background: colors.surface, transition: "border-color 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = rc.accent;
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(43,42,39,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "11px", background: rc.soft,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px",
                }}>{r.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "600", color: colors.text }}>{r.title}</div>
                  <div style={{ fontSize: "12.5px", color: colors.textFaint, marginTop: "3px" }}>{r.desc}</div>
                </div>
                <span style={{ color: rc.accent, fontSize: "18px" }}>→</span>
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: "12.5px", color: colors.textFaint, marginTop: "28px" }}>
          Join early — we'll reach out personally before launch.
        </p>

        <button
          onClick={() => go("admin")}
          style={{
            marginTop: "34px", background: "none", border: "none",
            color: colors.textFaint, fontSize: "11.5px", cursor: "pointer", textDecoration: "underline",
          }}
        >
          Admin Dashboard
        </button>
      </div>
    </div>
  );
}
