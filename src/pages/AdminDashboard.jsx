import { useState, useEffect } from "react";
import { api } from "../api/api";
import { FONT, s, colors, ROLE } from "../theme";
import { Logo, ErrorBox, Spinner } from "../components/common";

function BarChart({ data, accent }) {
  const entries = Object.entries(data || {}).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const max = Math.max(1, ...entries.map((e) => e[1]));
  if (entries.length === 0) return <p style={{ fontSize: "12.5px", color: colors.textFaint }}>No data yet</p>;
  return (
    <div>
      {entries.map(([k, v]) => (
        <div key={k} style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: colors.text, marginBottom: "4px" }}>
            <span style={{ maxWidth: "72%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{k}</span>
            <span style={{ fontWeight: 600 }}>{v}</span>
          </div>
          <div style={{ height: "7px", background: colors.borderSoft, borderRadius: "99px" }}>
            <div style={{ width: `${(v / max) * 100}%`, height: "100%", background: accent, borderRadius: "99px" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AdminDashboard({ onBack }) {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/admin/stats").then(setStats).catch(() => setError("Could not load stats. Is the backend running?"));
  }, []);

  if (error) return (
    <div style={s.page}><div style={s.card}>
      <ErrorBox message={error} />
      <button style={s.btnGhost} onClick={onBack}>Back</button>
    </div></div>
  );
  if (!stats) return <div style={s.page}><Spinner /></div>;

  const statCard = (label, value, accent) => (
    <div style={{ flex: 1, background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: "13px", padding: "20px" }}>
      <div style={{ fontSize: "28px", fontWeight: "700", color: accent }}>{value}</div>
      <div style={{ fontSize: "12.5px", color: colors.textSoft, marginTop: "3px" }}>{label}</div>
    </div>
  );

  const section = (title, content) => (
    <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: "13px", padding: "20px", marginBottom: "14px" }}>
      <div style={{ fontSize: "13px", fontWeight: "600", color: colors.text, marginBottom: "16px" }}>{title}</div>
      {content}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: colors.bg, fontFamily: FONT, padding: "26px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <Logo />
          <button style={{ ...s.btnGhost, width: "auto", padding: "9px 18px" }} onClick={onBack}>Back to site</button>
        </div>

        <div style={{ display: "flex", gap: "13px", marginBottom: "14px" }}>
          {statCard("Students", stats.totalStudents, ROLE.student.accent)}
          {statCard("Insiders", stats.totalInsiders, ROLE.insider.accent)}
          {statCard("Mentors", stats.totalMentors, ROLE.mentor.accent)}
        </div>

        {section("Students by College", <BarChart data={stats.studentsByCollege} accent={ROLE.student.accent} />)}
        {section("Students by Course", <BarChart data={stats.studentsByCourse} accent={ROLE.student.accent} />)}
        {section("Insiders by College", <BarChart data={stats.insidersByCollege} accent={ROLE.insider.accent} />)}
        {section("Mentors by Domain", <BarChart data={stats.mentorsByDomain} accent={ROLE.mentor.accent} />)}

        {section("Recent registrations", (
          <div>
            {[
              ["Students", stats.recentStudents, ROLE.student.accent],
              ["Insiders", stats.recentInsiders, ROLE.insider.accent],
              ["Mentors", stats.recentMentors, ROLE.mentor.accent],
            ].map(([label, list, accent]) => (
              <div key={label} style={{ marginBottom: "14px" }}>
                <div style={{ fontSize: "11px", fontWeight: "700", color: accent, marginBottom: "7px", textTransform: "uppercase", letterSpacing: "0.4px" }}>{label}</div>
                {list && list.length ? list.map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: colors.text, padding: "5px 0", borderBottom: `1px solid ${colors.borderSoft}` }}>
                    <span>{r.name} · {r.email}</span>
                    <span style={{ color: colors.textFaint }}>{r.date.slice(0, 10)}</span>
                  </div>
                )) : <p style={{ fontSize: "12.5px", color: colors.textFaint }}>None yet</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
