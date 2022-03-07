import { Profile } from "../models/profile.js";

function index(req, res){
Profile.find({})
.then(profiles => {
    res.render('profiles/index', {
        profiles,
        title: "Welcome!"
    })
})
.catch(error => {
    console.log(error)
    res.redirect(`/profiles/${req.user.profile._id}`)
})
}

export {
    index
}