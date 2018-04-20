/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


var albumsInit;
var albums = [];

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return "The album has been played " + this.played + " times.";
        }
    };
    return self;
};

var Jukebox = function () {
    "use strict";
    return {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;
            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                    window.console.log(fav);
                }
            }
            return fav.display();
        },
        loadAlbums: function (albumsInit) {
            var i, album;
            var jbox = new Jukebox();
            var select = $("optionAlbums");
            for (i = 0; i < albumsInit.length; i += 1) {
                album = new Album(); //create a new object
                album.artist = albumsInit[i].artist;
                album.title = albumsInit[i].title;
                jbox.addAlbum(album);
            }
        }
    };
};

var myJukebox = new Jukebox();

var bindDropDown = function (albumsInit) {
    "use strict";
    var i;
    var select = $("optionAlbums");
    for (i = 0; i < albumsInit.length; i += 1) {
        var opt = albumsInit[i];
        select.innerHTML += "<option value=\"" + i + "\">" + opt.artist + ", " + opt.title + "</option>";
    }
};

function getOption() {
    "use strict";
    var i = $("optionAlbums").selectedIndex;
     window.console.log(i);
    var opt = $("optionAlbums");
    var str = opt.options[opt.selectedIndex].text.split(",");
    /*window.console.log(str);*/
    albums[i].play();
}

function favoriteAlbum() {
    "use strict";
    $("favoriteAlbum").innerHTML ="You favorite album is: " + myJukebox.favoriteAlbum();

}

/*var album1 = new Album("Operation Ivy", "Energy");
var album2 = new Album("Blink 182", "Dude Ranch");
var album3 = new Album("New Found Glory", "Sticks and Stones");*/


window.addEventListener("load", function () {
    "use strict";
    // CREATE AN ARRAY OF albums
    albumsInit = [
        {
            artist: "Operation Ivy",
            title: "Energy"
        },
        {
            artist: "Blink 182",
            title: "Dude Ranch"
        },
        {
            artist: "New Found Glory",
            title: "Sticks and Stones"
        }];
    bindDropDown(albumsInit);
    myJukebox.loadAlbums(albumsInit);
});
