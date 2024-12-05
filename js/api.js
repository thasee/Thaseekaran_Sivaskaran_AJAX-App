(() => {
    const materialTemplate = document.querySelector("#template");
    const materialList = document.querySelector("#list");
    const spinner = document.querySelector(".spinner");
    const errorMessage = document.querySelector(".error-message");

    function loadMaterialInfo() {
        spinner.style.display = "block";

        fetch("https://swiftpixel.com/earbud/api/materials")
            .then((response) => response.json())
            .then((materialListData) => {
                spinner.style.display = "none";
                materialListData.forEach((material) => {
                    const clone = materialTemplate.content.cloneNode(true);

                    const materialHeading = clone.querySelector(".material-heading");
                    materialHeading.textContent = material.heading;

                    const materialDescription = clone.querySelector(".material-description");
                    materialDescription.textContent = material.description;

                    materialList.appendChild(clone);
                });
            })
            .catch((error) => {
                spinner.style.display = "none";
                errorMessage.style.display = "block";
                errorMessage.textContent = "Error fetching materials: " + error.message;
                console.error("Error fetching materials:", error);
            });
    }

    loadMaterialInfo();
})();