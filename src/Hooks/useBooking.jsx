import { useQuery } from "@tanstack/react-query";

const useBooking = (id) => {
  const { data: bookings = [], isLoading: loading } = useQuery({
    queryKey: ["bookings", id],
    queryFn: async () => {
      const res = await fetch(
        `https://academiclandia-server.vercel.app/bookings/${id}`
      );
      return res.json();
    },
  });
  return [bookings, loading];
};

export default useBooking;
