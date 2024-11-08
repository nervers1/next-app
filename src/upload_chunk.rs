use reqwest::Client;
use tokio::fs::File;
use tokio::io::{self, AsyncReadExt};

async fn upload_chunk(client: &Client, url: &str, data: &[u8], chunk_number: usize) -> Result<(), reqwest::Error> {
  let part = reqwest::multipart::Part::bytes(data.to_vec())
      .file_name(format!("chunk_{}", chunk_number));
  let form = reqwest::multipart::Form::new().part("file", part);

  client.post(url).multipart(form).send().await?.error_for_status()?;
  Ok(())

}

pub async fn upload_file_in_chunks(file_path: &str, url: &str, chunk_size: usize) -> io::Result<()> {
  let client = Client::new();
  let mut file = File::open(file_path).await?;
  let mut buffer = vec![0; chunk_size];
  let mut chunk_number = 0;

  loop {
      let n = file.read(&mut buffer).await?;
      if n == 0 {
        break;
      }
      upload_chunk(&client, url, &buffer[..n], chunk_number).await.unwrap();
      chunk_number += 1;
  }
  Ok(())
}