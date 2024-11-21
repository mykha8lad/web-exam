$(document).ready(function () {

    const items = [
    {
        nameProduct: "Apple iPhone",
        priceProduct: "500.00",
        descriptionProduct: "Description for Apple iPhone",
        countProduct: 56,
        isStock: true,
        photo: "https://via.placeholder.com/150?text=Apple%20iPhone"
    },
    {
        nameProduct: "Samsung Galaxy",
        priceProduct: "550.00",
        descriptionProduct: "Description for Samsung Galaxy",
        countProduct: 32,
        isStock: false,
        photo: "https://via.placeholder.com/150?text=Samsung%20Galaxy"
    }, 
    {
        nameProduct: "Google Pixel",
        priceProduct: "799.00",
        descriptionProduct: "Description for Google Pixel",
        countProduct: 15,
        isStock: true,
        photo: "https://via.placeholder.com/150?text=Google%20Pixel"
    },
    {
        nameProduct: "Sony Xperia",
        priceProduct: "650.00",
        descriptionProduct: "Description for Sony Xperia",
        countProduct: 10,
        isStock: true,
        photo: "https://via.placeholder.com/150?text=Sony%20Xperia"
    },
    {
        nameProduct: "Huawei Mate",
        priceProduct: "699.00",
        descriptionProduct: "Description for Huawei Mate",
        countProduct: 0,
        isStock: false,
        photo: "https://via.placeholder.com/150?text=Huawei%20Mate"
    },
    {
        nameProduct: "OnePlus Nord",
        priceProduct: "499.00",
        descriptionProduct: "Description for OnePlus Nord",
        countProduct: 25,
        isStock: true,
        photo: "https://via.placeholder.com/150?text=OnePlus%20Nord"
    },
    {
        nameProduct: "Xiaomi Redmi",
        priceProduct: "350.00",
        descriptionProduct: "Description for Xiaomi Redmi",
        countProduct: 40,
        isStock: true,
        photo: "https://via.placeholder.com/150?text=Xiaomi%20Redmi"
    },
    {
        nameProduct: "Nokia Lumia",
        priceProduct: "299.00",
        descriptionProduct: "Description for Nokia Lumia",
        countProduct: 12,
        isStock: true,
        photo: "https://via.placeholder.com/150?text=Nokia%20Lumia"
    },
    {
        nameProduct: "Motorola Razr",
        priceProduct: "1200.00",
        descriptionProduct: "Description for Motorola Razr",
        countProduct: 5,
        isStock: true,
        photo: "https://via.placeholder.com/150?text=Motorola%20Razr"
    },
    {
        nameProduct: "LG Velvet",
        priceProduct: "399.00",
        descriptionProduct: "Description for LG Velvet",
        countProduct: 18,
        isStock: true,
        photo: "https://via.placeholder.com/150?text=LG%20Velvet"
    },      
]

    $(".search-icon").on("click", function () {
        $("#search-bar").toggle().focus();
        $("#suggestions").hide();
    });
    
    $("#search-bar").on("input", function () {
        const query = $(this).val().toLowerCase().trim();
        const suggestions = items.filter(item => item.nameProduct.toLowerCase().includes(query));

        if (query && suggestions.length > 0) {
            $("#suggestions").html(
                suggestions.map(item => `<li data-item='${JSON.stringify(item)}'>${item.nameProduct}</li>`).join("")
            ).show();
        } else {
            $("#suggestions").hide();
        }
    });

    $("#suggestions").on("click", "li", function () {
        const selectedItem = JSON.parse($(this).attr('data-item'));
        
        const newHTMLContent = `
        <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/styles/productPage/index.css">
    <script src="/scripts/search.js" defer type="module"></script>
    <title>${selectedItem.nameProduct}</title>
</head>

<body>
    <div>
        <div class="container">
            <header class="header">
                <div class="logo">
                    <img src="/images/logo.png" alt="logo">
                </div>
                <nav class="navigation">
                    <div class="general-navigation">
                        <ul class="menu general-menu">
                            <li class="menu-item">
                                <a href="#">CLOTHING</a>
                                <ul class="dropdown">
                                    <li><a href="#">T-shirts</a></li>
                                    <li><a href="#">Jackets</a></li>
                                    <li><a href="#">Jeans</a></li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="#">SHOES</a>
                                <ul class="dropdown">
                                    <li><a href="#">Sneakers</a></li>
                                    <li><a href="#">Boots</a></li>
                                    <li><a href="#">Sandals</a></li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="#">ACCESSORIES</a>
                                <ul class="dropdown">
                                    <li><a href="#">Sneakers</a></li>
                                    <li><a href="#">Boots</a></li>
                                    <li><a href="#">Sandals</a></li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="#">BRAND</a>
                                <ul class="dropdown">
                                    <li><a href="#">Sneakers</a></li>
                                    <li><a href="#">Boots</a></li>
                                    <li><a href="#">Sandals</a></li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="#">PAGES</a>
                                <ul class="dropdown">
                                    <li><a href="#">Sneakers</a></li>
                                    <li><a href="#">Boots</a></li>
                                    <li><a href="#">Sandals</a></li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="#">ELEMENTS</a>
                                <ul class="dropdown">
                                    <li><a href="#">Sneakers</a></li>
                                    <li><a href="#">Boots</a></li>
                                    <li><a href="#">Sandals</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="search-container">
                            <span class="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    class="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </span>
                            <input type="text" id="search-bar" placeholder="Enter Name Product">
                            <ul id="suggestions"></ul>
                        </div>
                    </div>
                    <div class="user-tools">
                        <ul class="menu">
                            <li class="menu-item">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fill-rule="evenodd"
                                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </a>
                                <ul class="dropdown">
                                    <li><a href="#">T-shirts</a></li>
                                    <li><a href="#">Jackets</a></li>
                                    <li><a href="#">Jeans</a></li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </a>
                                <ul class="dropdown">
                                    <li><a href="#">T-shirts</a></li>
                                    <li><a href="#">Jackets</a></li>
                                    <li><a href="#">Jeans</a></li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        class="bi bi-basket-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z" />
                                    </svg>
                                </a>
                                <ul class="dropdown">
                                    <li><a href="#">T-shirts</a></li>
                                    <li><a href="#">Jackets</a></li>
                                    <li><a href="#">Jeans</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div class="container">
            <div class="divider">
            </div>
            </div>
            
            <div>
            <h1>${selectedItem.nameProduct}</h1>
            <p>You selected: <strong>${selectedItem.priceProduct}</strong></p>
            <a href="javascript:history.back()">Go Back</a>
            </div>
        </div>

        <div class="container">
            <div class="divider">
            </div>
        </div>

        
    </div>
</div>
    </div>
</body>

</html>            
        `;        
        
        const newWindow = window.open();
        newWindow.document.write(newHTMLContent);
        newWindow.document.close();
    });

    $(document).on("click", function (e) {
        if (!$(e.target).closest(".search-container").length) {
            $("#suggestions").hide();
        }
    });
});