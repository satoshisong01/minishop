import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts as fetchProducts, addNewProduct } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(["products"], fetchProducts, {
    staleTime: 1000 * 60,
  });

  //Mutation 즉각적으로 변경할 수 있도록 지정
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { productsQuery, addProduct };
}

//커스텀 훅을 만들어 products 마다 딜레이 시간을 주는지 즉각 변경이 필요한지 바로 볼수 있도록한다.