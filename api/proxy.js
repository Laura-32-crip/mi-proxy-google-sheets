export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: "Falta el parámetro url" });
  const response = await fetch(url);
  const data = await response.text();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/csv");
  return res.status(200).send(data);
}
Crear proxy final
