import newlifetripfetch from "../FetchNewlifetrip/fetchCatalog";
import { useQuery } from "react-query";

export default function useTrip() {
  return useQuery("trip", newlifetripfetch("/trip"));
}
