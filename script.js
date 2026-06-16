let files = [];

function uploadFile() {
    const input = document.getElementById("fileInput");

    const file = input.files[0];
    if(!file) return;

    files.push(file.name);
    renderFiles();
}

function renderFiles() {
    const list = document.getElementById("fileList");
    list.innerHTML = "";

    files.forEach((f, i) => {
        list.innerHTML += `
        <div class="file">
            ${f}
            <button onclick="alert('No real download yet')">Download</button>
            <button onclick="deleteFile(${i})">Delete</button>
        </div>`;
    });
}

function deleteFile(i){
    files.splice(i,1);
    renderFiles();
}
