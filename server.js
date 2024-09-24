const app = require('./routes.js')
mongoose.connect('mongodb://127.0.0.1:27017/it').then(() => {
    console.log("db is connected");
}).catch((error) => {
    console.log(error);
});

app.listen(8000,()=>{
    console.log("Server running on http://localhost:8000")
})