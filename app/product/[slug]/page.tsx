import AddToBag from "@/app/components/AddToBag";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck, Info, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import CheckoutNow from "@/app/components/CheckoutNow"; // Import the CheckoutNow component

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id,
    additionalInfo
  }`;

  const data = await client.fetch(query);
  return data;
}

async function getRelatedProducts(
  categoryName: string,
  currentProductId: string
) {
  const query = `*[_type == "product" && category->name == "${categoryName}" && _id != "${currentProductId}"] {
    _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
  }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  const relatedProducts: fullProduct[] = await getRelatedProducts(
    data.categoryName,
    data._id
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
              />
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>

        {/* Additional Information and Reviews Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Additional Information Section */}
          {data.additionalInfo && (
            <div className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-800">
                  Additional Information
                </h3>
              </div>
              <p className="text-gray-600 whitespace-pre-line">
                {data.additionalInfo}
              </p>
            </div>
          )}

          {/* Reviews Section */}
          <div className="bg-teal-50 p-6 rounded-lg shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-teal-600" />
              <h3 className="text-xl font-bold text-gray-800">Reviews</h3>
            </div>
            <div className="space-y-4">
              {/* Mock Review */}
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  {/* User Avatar */}
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold">John Doe</span>
                    <div className="flex items-center gap-1 mt-1">
                      {/* Star Rating */}
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  &quot;This product is amazing! Highly recommend it.&quot;
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  Reviewed on October 10, 2023
                </p>
              </div>

              {/* No Other Reviews Message */}
              <p className="text-gray-600">No other reviews yet.</p>
            </div>
          </div>
        </div>

        {/* You may also like section */}
        <div className="mt-12 flex flex-col items-center justify-center w-full mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            You may also like
          </h2>
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex gap-6 w-max mx-auto px-4">
              {relatedProducts.map((product) => (
                <div
                  key={product._id}
                  className="group relative flex-shrink-0 w-64 h-96"
                >
                  <div className="w-full h-72 overflow-hidden rounded-md bg-gray-200">
                    {/* First Image */}
                    <Image
                      src={urlFor(product.images[0]).url()}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:hidden"
                      width={300}
                      height={400}
                    />
                    {/* Second Image on Hover */}
                    {product.images[1] && (
                      <Image
                        src={urlFor(product.images[1]).url()}
                        alt={product.name}
                        className="w-full h-full object-cover object-center hidden group-hover:block"
                        width={300}
                        height={400}
                      />
                    )}
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={`/product/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.categoryName}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
