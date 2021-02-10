import newlifetripfetch from "../FetchNewlifetrip/fetchCity";
import { useQuery } from "react-query";

export default function useTrip() {
  return useQuery("city", newlifetripfetch("/city"));
}
