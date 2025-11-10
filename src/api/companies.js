import data from "../data/mockCompanies.json";

export async function fetchCompanies() {
  await new Promise(r => setTimeout(r, 400));
  return data;
}
