import newlifetripfetch from "../NewlifetripFetch/index";
import { useQuery } from "react-query";

export default function useNewlifetrip() {
  return useQuery("trip", newlifetripfetch("/api/v1/Catalog/trip"));
}
