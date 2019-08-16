const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id : Number,
  fullName : String,
  htmlUrl : String,
  description : String,
  stargazersCount : Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = repo => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var doc = new Repo ({
    id : repo.id,
    fullName :repo.full_name,
    htmlUrl : repo.html_url,
    description : repo.description,
    stargazersCount : repo.stargazers_count,
  })
  doc.save (err => {
    if(err) {
      return console.log(err);
    };
  }
}

module.exports.save = save;