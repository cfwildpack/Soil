const express = require('express');
const app = express();
const port = 6000;

app.get('/soil', (req, res) => {
    res.json({
        type: "Loam",
        moisture: "35%",
        ph: 6.5,
        status: "Optimal"
    });
});

app.listen(port, () => {
    console.log(`Soil API server running at http://localhost:${port}`);
});
