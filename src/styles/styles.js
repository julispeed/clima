export const lightTheme = {
  actions: {
  width: "100%",
  display: "flex",
  flexDirection: "column", // 🔑 vertical
  gap: "12px",
  alignItems: "stretch",
},

secondaryButton: {
  width: "100%",
  padding: "10px",
  fontSize: "14px",
  borderRadius: "12px",
  border: "1px solid #ccc",
  backgroundColor: "transparent",
  cursor: "pointer",
},
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "16px", // 🔑 evita bordes en mobile
  },

  card: {
    width: "100%",
    maxWidth: "380px", // 🔑 límite desktop
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "24px", // más chico para mobile
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  },

  title: {
    fontSize: "clamp(24px, 6vw, 32px)", // 🔑 responsive
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    fontSize: "clamp(16px, 4vw, 20px)",
    color: "black",
    textAlign: "center",
  },

  input: {
    width: "100%", // 🔑 full width
    padding: "12px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },

  button: {
    width: "100%", // 🔑 full width
    padding: "12px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#222",
    color: "#fff",
  },

  toggle: {
    marginTop: "8px",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "center",
  },
};

export const darkTheme = {
  actions: {
  ...lightTheme.actions,
},

secondaryButton: {
  ...lightTheme.secondaryButton,
  border: "1px solid #444",
  color: "#ccc",
},
  page: {
    ...lightTheme.page,
    backgroundColor: "#121212",
  },

  card: {
    ...lightTheme.card,
    backgroundColor: "#1e1e1e",
  },

  title: {
    ...lightTheme.title,
    color: "#fff",
  },

  text: {
    ...lightTheme.text,
    color: "#fff",
  },

  input: {
    ...lightTheme.input,
    backgroundColor: "#2a2a2a",
    color: "#fff",
    border: "1px solid #444",
  },

  button: {
    ...lightTheme.button,
    backgroundColor: "#fff",
    color: "#000",
  },

  toggle: {
    color: "#ccc",
  },
};