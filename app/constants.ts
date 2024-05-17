export default async function getBillion(id: string) {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );
  return response.json();
}
