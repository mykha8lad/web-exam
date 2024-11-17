$(document).ready(function () {
    const items = [
        "Apple iPhone",
        "Samsung Galaxy",
        "Google Pixel",
        "Sony Xperia",
        "Huawei Mate",
        "OnePlus Nord",
        "Xiaomi Redmi",
        "Nokia Lumia",
        "Motorola Razr",
        "LG Velvet"
    ];

    $(".search-icon").on("click", function () {
        $("#search-bar").toggle().focus();
        $("#suggestions").hide();
    });
    
    $("#search-bar").on("input", function () {
        const query = $(this).val().toLowerCase().trim();
        const suggestions = items.filter(item => item.toLowerCase().includes(query));

        if (query && suggestions.length > 0) {
            $("#suggestions").html(
                suggestions.map(item => `<li>${item}</li>`).join("")
            ).show();
        } else {
            $("#suggestions").hide();
        }
    });
    
    $("#suggestions").on("click", "li", function () {
        $("#search-bar").val($(this).text());
        $("#suggestions").hide();
    });

    $(document).on("click", function (e) {
        if (!$(e.target).closest(".search-container").length) {
            $("#suggestions").hide();
        }
    });
});
