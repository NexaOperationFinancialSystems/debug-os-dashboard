export default function DebugPage() {
  return (
    <div style={{
      background: "#0B0F1A",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        🧠 Debug OS
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "30px" }}>
        AI-powered monitoring, auto-fix, and revenue protection system
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginBottom: "30px"
      }}>
        <Card title="🔥 Errors" value="5" />
        <Card title="⚠️ Unresolved" value="5" />
        <Card title="🤖 AI Fixes" value="3" />
        <Card title="⚡ Self-Healed" value="2" />
      </div>

      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        <button style={primaryBtn}>🔍 Run Full Scan</button>
        <button style={secondaryBtn}>🤖 Auto Fix Issues</button>
      </div>

      <div>
        <h3 style={{ marginBottom: "15px" }}>📋 Error Logs</h3>

        <div style={log}>
          isVideoUrl is not defined  
          <div style={{ opacity: 0.6 }}>Fix: import utility function</div>
        </div>

        <div style={log}>
          Stripe webhook failed  
          <div style={{ opacity: 0.6 }}>Fix: check webhook endpoint</div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div style={{
      background: "#111827",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <div style={{ opacity: 0.6 }}>{title}</div>
      <div style={{ fontSize: "24px", marginTop: "5px" }}>{value}</div>
    </div>
  );
}

const primaryBtn = {
  background: "#6C5CE7",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  color: "white",
  cursor: "pointer"
};

const secondaryBtn = {
  background: "#1F2937",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "1px solid #374151",
  color: "white",
  cursor: "pointer"
};

const log = {
  background: "#1F2937",
  padding: "15px",
  borderRadius: "8px",
  marginBottom: "10px"
};
