$(document).ready(function () {
  // Trigger file input when the image is clicked
  $(".imgUpload").click(function () {
    $("#fileInput").click();
  });

  // Handle file selection
  $("#fileInput").change(function (e) {
    const files = e.target.files; // Get all selected files
    const allowedExtensions = /(\.jpg|\.jpeg|\.gif|\.png|\.txt|\.pdf)$/i; // Allowed file extensions
    const maxFileSize = 128 * 1024 * 1024; // 128MB in bytes

    // Clear previous error messages
    $(".error-message").text("");

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validate file type
      if (!allowedExtensions.exec(file.name)) {
        $(".error-message").text(
          "Invalid file type. Allowed types: .jpg, .gif, .jpeg, .png, .txt, .pdf"
        );
        continue; // Skip this file
      }

      // Validate file size
      if (file.size > maxFileSize) {
        $(".error-message").text(
          `File "${file.name}" exceeds the maximum limit of 128MB.`
        );
        continue; // Skip this file
      }

      // Display the file name
      const fileElement = `<div class="file-item">
                                            <span class="nameFile style-font">${file.name}</span>
                                            <span class="delete-file font-bold btn-red">Delete</span>
                                        </div>`;
      $(".fx-files").append(fileElement);
    }
  });

  // Handle file deletion
  $(document).on("click", ".delete-file", function () {
    $(this).closest(".file-item").remove();
  });
});
