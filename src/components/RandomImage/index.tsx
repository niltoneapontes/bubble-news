import React, { useEffect, useState } from "react";
import { unsplashApi } from "../../services/unsplash";

export default function RandomImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    unsplashApi.get("").then((response) => {
      setImageUrl(response.data.urls.full);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center w-full">
      <h2 className="font-bold font-serif text-3xl w-full text-center mb-8 text-lightGray">
        Random image of the day
      </h2>
      {imageUrl && <img src={imageUrl} className="w-full" alt="Random image" />}
    </div>
  );
}
