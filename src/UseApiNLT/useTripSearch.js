import newlifetripfetch from "../FetchNewlifetrip/fetchSearchTrip";
import { useQuery } from "react-query";

export default function useTrip() {
  return useQuery("searchTrip", newlifetripfetch("/{searchTrip}}"));
}
