import express from "express"
const app = express();
const PORT = process.env.port | 8000;

app.get("/", (req, res) => {
    console.log("Hello from uday!");
    res.send("Hello from uday!")
})

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
})