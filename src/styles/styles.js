/**
 * Estilos responsivos que se adaptan a mobile y desktop
 * Mobile: < 768px
 * Tablet: 768px - 1024px
 * Desktop: > 1024px
 */

export const lightTheme = {
  secondaryButton: {
    width: "100%",
    padding: "clamp(8px, 2vw, 12px)",
    fontSize: "clamp(12px, 2.5vw, 16px)",
    borderRadius: "12px",
    border: "1px solid #ccc",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  
  page: {
    minHeight: "100vh",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: "clamp(12px, 4vw, 32px)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(8px, 3vw, 20px)",
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: "clamp(320px, 90vw, 500px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "clamp(12px, 3vw, 24px)",
    padding: "clamp(16px, 5vw, 32px)",
    borderRadius: "clamp(12px, 3vw, 20px)",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },

  title: {
    fontSize: "clamp(20px, 5vw, 36px)",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    margin: "0",
  },

  text: {
    fontSize: "clamp(14px, 3.5vw, 18px)",
    color: "black",
    textAlign: "center",
    margin: "0",
  },

  input: {
    width: "100%",
    padding: "clamp(10px, 2vw, 14px)",
    fontSize: "clamp(14px, 2.5vw, 16px)",
    borderRadius: "clamp(8px, 2vw, 12px)",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
    "&:focus": {
      outline: "none",
      borderColor: "#222",
    },
  },

  button: {
    width: "100%",
    padding: "clamp(10px, 2.5vw, 14px)",
    fontSize: "clamp(14px, 2.5vw, 16px)",
    borderRadius: "clamp(8px, 2vw, 12px)",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#222",
    color: "#fff",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#000",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },

  toggle: {
    marginTop: "clamp(6px, 1.5vw, 12px)",
    cursor: "pointer",
    fontSize: "clamp(12px, 2vw, 14px)",
    textAlign: "center",
    color: "black",
    userSelect: "none",
  },
};

export const darkTheme = {
  secondaryButton: {
    ...lightTheme.secondaryButton,
    border: "1px solid #444",
    color: "#ccc",
    "&:hover": {
      backgroundColor: "#2a2a2a",
    },
  },
  page: {
    ...lightTheme.page,
    backgroundColor: "#000000",
  },

  card: {
    ...lightTheme.card,
    backgroundColor: "#3f3f3f",
    boxShadow: "0 2px 8px rgba(255, 249, 249, 0.3)",
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
    "&:focus": {
      outline: "none",
      borderColor: "#fff",
    },
  },

  button: {
    ...lightTheme.button,
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },

  toggle: {
    ...lightTheme.toggle,
    color: "#ccc",
  },
};