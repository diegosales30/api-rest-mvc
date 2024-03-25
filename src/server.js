import app from "./app.js"; //importante usar .js no final

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
