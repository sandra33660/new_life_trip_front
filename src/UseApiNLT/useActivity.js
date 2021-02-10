import newlifetripfetch from "../FetchNewlifetrip/fetchActivity";
import { useQuery } from "react-query";

export default function useTrip() {
  return useQuery("activity", newlifetripfetch("/activity"));
}
