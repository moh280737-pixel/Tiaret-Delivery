// شاشة البداية
setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}, 2500);

// إرسال الطلب
function sendOrder() {

    let order = document.getElementById("order").value.trim();

    if (order === "") {
        alert("يرجى كتابة طلبك أولاً.");
        return;
    }

    const phone = "213541513146";

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                let message =
`📦 طلب جديد

📝 الطلب:
${order}

📍 موقع الزبون:
https://maps.google.com/?q=${lat},${lon}`;

                window.open(
                    "https://wa.me/" +
                    phone +
                    "?text=" +
                    encodeURIComponent(message),
                    "_blank"
                );

            },

            function () {

                let message =
`📦 طلب جديد

📝 الطلب:
${order}

⚠️ لم يسمح العميل بمشاركة الموقع.`;

                window.open(
                    "https://wa.me/" +
                    phone +
                    "?text=" +
                    encodeURIComponent(message),
                    "_blank"
                );

            }

        );

    } else {

        let message =
`📦 طلب جديد

📝 الطلب:
${order}`;

        window.open(
            "https://wa.me/" +
            phone +
            "?text=" +
            encodeURIComponent(message),
            "_blank"
        );

    }

}