# music_database
pg-promise exercise
Create Album
Write a script to create a new album in the database. You may either connect to your local database or your remote database. The script will prompt the user for an album name, a year, and an artist ID. You may use the prompt-promise module to get user prompts in the promise style - with this everything can be written in one straight chain. Be sure to sanitize your inputs!
Example session:

$ node create_album.js
Album name?
The Squeezed Apple
Album year?
1998 Artist ID? 4
Created album with ID 2.
Create Artist
Write a script to create an artist.

$ node create_artist.js
Artist name? Fruit Evanglists
Created artist with ID 5.
Create Track
Write a script to create a track.

$ node create_track.js
Track name? I like crunchy soft
Album ID? 2
Track Duration? 5:33
Create track with ID 13.
