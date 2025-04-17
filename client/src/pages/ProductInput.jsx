import React, { useState } from 'react';

const ProductInput = () => {
  const [productData, setProductData] = useState({
    image: null,
    type: '',
    material: '',
    story: '',
    region: '',
    priceRange: 100
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('image', productData.image);
    formData.append('type', productData.type);
    formData.append('material', productData.material);
    formData.append('story', productData.story);
    formData.append('region', productData.region);
    formData.append('priceRange', productData.priceRange);
  
    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      });
      const result = await res.json();
      console.log(result);
      alert('Uploaded successfully!');
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };
  

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Craft Input Form</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        
        <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2" />

        <input type="text" name="type" placeholder="Product Type" onChange={handleChange} className="border p-2" />

        <input type="text" name="material" placeholder="Material Used" onChange={handleChange} className="border p-2" />

        <textarea name="story" placeholder="Artisan Story" onChange={handleChange} className="border p-2" rows="4" />

        <input type="text" name="region" placeholder="Region" onChange={handleChange} className="border p-2" />

        <label className="block mt-2">
          Price Range: ₹{productData.priceRange}
          <input type="range" name="priceRange" min="50" max="10000" value={productData.priceRange} onChange={handleChange} className="w-full" />
        </label>

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Submit</button>
      </form>
    </div>
  );
};

export default ProductInput;
