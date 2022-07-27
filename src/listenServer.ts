import app from "./server"
const port = 5500;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
