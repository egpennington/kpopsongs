let kpopSongs = [
    {
      title: "Dynamite",
      artist: "BTS",
      year: 2020,
      genre: "Pop"
    },
    {
      title: "Lovesick Girls",
      artist: "BLACKPINK",
      year: 2020,
      genre: "Pop"
    },
    {
      title: "Butter",
      artist: "BTS",
      year: 2021,
      genre: "Pop"
    },
    {
      title: "Next Level",
      artist: "aespa",
      year: 2021,
      genre: "K-pop"
    }
  ];
  
  let targetGenre = "Pop"
  
  for (let song of kpopSongs) {
     if (song.genre === targetGenre) {
     console.log("Song Title:", song.title)
     console.log("  artist:", song.artist)
     console.log("  Year:", song.year)
     console.log("  genre", song.genre)
     }
  }
  