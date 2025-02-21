import React from 'react';
import { useFormContext } from '../../contexts/FormContext';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

const states = [
  { value: '', label: 'Select State' },
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'AR', label: 'Arunachal Pradesh' },
  { value: 'AS', label: 'Assam' },
  { value: 'BR', label: 'Bihar' },
  { value: 'CG', label: 'Chhattisgarh' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'HP', label: 'Himachal Pradesh' },
  { value: 'JH', label: 'Jharkhand' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MN', label: 'Manipur' },
  { value: 'ML', label: 'Meghalaya' },
  { value: 'MZ', label: 'Mizoram' },
  { value: 'NL', label: 'Nagaland' },
  { value: 'OD', label: 'Odisha' },
  { value: 'PB', label: 'Punjab' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'SK', label: 'Sikkim' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'TG', label: 'Telangana' },
  { value: 'TR', label: 'Tripura' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'UK', label: 'Uttarakhand' },
  { value: 'WB', label: 'West Bengal' },
  { value: 'AN', label: 'Andaman and Nicobar Islands' },
  { value: 'CH', label: 'Chandigarh' },
  { value: 'DH', label: 'Dadra and Nagar Haveli and Daman and Diu' },
  { value: 'DL', label: 'Delhi' },
  { value: 'JK', label: 'Jammu and Kashmir' },
  { value: 'LA', label: 'Ladakh' },
  { value: 'LD', label: 'Lakshadweep' },
  { value: 'PY', label: 'Puducherry' }
];

const LocationDetailsStep: React.FC = () => {
  const { formData, updateFormData, errors, validateStep, setCurrentStep, resetForm } = useFormContext();

  const handlePrevious = () => {
    setCurrentStep('activity-details');
  };

  const handleSubmit = () => {
    if (validateStep('location-details')) {
      console.log('Form submitted with data:', formData);
      setTimeout(() => {
        const event = new CustomEvent('formSubmitted');
        window.dispatchEvent(event);
        resetForm();
      }, 500);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-6">Location Details</h2>
      <p className="text-sm text-gray-500 mb-6">Please provide the location for where this activity takes place.</p>
      
      <Input
        label="Venue/Location"
        placeholder="Please enter a venue/location name"
        value={formData.locationName}
        onChange={(e) => updateFormData({ locationName: e.target.value })}
        error={errors.locationName}
      />
      
      <Input
        label="Address Line 1"
        placeholder="Street address, e.g. building name/number, etc."
        value={formData.addressLine1}
        onChange={(e) => updateFormData({ addressLine1: e.target.value })}
        error={errors.addressLine1}
      />
      
      <Input
        label="Address Line 2"
        placeholder="Apartment, suite, unit, building, floor, etc."
        value={formData.addressLine2 || ''}
        onChange={(e) => updateFormData({ addressLine2: e.target.value })}
      />
      
      <Input
        label="ZIP Code"
        placeholder="e.g. 123 456"
        value={formData.zipCode}
        onChange={(e) => updateFormData({ zipCode: e.target.value })}
        error={errors.zipCode}
      />
      
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="City"
          placeholder="New York"
          value={formData.city}
          onChange={(e) => updateFormData({ city: e.target.value })}
          error={errors.city}
        />
        
        <Select
          label="State"
          options={states}
          value={formData.state}
          onChange={(value) => updateFormData({ state: value })}
          error={errors.state}
        />
      </div>
      
      <h3 className="text-lg font-medium mt-8 mb-4">Contact details</h3>
      <p className="text-sm text-gray-500 mb-4">Please provide contact information for this activity.</p>
      
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Contact Person"
          value={formData.contactPerson}
          onChange={(e) => updateFormData({ contactPerson: e.target.value })}
          error={errors.contactPerson}
        />
        
        <Input
          label="Contact Phone"
          value={formData.contactPhone}
          onChange={(e) => updateFormData({ contactPhone: e.target.value })}
          error={errors.contactPhone}
        />
      </div>
      
      <Input
        label="How many members can take part in the activity?"
        placeholder="Maximum number"
        type="number"
        value={formData.maxParticipants}
        onChange={(e) => updateFormData({ maxParticipants: e.target.value })}
        error={errors.maxParticipants}
      />
      
      <div className="mt-8 flex justify-between">
        <Button variant="secondary" onClick={handlePrevious}>
          Previous
        </Button>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LocationDetailsStep;