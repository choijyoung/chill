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
    .populate({ path: "reviews.creator" })
    .then((song) => {
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
  Song.findById(req.params.id)
    .then((song) => {
      res.render("songs/edit", {
        song,
        title: "Edit the song!",
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/songs");
    });
}

function update(req, res) {
  Song.findById(req.params.id)
    .then((song) => {
      if (song.creator.equals(req.user.profile._id)) {
        song.updateOne(req.body, { new: true }).then(() => {
          res.redirect(`/songs/${song._id}`);
        });
      } else {
        throw new Error("Not Allowed");
      }
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/songs");
    });
}

function deleteSong(req, res) {
  Song.findById(req.params.id)
    .then((song) => {
      if (song.creator.equals(req.user.profile._id)) {
        song.delete().then(() => {
          res.redirect("/songs");
        });
      } else {
        throw new Error("Not Allowed");
      }
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/songs");
    });
}

function createReview(req, res) {
  req.body.creator = req.user.profile._id;
  Song.findById(req.params.id)
    .then((song) => {
      song.reviews.push(req.body);
      song.save(function (err) {
        res.redirect(`/songs/${song._id}`);
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/songs");
    });
}

function deleteReview(req, res) {
  Song.findById(req.params.id)
    .then((song) => {
      song.reviews.id(req.params.reviewId).remove();
      song.save(function (err) {
        res.redirect(`/songs/${song._id}`);
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/songs");
    });
}

export {
  index,
  newSong as new,
  create,
  show,
  edit,
  update,
  deleteSong as delete,
  createReview,
  deleteReview,
};
