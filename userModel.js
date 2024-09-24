const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    Regdno: {
        type: String,
        required: true,
    },
    gpa: {
        type: Number,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    }
},{timestamps: true});

const User = mongoose.model("User", userSchema);


module.exports=User