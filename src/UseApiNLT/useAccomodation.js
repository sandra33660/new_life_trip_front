import newlifetripfetch from "../FetchNewlifetrip/fetchAccomodation";
import { useQuery } from "react-query";

export default function useTrip() {
  return useQuery("accomodation", newlifetripfetch("/accomodation"));
}
