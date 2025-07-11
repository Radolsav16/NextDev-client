import { useState } from 'react';
import {
  BuildingOffice2Icon,
  GlobeAltIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import FormInput from '../form-helpers/FormInput';
import LogoInput from '../form-helpers/LogoInput';

export default function EmpForm() {
  

  return (
    
    <>
      <div className="grid grid-cols-1 gap-6">
       
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-900">
            Company Name
          </label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <BuildingOffice2Icon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Acme Corp"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-900">
            Website
          </label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <GlobeAltIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="url"
              name="website"
              id="website"
              placeholder="https://www.acme.com"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Contact Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            HR Contact Email
          </label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="hr@acme.com"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-900">
            Location
          </label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <MapPinIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="City, Country"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Company Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-900">
            Company Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value.slice(0, maxDesc))}
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
            placeholder="Tell us about your company..."
          />
          <p className="mt-1 text-xs text-gray-500 text-right">
            {description.length}/{maxDesc} chars
          </p>
        </div>


      
        <LogoInput />

  
  

        <FormInput label={"Industry"} name={"industry"} id={"industry"} placeholder={"Software, Finance, Healthcare"}/>

       
       
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <button type="button" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700"
        >
          Save Company Profile
        </button>
      </div>
      </>
  
  );
}
