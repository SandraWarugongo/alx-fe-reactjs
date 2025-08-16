import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.summary) newErrors.summary = 'Summary is required';
    if (!formData.ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!formData.instructions) newErrors.instructions = 'Instructions are required';
    if (!formData.prepTime) newErrors.prepTime = 'Prep time is required';
    if (!formData.cookTime) newErrors.cookTime = 'Cook time is required';
    if (!formData.servings) newErrors.servings = 'Servings is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Recipe submitted successfully!');
      // Reset form
      setFormData({
        title: '',
        summary: '',
        ingredients: '',
        instructions: '',
        prepTime: '',
        cookTime: '',
        servings: ''
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Recipe Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Summary</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
            {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Prep Time</label>
              <input
                type="text"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.prepTime && <p className="text-red-500 text-sm mt-1">{errors.prepTime}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Cook Time</label>
              <input
                type="text"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.cookTime && <p className="text-red-500 text-sm mt-1">{errors.cookTime}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Servings</label>
              <input
                type="number"
                name="servings"
                value={formData.servings}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.servings && <p className="text-red-500 text-sm mt-1">{errors.servings}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ingredients</label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="5"
              placeholder="List ingredients, one per line"
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Instructions</label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="6"
              placeholder="Write cooking instructions step by step"
            />
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;