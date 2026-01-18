export const lightTheme = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
  },
    text: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  input: {
    width: "260px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    padding: 10,
    margin:10,
    fontSize: "16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#222",
    color: "#fff",
  },
  toggle: {
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export const darkTheme = {
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
  title:
  {
    color: "#ccc"
  },
    text: {
    fontSize: 24,
    color: 'white',
  },
};