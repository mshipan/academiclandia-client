import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
  const { data: bookings = [], isLoading: loading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        "https://academiclandia-server.vercel.app/bookings"
      );
      return res.json();
    },
  });
  return [bookings, loading];
};

export default useBooking;
