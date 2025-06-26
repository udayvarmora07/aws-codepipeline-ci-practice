import express from "express"
const app = express();
const PORT = process.env.port | 8000;

app.get("/", (req, res) => {
    console.log("Hello from uday varmora v3!");
    res.send("Hello from uday varmora v3!")
})

app.get("/api", (req, res) => {
    console.log("This is api route.");
    res.send("This is api route.")
})

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
})