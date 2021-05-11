//After a user uploads a profile picture, display it on the profile page.
function displayUserProfilePic() {
    var storage = firebase.storage();
    var storageRef = storage.storageRef();

    var imagesRef = storageRef.child('pictures')

    var backRef = storageRef.child('pictures/background-image.jpg');

                    if (backRef != null) {
                        $("#background").append("<img src='" + backRef + "' id='photo1'>")
                    }
}
displayUserProfilePic();