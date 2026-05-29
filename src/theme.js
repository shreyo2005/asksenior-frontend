// Central design system — soft whites, warm greys, professional and formal.
// No cyberpunk, no violet, no bounces.

export const FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export const colors = {
  bg: "#faf9f7",          // soft warm white
  surface: "#ffffff",
  border: "#e7e4df",      // warm grey border
  borderSoft: "#f0ede8",
  text: "#2b2a27",        // near-black warm
  textSoft: "#6b6862",    // warm grey
  textFaint: "#a39f98",
  accent: "#3d6b5c",      // muted teal-green, calm and formal
  accentSoft: "#eef3f1",
  accentText: "#2f5448",
  danger: "#b4493f",
  dangerSoft: "#fbf0ef",
  success: "#3d6b5c",
  successSoft: "#eef3f1",
};

// Role accent colors — all muted, formal
export const ROLE = {
  student: { accent: "#3d6b5c", soft: "#eef3f1", label: "Student" },
  insider: { accent: "#7a5c3e", soft: "#f4efe9", label: "College Insider" },
  mentor:  { accent: "#3a5a78", soft: "#eef2f6", label: "Career Mentor" },
};

export const s = {
  page: {
    minHeight: "100vh", background: colors.bg, display: "flex",
    flexDirection: "column", alignItems: "center", justifyContent: "center",
    padding: "24px", fontFamily: FONT,
  },
  card: {
    background: colors.surface, border: `1px solid ${colors.border}`,
    borderRadius: "14px", padding: "32px", width: "100%", maxWidth: "440px",
    boxShadow: "0 1px 3px rgba(43,42,39,0.04)",
  },
  logoRow: { display: "flex", alignItems: "center", gap: "9px", marginBottom: "28px" },
  logoMark: (accent) => ({
    width: "30px", height: "30px", background: accent || colors.accent,
    borderRadius: "8px", display: "flex", alignItems: "center",
    justifyContent: "center", color: "#fff", fontSize: "12px", fontWeight: "700",
    letterSpacing: "0.3px",
  }),
  logoText: { fontWeight: "600", fontSize: "16px", color: colors.text, letterSpacing: "-0.2px" },
  h2: { fontSize: "20px", fontWeight: "600", color: colors.text, marginBottom: "6px", letterSpacing: "-0.3px" },
  sub: { fontSize: "13.5px", color: colors.textSoft, marginBottom: "24px", lineHeight: 1.55 },
  label: { display: "block", fontSize: "13px", fontWeight: "600", color: colors.text, marginBottom: "6px" },
  optional: { color: colors.textFaint, fontWeight: 400 },
  input: {
    width: "100%", border: `1px solid ${colors.border}`, borderRadius: "9px",
    padding: "11px 14px", fontSize: "13.5px", color: colors.text, outline: "none",
    background: colors.surface, boxSizing: "border-box", marginBottom: "16px", fontFamily: FONT,
    transition: "border-color 0.15s",
  },
  textarea: {
    width: "100%", border: `1px solid ${colors.border}`, borderRadius: "9px",
    padding: "11px 14px", fontSize: "13.5px", color: colors.text, outline: "none",
    background: colors.surface, boxSizing: "border-box", resize: "none", fontFamily: FONT,
  },
  select: {
    width: "100%", border: `1px solid ${colors.border}`, borderRadius: "9px",
    padding: "11px 14px", fontSize: "13.5px", color: colors.text, outline: "none",
    background: colors.surface, boxSizing: "border-box", marginBottom: "16px", fontFamily: FONT,
  },
  btn: (accent) => ({
    width: "100%", padding: "12px", background: accent || colors.accent, color: "#fff",
    border: "none", borderRadius: "10px", fontSize: "13.5px", fontWeight: "600",
    cursor: "pointer", marginBottom: "9px", fontFamily: FONT, transition: "opacity 0.15s",
  }),
  btnGhost: {
    width: "100%", padding: "12px", background: colors.surface, color: colors.textSoft,
    border: `1px solid ${colors.border}`, borderRadius: "10px", fontSize: "13.5px",
    fontWeight: "600", cursor: "pointer", fontFamily: FONT,
  },
  err: {
    background: colors.dangerSoft, border: `1px solid ${colors.danger}33`,
    color: colors.danger, fontSize: "13px", padding: "10px 14px",
    borderRadius: "9px", marginBottom: "16px",
  },
  hint: { fontSize: "11.5px", color: colors.textFaint, marginTop: "-12px", marginBottom: "16px" },
  prog: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "24px" },
  progBar: (active, done) => ({
    height: "4px", borderRadius: "99px",
    background: done ? colors.accent : active ? colors.textFaint : colors.borderSoft,
    width: done ? "28px" : active ? "20px" : "12px", transition: "all 0.3s",
  }),
  progText: { fontSize: "11.5px", color: colors.textFaint, marginLeft: "6px" },
};
