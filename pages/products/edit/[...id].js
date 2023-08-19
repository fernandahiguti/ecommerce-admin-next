import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductForm from "@/components/ProductForm";

export default function EditProductPage(){
  const [productInfo, setProductInfo] = useState();
  const router = useRouter();
  const {id} = router.query;
  useEffect(() => {
    if(!id){
      return;
    }
    axios.get('/api/products?id='+id).then(response => {
      setProductInfo(response.data);
    });
  }, [id])
  return(
    <Layout>
      <h1>Edit Products</h1>
      {productInfo && (
        <ProductForm {...productInfo} />
      )}     
    </Layout>

  )
}