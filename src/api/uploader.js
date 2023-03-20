export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "i7ispqsu");
  return fetch("https://api.cloudinary.com/v1_1/davj0hpf5/image/upload", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
