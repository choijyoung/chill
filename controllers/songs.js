import methodOverride from "method-override";
import { Song } from "../models/song.js";

function index(req, res) {
  Song.find({})
    .then((songs) => {
      res.render("songs/index", {
        title: "🎵All Songs",
        songs,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/songs");
    });
}

function newSong(req, res) {
  res.render("songs/new", {
    title: "Add Song",
  });
}

function create(req, res) {
  req.body.creator = req.user.profile._id;
  const song = new Song(req.body);
  song.save(function (error) {
    if (error) return res.redirect("/songs/new");
    res.redirect(`/songs/${song._id}`);
  });
}

function show(req, res) {
  Song.findById(req.params.id)
    .populate("creator")
    .then((song) => {
      console.log(song);
      res.render("songs/show", {
        song,
        title: "Take a listen! 😇",
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/songs");
    });
}

function edit(req, res) {
console.log('paul just lost to corki')
}

export { index, 
         newSong as new, 
         create, 
         show, 
         edit 
      };
