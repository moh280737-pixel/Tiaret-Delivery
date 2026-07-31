// شاشة البداية
setTimeout(() => {
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

    function openWhatsApp(message) {
        window.open(
            "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
            "_blank"
        );
    }

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position) {

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                const message =
`🚴 Rahimo Delivery

📦 طلب جديد

📝 الطلب:
${order}

📍 موقع الزبون:
https://maps.google.com/?q=${lat},${lng}

شكراً لاختيارك Rahimo Delivery ❤️`;

                openWhatsApp(message);

            },

            function() {

                const message =
`🚴 Rahimo Delivery

📦 طلب جديد

📝 الطلب:
${order}

⚠️ لم يتم السماح بمشاركة الموقع.`;

                openWhatsApp(message);

            }

        );

    } else {

        const message =
`🚴 Rahimo Delivery

📦 طلب جديد

📝 الطلب:
${order}`;

        openWhatsApp(message);
    }
}