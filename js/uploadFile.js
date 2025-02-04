$(document).ready(function () {
  $(".imgUpload").click(function () {
    $("#fileInput").click();
  });

  $("#fileInput").change(function (e) {
    const files = e.target.files;
    const allowedExtensions = /(\.jpg|\.jpeg|\.gif|\.png|\.txt|\.pdf)$/i;
    const maxFileSize = 128 * 1024 * 1024;

    $(".error-message").text("");

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!allowedExtensions.exec(file.name)) {
        $(".error-message").text(
          "Invalid file type. Allowed types: .jpg, .gif, .jpeg, .png, .txt, .pdf"
        );
        continue;
      }

      // Validate file size
      if (file.size > maxFileSize) {
        $(".error-message").text(
          `File "${file.name}" exceeds the maximum limit of 128MB.`
        );
        continue;
      }

      const fileElement = `<div class="file-item">
                                            <span class="nameFile style-font">${file.name}</span>
                                            <span class="delete-file font-bold btn-red">Delete</span>
                                        </div>`;
      $(".fx-files").append(fileElement);
    }
  });
  $(document).on("click", ".delete-file", function () {
    $(this).closest(".file-item").remove();
  });
});
