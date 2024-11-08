use tokio::io::{self};
mod upload_chunk;



#[tokio::main]
async fn main() -> io::Result<()> {
    let file_path = "./module2/import.rs";
    let upload_url = "https://naver.com";
    let chunk_size = 1024 * 1024;

    upload_chunk::upload_file_in_chunks(file_path, upload_url, chunk_size).await?;
    Ok(())
}