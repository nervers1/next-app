use tokio::io::{self};
mod upload_chunk;
use dotenv::dotenv;



#[tokio::main]
async fn main() -> io::Result<()> {
    let file_path = "./module2/import.rs";
    let upload_url = "https://naver.com";
    let chunk_size = 1024 * 1024;

    dotenv().ok();

    for (key, value) in std::env::vars() {
      println!("{}: [{}]", key, value);
    }

    upload_chunk::upload_file_in_chunks(file_path, upload_url, chunk_size).await?;
    Ok(())


}