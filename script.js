let files = [];

function uploadFiles() {
    const input = document.getElementById("fileInput");

    if (!input.files.length) return;

    for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];

        files.push({
            name: file.name,
            url: URL.createObjectURL(file)
        });
    }

    input.value = "";
    renderFiles();
}

function renderFiles() {
    const list = document.getElementById("fileList");
    list.innerHTML = "";

    files.forEach((file, index) => {
        list.innerHTML += `
        <div class="file">
            <span>${file.name}</span>

            <div>
                <a href="${file.url}" download="${file.name}">
                    <button>Download</button>
                </a>

                <button onclick="deleteFile(${index})" style="background:red;color:white;">
                    Delete
                </button>
            </div>
        </div>
        `;
    });
}

function deleteFile(index) {
    files.splice(index, 1);
    renderFiles();
}
