// page for uploading audio files
// use <form> to upload files

const UploadPage = () => {
  return (
    <div>
      <h1>Upload Page</h1>
      <form
        action="http://localhost:3000/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" name="audio" />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default UploadPage;
