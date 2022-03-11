import React from 'react'


//This is the container to hold filter options

export default function FilterContainer() {
    
    return (
      
      <details open className="overflow-hidden border border-gray-200 rounded w-1/2">
        <summary className="flex items-center justify-between px-5 py-3 bg-gray-100">
          <span className="text-sm font-medium">
            Toggle Filters
          </span>
      
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </summary>
      
        <form action="" className="border-t border-gray-200 lg:border-t-0">
          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Product type
            </legend>
      
            <div className="px-5 py-6 space-y-2">
              <div className="flex items-center">
                  <input
                    id="blush"
                    type="checkbox"
                    name="blush"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="blush"
                    className="ml-3 text-sm font-medium"
                  >
                    Blush
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="lip_liner"
                    type="checkbox"
                    name="lip_liner"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="lip_liner"
                    className="ml-3 text-sm font-medium"
                  >
                    Lip Liner
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="concealer"
                    type="checkbox"
                    name="concealer"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="concealer"
                    className="ml-3 text-sm font-medium"
                  >
                    Concealer
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="Bronzer"
                    type="checkbox"
                    name="Bronzer"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="Bronzer"
                    className="ml-3 text-sm font-medium"
                  >
                    Bronzer
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="foundation"
                    type="checkbox"
                    name="foundation"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="foundation"
                    className="ml-3 text-sm font-medium"
                  >
                    Foundation
                  </label>
                </div>
            </div>
          </fieldset>

            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Price
              </legend>
      
              <div className="px-5 py-6 space-y-2">
                <div className="flex items-center">
                  <input
                    id="0to10"
                    type="checkbox"
                    name="0to10"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="0-10"
                    className="ml-3 text-sm font-medium"
                  >
                    $0-$10
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="0to10"
                    type="checkbox"
                    name="0to10"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="0-10"
                    className="ml-3 text-sm font-medium"
                  >
                    $10-$50
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="0to10"
                    type="checkbox"
                    name="0to10"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="0-10"
                    className="ml-3 text-sm font-medium"
                  >
                    &gt;$50
                  </label>
                </div>
      
              </div>
            </fieldset>

            <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Product Color
            </legend>
      
            <div className="px-5 py-6 space-y-2">
              <div className="flex items-center">
                  <input
                    id="bronze"
                    type="checkbox"
                    name="bronze"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="bronze"
                    className="ml-3 text-sm font-medium"
                  >
                    Bronze
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="coral"
                    type="checkbox"
                    name="coral"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="coral"
                    className="ml-3 text-sm font-medium"
                  >
                    Coral
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="deep_rose"
                    type="checkbox"
                    name="deep_rose"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="deep_rose"
                    className="ml-3 text-sm font-medium"
                  >
                    Deep Rose
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="nude"
                    type="checkbox"
                    name="nude"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="nude"
                    className="ml-3 text-sm font-medium"
                  >
                    Nude
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="light_pink"
                    type="checkbox"
                    name="light_pink"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="light_pink"
                    className="ml-3 text-sm font-medium"
                  >
                    Light Pink
                  </label>
                </div>
            </div>
          </fieldset>

            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Rating
              </legend>
      
              <div className="px-5 py-6 space-y-2">
                <div className="flex items-center">
                  <input
                    id="1star"
                    type="checkbox"
                    name="0to10"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="1star"
                    className="ml-3 text-sm font-medium"
                  >
                    1 Stars
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="2star"
                    type="checkbox"
                    name="2star"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="2star"
                    className="ml-3 text-sm font-medium"
                  >
                    2 Star
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="3star"
                    type="checkbox"
                    name="3star"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="3star"
                    className="ml-3 text-sm font-medium"
                  >
                    3 Stars
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="4star"
                    type="checkbox"
                    name="4star"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="4star"
                    className="ml-3 text-sm font-medium"
                  >
                    4 Stars
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="5star"
                    type="checkbox"
                    name="5star"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
      
                  <label
                    for="5star"
                    className="ml-3 text-sm font-medium"
                  >
                    5 Stars
                  </label>
                </div>
      
              </div>
            </fieldset>

          
      
          <div className="flex justify-between px-5 py-3 border-t border-gray-200">
            <button
              name="reset"
              type="button"
              className="text-xs font-medium text-gray-600 underline rounded"
            >
              Reset All
            </button>
      
            <button
              name="commit"
              type="button"
              className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </details>
    )
}
